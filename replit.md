# Lawyer Landing Page

## Overview

This is a professional landing page for a self-employed lawyer (Alon Pardo). The project is a simple static website served through Express.js, featuring a modern, elegant design with Tailwind CSS styling. The site includes sections for expertise, philosophy, and consultation contact, with support for both LTR and RTL layouts (suggesting multilingual support, likely Hebrew and English).

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Static HTML/CSS**: Single-page landing site with no JavaScript framework
- **Styling**: Tailwind CSS loaded via CDN for rapid, utility-first styling
- **Typography**: Google Fonts (Playfair Display for headings, Inter/Assistant for body text)
- **Design Approach**: Dark hero gradient with gold accent colors (#b38b3f), focusing on accessibility with WCAG AA compliant color choices
- **Accessibility Features**: Skip-to-content link, proper focus states, semantic HTML with ARIA labels

### Backend Architecture
- **Server**: Express.js (Node.js) serving static files
- **Routing**: Simple single-route setup serving `public/index.html` at root
- **Static Files**: Served from `public/` directory
- **Port Configuration**: Uses environment variable `PORT` or defaults to 5000, binds to `0.0.0.0`

### Project Structure
```
/
├── server.js          # Express server entry point
├── package.json       # Node.js dependencies and scripts
├── public/
│   ├── index.html     # Main landing page
│   └── expertise.html # Practice area pages (served via SEO-friendly routes)
└── main.py            # Empty (unused Python file)
```

### SEO-Friendly URL Routes
Practice area pages use clean URLs for better SEO:
- `/practice/criminal-lawyer` → Criminal Law
- `/practice/traffic-lawyer` → Traffic Law
- `/practice/administrative-lawyer` → Administrative Law
- `/practice/employment-lawyer` → Employment Law
- `/practice/accessibility-lawyer` → Accessibility Law

All routes serve `expertise.html` which detects the page type from the URL path.

### Design Decisions
- **Why Express over pure static hosting**: Allows for future API endpoints or server-side logic if needed (e.g., contact form processing)
- **Why Tailwind CDN**: Quick setup for a landing page without build tooling complexity
- **RTL Support**: CSS includes RTL-specific styles, indicating internationalization readiness

## External Dependencies

### NPM Packages
- **express** (^4.18.2): Web server framework for serving static files

### CDN Resources
- **Tailwind CSS**: Loaded from `cdn.tailwindcss.com` for styling
- **Google Fonts**: Playfair Display, Inter, and Assistant font families

### No Database
This is a static landing page with no data persistence requirements currently.