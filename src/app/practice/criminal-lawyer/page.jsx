import SubpageShell from '@/components/expertise/SubpageShell';

export const metadata = {
  title: 'עורך דין פלילי | אלון פרדו',
  description: 'עורך דין פלילי - ייצוג בחקירות משטרה, כתבי אישום, דיוני מעצר וערעורים. ייעוץ משפטי ישיר ומקצועי.',
  alternates: { canonical: '/practice/criminal-lawyer' },
  openGraph: {
    title: 'עורך דין פלילי | אלון פרדו',
    description: 'עורך דין פלילי - ייצוג בחקירות משטרה, כתבי אישום, דיוני מעצר וערעורים.',
    images: [{ url: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=1200', width: 1200, height: 630 }],
  },
};

export default function CriminalLawyerPage() {
  return <SubpageShell areaKey="criminal" />;
}
