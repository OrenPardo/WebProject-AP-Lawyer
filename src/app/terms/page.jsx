import SubpageShell from '@/components/expertise/SubpageShell';

export const metadata = {
  title: 'תנאי שירות | אלון פרדו',
  description: 'תנאי השירות של אתר עו"ד אלון פרדו - שימוש באתר, הגבלות ודין חל.',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return <SubpageShell areaKey="terms" isPolicy />;
}
