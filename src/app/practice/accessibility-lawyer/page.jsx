import SubpageShell from '@/components/expertise/SubpageShell';

export const metadata = {
  title: 'עורך דין נגישות | אלון פרדו',
  description: 'עורך דין נגישות - ייעוץ, ציות ותביעות נגישות לעסקים ויחידים. הנחיה מעשית ותיקון.',
  alternates: { canonical: '/practice/accessibility-lawyer' },
  openGraph: {
    title: 'עורך דין נגישות | אלון פרדו',
    description: 'עורך דין נגישות - ייעוץ, ציות ותביעות נגישות לעסקים ויחידים.',
    images: [{ url: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=1200', width: 1200, height: 630 }],
  },
};

export default function AccessibilityLawyerPage() {
  return <SubpageShell areaKey="accessibility" />;
}
