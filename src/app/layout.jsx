import { Playfair_Display, Inter, Assistant } from 'next/font/google';
import I18nProvider from '@/i18n/I18nProvider';
import SkipLink from '@/components/layout/SkipLink';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700'],
  display: 'swap',
  variable: '--font-heading',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  display: 'swap',
  variable: '--font-body',
});

const assistant = Assistant({
  subsets: ['hebrew', 'latin'],
  weight: ['300', '400', '600', '700'],
  display: 'swap',
  variable: '--font-hebrew',
});

export const metadata = {
  metadataBase: new URL('https://www.alon-pardo.co.il'),
  title: {
    default: 'אלון פרדו - עורך דין | Alon Pardo - Attorney at Law',
    template: '%s | אלון פרדו - עורך דין',
  },
  description: 'עורך דין אלון פרדו - ייצוג משפטי מקצועי בפלילי, תעבורה, מנהלי, דיני עבודה ונגישות',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#835e21',
};

export default function RootLayout({ children }) {
  return (
    <html
      dir="rtl"
      lang="he"
      className={`${playfair.variable} ${inter.variable} ${assistant.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-stone-50 text-stone-900 min-h-screen flex flex-col">
        <I18nProvider>
          <SkipLink />
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
