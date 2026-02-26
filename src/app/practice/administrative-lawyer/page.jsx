import SubpageShell from '@/components/expertise/SubpageShell';

export const metadata = {
  title: 'עורך דין מנהלי | אלון פרדו',
  description: 'עורך דין מנהלי - ערעורים על החלטות רשויות, היתרים, רישוי וסכסוכים מוניציפליים.',
  alternates: { canonical: '/practice/administrative-lawyer' },
  openGraph: {
    title: 'עורך דין מנהלי | אלון פרדו',
    description: 'עורך דין מנהלי - ערעורים על החלטות רשויות, היתרים, רישוי וסכסוכים מוניציפליים.',
    images: [{ url: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=1200', width: 1200, height: 630 }],
  },
};

export default function AdministrativeLawyerPage() {
  return <SubpageShell areaKey="admin" />;
}
