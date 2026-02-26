import SubpageShell from '@/components/expertise/SubpageShell';

export const metadata = {
  title: 'מדיניות עוגיות | אלון פרדו',
  description: 'מדיניות העוגיות של אתר עו"ד אלון פרדו - סוגי עוגיות, שימוש והגדרות.',
  alternates: { canonical: '/cookies' },
};

export default function CookiesPage() {
  return <SubpageShell areaKey="cookies" isPolicy />;
}
