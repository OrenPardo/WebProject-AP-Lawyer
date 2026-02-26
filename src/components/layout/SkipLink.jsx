'use client';

import { useTranslation } from 'react-i18next';

export default function SkipLink() {
  const { t } = useTranslation();

  return (
    <a href="#main" className="skip-link">
      {t('skip_to_content')}
    </a>
  );
}
