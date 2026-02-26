'use client';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

export default function AboutSection() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-12 md:py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        <div className="order-2 md:order-1">
          <Image
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800"
            alt="Lawyer Office"
            className="rounded shadow-xl"
            width={800}
            height={534}
          />
        </div>
        <div className="order-1 md:order-2 rtl:text-right">
          <h2 className="text-4xl mb-8 leading-tight">{t('about_title')}</h2>
          <div className="space-y-8">
            <div className="accent-border pl-6 rtl:pl-0 rtl:pr-6">
              <h3 className="font-bold mb-2 uppercase text-xs tracking-widest text-gold">
                {t('about_item_1_title')}
              </h3>
              <p className="text-stone-600 text-sm">{t('about_item_1_desc')}</p>
              <p className="text-stone-600 text-xs mt-2 italic">{t('about_item_1_micro')}</p>
            </div>
            <div className="accent-border pl-6 rtl:pl-0 rtl:pr-6">
              <h3 className="font-bold mb-2 uppercase text-xs tracking-widest text-gold">
                {t('about_item_2_title')}
              </h3>
              <p className="text-stone-600 text-sm">{t('about_item_2_desc')}</p>
            </div>
            <div className="accent-border pl-6 rtl:pl-0 rtl:pr-6">
              <h3 className="font-bold mb-2 uppercase text-xs tracking-widest text-gold">
                {t('about_item_3_title')}
              </h3>
              <p className="text-stone-600 text-sm">{t('about_item_3_desc')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
