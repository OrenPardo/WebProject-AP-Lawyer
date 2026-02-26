import SubpageShell from '@/components/expertise/SubpageShell';

export const metadata = {
  title: 'עורך דין תעבורה | אלון פרדו',
  description: 'עורך דין תעבורה - ייצוג בעבירות תנועה, פסילת רישיון, נהיגה בשכרות ותאונות דרכים.',
  alternates: { canonical: '/practice/traffic-lawyer' },
  openGraph: {
    title: 'עורך דין תעבורה | אלון פרדו',
    description: 'עורך דין תעבורה - ייצוג בעבירות תנועה, פסילת רישיון, נהיגה בשכרות ותאונות דרכים.',
    images: [{ url: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=1200', width: 1200, height: 630 }],
  },
};

export default function TrafficLawyerPage() {
  return <SubpageShell areaKey="transport" />;
}
