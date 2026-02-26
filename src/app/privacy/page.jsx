import SubpageShell from '@/components/expertise/SubpageShell';

export const metadata = {
  title: 'מדיניות פרטיות | אלון פרדו',
  description: 'מדיניות הפרטיות של אתר עו"ד אלון פרדו - איסוף מידע, שמירה, אבטחה וזכויותיך.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return <SubpageShell areaKey="privacy" isPolicy />;
}
