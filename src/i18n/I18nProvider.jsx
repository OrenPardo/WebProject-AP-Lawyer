'use client';

import { Fragment, useEffect, useRef, useState } from 'react';
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18n from './config';

function LanguageHandler({ children }) {
  const { i18n: i18nInstance } = useTranslation();
  const liveRef = useRef(null);
  const isInitialLoad = useRef(true);
  const [lang, setLang] = useState(i18nInstance.language);

  useEffect(() => {
    // Create aria-live region for language change announcements
    const div = document.createElement('div');
    div.id = 'lang-live-region';
    div.setAttribute('aria-live', 'polite');
    div.setAttribute('aria-atomic', 'true');
    div.style.cssText = 'position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0';
    document.body.appendChild(div);
    liveRef.current = div;

    // Restore saved language
    const saved = localStorage.getItem('lang');
    if (saved && saved !== 'he') {
      i18nInstance.changeLanguage(saved);
    }
    isInitialLoad.current = false;

    return () => {
      if (div.parentNode) div.parentNode.removeChild(div);
    };
  }, [i18nInstance]);

  useEffect(() => {
    const handleLangChange = (lng) => {
      document.documentElement.dir = lng === 'he' ? 'rtl' : 'ltr';
      document.documentElement.lang = lng;
      localStorage.setItem('lang', lng);
      setLang(lng);

      if (!isInitialLoad.current && liveRef.current) {
        liveRef.current.textContent = '';
        requestAnimationFrame(() => {
          if (liveRef.current) {
            liveRef.current.textContent = lng === 'he'
              ? 'השפה שונתה לעברית'
              : 'Language changed to English';
          }
        });
      }
    };

    i18nInstance.on('languageChanged', handleLangChange);
    return () => i18nInstance.off('languageChanged', handleLangChange);
  }, [i18nInstance]);

  // Key forces React to rebuild all children when language changes,
  // ensuring every t() call picks up the new language.
  return <Fragment key={lang}>{children}</Fragment>;
}

export default function I18nProvider({ children }) {
  return (
    <I18nextProvider i18n={i18n}>
      <LanguageHandler>{children}</LanguageHandler>
    </I18nextProvider>
  );
}
