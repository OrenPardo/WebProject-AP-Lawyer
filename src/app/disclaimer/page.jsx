import SubpageShell from '@/components/expertise/SubpageShell';

export const metadata = {
  title: 'הצהרה משפטית | אלון פרדו',
  description: 'הצהרה משפטית של אתר עו"ד אלון פרדו - הגבלות, אחריות ודין חל.',
  alternates: { canonical: '/disclaimer' },
};

export default function DisclaimerPage() {
  return <SubpageShell areaKey="disclaimer" isPolicy />;
}
