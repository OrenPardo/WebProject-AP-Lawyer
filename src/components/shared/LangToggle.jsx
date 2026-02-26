'use client';
import { useTranslation } from 'react-i18next';

export default function LangToggle() {
  const { i18n } = useTranslation();

  const toggle = () => {
    const next = i18n.language === 'he' ? 'en' : 'he';
    i18n.changeLanguage(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Switch Language / החלף שפה"
      className="text-xs font-bold uppercase tracking-widest hover:text-gold transition px-3 py-2 cursor-pointer"
    >
      {i18n.language === 'he' ? 'EN' : 'HE'}
    </button>
  );
}
