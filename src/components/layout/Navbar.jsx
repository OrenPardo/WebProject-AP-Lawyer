'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import LangToggle from '@/components/shared/LangToggle';

export default function Navbar() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuBtnRef = useRef(null);

  const isHome = pathname === '/';

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
    menuBtnRef.current?.focus();
  }, []);

  // Close mobile menu on Escape key (WCAG 2.1.1 / 2.1.2)
  useEffect(() => {
    if (!mobileOpen) return;
    const handleKey = (e) => { if (e.key === 'Escape') closeMobile(); };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [mobileOpen, closeMobile]);

  /** Resolve section link: bare hash on homepage, absolute on subpages */
  const sectionHref = (hash) => (isHome ? hash : `/${hash}`);

  /** Handle section link click: on homepage, smooth-scroll natively */
  const handleSectionClick = (e, hash) => {
    if (isHome) {
      e.preventDefault();
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-stone-200"
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand — no hover effect (matches original) */}
        {isHome ? (
          <button
            className="text-2xl font-bold tracking-tighter text-left rtl:text-right cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            dangerouslySetInnerHTML={{ __html: t('brand') }}
          />
        ) : (
          <button
            className="text-2xl font-bold tracking-tighter text-left rtl:text-right cursor-pointer"
            onClick={() => router.push('/')}
            aria-label="Back to home"
            dangerouslySetInnerHTML={{ __html: t('brand') }}
          />
        )}

        {/* Desktop navigation links */}
        <div className="hidden lg:flex space-x-8 font-medium text-sm uppercase tracking-widest">
          <Link
            href={sectionHref('#expertise')}
            className="nav-link hover:text-gold transition"
            onClick={(e) => handleSectionClick(e, '#expertise')}
          >
            {t('nav_expertise')}
          </Link>
          <Link
            href={sectionHref('#about')}
            className="nav-link hover:text-gold transition"
            onClick={(e) => handleSectionClick(e, '#about')}
          >
            {t('nav_philosophy')}
          </Link>
        </div>

        {/* Right-side controls */}
        <div className="flex items-center gap-4 lg:gap-6">
          <LangToggle />

          {/* Desktop CTA — hover:bg-gold is new; WCAG 2.2 AA compliant:
               text contrast white-on-gold = 5.85:1 (>4.5:1 §1.4.3),
               focus outline offset lands on white nav bg = 5.85:1 (>3:1 §1.4.11),
               focus ring visible in all states (§2.4.7, §2.4.11) */}
          <Link
            href={sectionHref('#contact')}
            className="hidden lg:inline-block bg-stone-900 text-white px-8 py-2 text-xs uppercase tracking-widest hover:bg-gold focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#835e21] transition"
            onClick={(e) => handleSectionClick(e, '#contact')}
          >
            {t('nav_get_in_touch')}
          </Link>

          {/* Mobile menu toggle */}
          <button
            ref={menuBtnRef}
            className="inline-flex lg:hidden p-2 text-stone-900"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <svg
              aria-hidden="true"
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  mobileOpen
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M4 6h16M4 12h16M4 18h16'
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        role="region"
        aria-label="Mobile navigation"
        className={`${
          mobileOpen ? 'block' : 'hidden'
        } lg:hidden bg-white/95 backdrop-blur-md border-t border-stone-200 px-6 py-6 space-y-4`}
      >
        <Link
          href={sectionHref('#expertise')}
          onClick={(e) => { handleSectionClick(e, '#expertise'); closeMobile(); }}
          className="block text-sm font-medium uppercase tracking-widest hover:text-gold transition py-2"
        >
          {t('nav_expertise')}
        </Link>
        <Link
          href={sectionHref('#about')}
          onClick={(e) => { handleSectionClick(e, '#about'); closeMobile(); }}
          className="block text-sm font-medium uppercase tracking-widest hover:text-gold transition py-2"
        >
          {t('nav_philosophy')}
        </Link>
        <Link
          href={sectionHref('#contact')}
          onClick={(e) => { handleSectionClick(e, '#contact'); closeMobile(); }}
          className="block bg-stone-900 text-white px-6 py-3 text-xs uppercase tracking-widest hover:bg-gold focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#835e21] transition text-center"
        >
          {t('nav_get_in_touch')}
        </Link>
      </div>
    </nav>
  );
}
