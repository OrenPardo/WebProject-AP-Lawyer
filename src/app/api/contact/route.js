import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// Rate limiting with periodic cleanup
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX = 5;

function isRateLimited(ip) {
  const now = Date.now();

  // Periodic cleanup: remove stale entries every check
  if (rateLimitMap.size > 1000) {
    for (const [key, entry] of rateLimitMap) {
      if (now - entry.start > RATE_LIMIT_WINDOW) rateLimitMap.delete(key);
    }
  }

  const entry = rateLimitMap.get(ip);
  if (!entry || now - entry.start > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { start: now, count: 1 });
    return false;
  }
  entry.count++;
  if (entry.count > RATE_LIMIT_MAX) return true;
  return false;
}

function getClientIp(request) {
  const forwarded = request.headers.get('x-forwarded-for');
  return (forwarded ? forwarded.split(',')[0].trim() : null)
    || request.headers.get('x-real-ip')
    || 'unknown';
}

const ALLOWED_ORIGINS = [
  'https://www.alon-pardo.co.il',
  'https://alon-pardo.co.il',
];

export async function POST(request) {
  // CSRF: validate Origin header
  const origin = request.headers.get('origin');
  if (origin && !ALLOWED_ORIGINS.includes(origin) && !origin.startsWith('http://localhost')) {
    return NextResponse.json({ ok: false, error: 'Forbidden' }, { status: 403 });
  }

  const ip = getClientIp(request);

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: 'Too many requests, please try again later' },
      { status: 429 }
    );
  }

  // Request size guard (reject bodies > 10 KB)
  const contentLength = request.headers.get('content-length');
  if (contentLength && parseInt(contentLength, 10) > 10240) {
    return NextResponse.json({ ok: false, error: 'Request too large' }, { status: 413 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request' }, { status: 400 });
  }

  // Reject unexpected fields
  const allowed = ['name', 'phone', 'caseType', 'email', 'message', 'lang'];
  for (const key of Object.keys(body)) {
    if (!allowed.includes(key)) {
      return NextResponse.json({ ok: false, error: 'Invalid request' }, { status: 400 });
    }
  }

  const { name, phone, caseType, email, message, lang } = body;

  // Validate required fields
  const required = { name, phone, caseType };
  const missing = Object.entries(required)
    .filter(([, v]) => v == null || String(v).trim() === '')
    .map(([k]) => k);
  if (missing.length) {
    return NextResponse.json(
      { ok: false, error: 'Missing required fields', fields: missing },
      { status: 400 }
    );
  }

  // Input length validation
  const limits = { name: 200, phone: 30, caseType: 100, email: 254, message: 5000 };
  for (const [field, max] of Object.entries(limits)) {
    if (body[field] && String(body[field]).length > max) {
      return NextResponse.json(
        { ok: false, error: `${field} exceeds maximum length of ${max}` },
        { status: 400 }
      );
    }
  }

  // Phone format validation
  if (!/^[\d\s\-+().]+$/.test(phone)) {
    return NextResponse.json({ ok: false, error: 'Invalid phone format' }, { status: 400 });
  }

  // Email format validation (optional field)
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return NextResponse.json({ ok: false, error: 'Invalid email format' }, { status: 400 });
  }

  if (!process.env.SMTP_PASS) {
    console.warn('SMTP_PASS not configured – email skipped');
    return NextResponse.json({ ok: true });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER || 'pardooren@gmail.com',
      pass: process.env.SMTP_PASS,
    },
  });

  const safeName = esc(name.trim());
  const safePhone = esc(phone.trim());
  const safeCaseType = esc(caseType.trim());
  const safeEmail = email ? esc(email.trim()) : '';
  const safeMessage = esc((message ?? '').trim()).replace(/\n/g, '<br>');

  const isHe = lang === 'he';
  const subject = isHe
    ? `פנייה חדשה: ${safeName} – ${safeCaseType}`
    : `New Contact: ${safeName} – ${safeCaseType}`;

  const html = `
    <div dir="${isHe ? 'rtl' : 'ltr'}" style="font-family:sans-serif;max-width:600px;margin:0 auto">
      <h2 style="color:#835e21">${isHe ? 'פנייה חדשה מאתר אלון פרדו' : 'New contact from Alon Pardo website'}</h2>
      <table style="width:100%;border-collapse:collapse">
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;width:30%">${isHe ? 'שם' : 'Name'}</td><td style="padding:8px;border-bottom:1px solid #eee">${safeName}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">${isHe ? 'טלפון' : 'Phone'}</td><td style="padding:8px;border-bottom:1px solid #eee">${safePhone}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">${isHe ? 'סוג התיק' : 'Case Type'}</td><td style="padding:8px;border-bottom:1px solid #eee">${safeCaseType}</td></tr>
        ${safeEmail ? `<tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">${isHe ? 'אימייל' : 'Email'}</td><td style="padding:8px;border-bottom:1px solid #eee">${safeEmail}</td></tr>` : ''}
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;vertical-align:top">${isHe ? 'פרטים' : 'Message'}</td><td style="padding:8px;border-bottom:1px solid #eee">${safeMessage}</td></tr>
      </table>
    </div>`;

  try {
    await transporter.sendMail({
      from: `"Alon Pardo Website" <${process.env.SMTP_USER || 'pardooren@gmail.com'}>`,
      to: 'pardooren@gmail.com',
      subject,
      html,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Email send error:', err.message);
    return NextResponse.json({ ok: false, error: 'Failed to send email' }, { status: 500 });
  }
}
