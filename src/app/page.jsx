import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import HeroSection from '@/components/home/HeroSection';
import ExpertiseSection from '@/components/home/ExpertiseSection';
import AboutSection from '@/components/home/AboutSection';
import ContactSection from '@/components/contact/ContactSection';

const legalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  '@id': 'https://www.alon-pardo.co.il/#legal-service',
  name: 'אלון פרדו - עורך דין',
  alternateName: 'Alon Pardo - Attorney at Law',
  description: 'ייצוג משפטי אישי בתחומי הפלילי, תעבורה, מינהלי, עבודה ונגישות',
  telephone: '+972524203401',
  url: 'https://www.alon-pardo.co.il',
  address: { '@type': 'PostalAddress', addressCountry: 'IL', addressLocality: 'Israel' },
  areaServed: { '@type': 'Country', name: 'Israel' },
  priceRange: '$$',
  serviceType: ['Criminal Law', 'Traffic Law', 'Administrative Law', 'Labour Law', 'Accessibility Law'],
  knowsAbout: ['משפט פלילי', 'דיני תעבורה', 'משפט מנהלי', 'דיני עבודה', 'נגישות'],
  availableLanguage: [
    { '@type': 'Language', name: 'Hebrew', alternateName: 'he' },
    { '@type': 'Language', name: 'English', alternateName: 'en' },
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    telephone: '+972524203401',
    availableLanguage: ['Hebrew', 'English'],
  },
  sameAs: ['https://wa.me/972524203401'],
};

export const metadata = {
  title: 'אלון פרדו | עורך דין',
  description: 'עו"ד אלון פרדו - ייצוג אישי בתחומי המשפט הפלילי, תעבורה, מינהלי, עבודה ונגישות. ייעוץ ראשוני ישיר ולא מחייב.',
  robots: 'index, follow',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    url: '/',
    title: 'אלון פרדו | עורך דין',
    description: 'ייצוג אישי בתחומי המשפט הפלילי, תעבורה, מינהלי, עבודה ונגישות.',
    images: [{ url: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=1200', width: 1200, height: 630 }],
    siteName: 'אלון פרדו - עורך דין',
  },
  twitter: {
    card: 'summary',
    title: 'אלון פרדו | עורך דין',
    description: 'ייצוג אישי בתחומי המשפט הפלילי, תעבורה, מינהלי, עבודה ונגישות.',
  },
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main" className="flex-grow">
        <HeroSection />
        <ExpertiseSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }}
      />
    </>
  );
}
