import SubpageShell from '@/components/expertise/SubpageShell';

export const metadata = {
  title: 'עורך דין דיני עבודה | אלון פרדו',
  description: 'עורך דין דיני עבודה - ייצוג עובדים ומעסיקים בפיטורין, שימועים, תביעות שכר וסכסוכי עבודה.',
  alternates: { canonical: '/practice/employment-lawyer' },
  openGraph: {
    title: 'עורך דין דיני עבודה | אלון פרדו',
    description: 'עורך דין דיני עבודה - ייצוג עובדים ומעסיקים בפיטורין, שימועים, תביעות שכר וסכסוכי עבודה.',
    images: [{ url: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=1200', width: 1200, height: 630 }],
  },
};

export default function EmploymentLawyerPage() {
  return <SubpageShell areaKey="labour" />;
}
