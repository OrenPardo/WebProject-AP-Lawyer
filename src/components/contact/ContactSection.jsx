'use client';
import { useTranslation } from 'react-i18next';
import ContactForm from './ContactForm';

export default function ContactSection() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-12 md:py-24 bg-stone-900 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl mb-3">{t('contact_title')}</h2>
        <p className="text-stone-400 mb-2">{t('contact_subtitle')}</p>
        <p className="text-stone-400 text-sm mb-10">{t('contact_trust')}</p>
        <ContactForm />
      </div>
    </section>
  );
}
