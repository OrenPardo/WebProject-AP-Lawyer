import SubpageShell from '@/components/expertise/SubpageShell';

export const metadata = {
  title: 'הצהרת נגישות | אלון פרדו',
  description: 'הצהרת הנגישות של אתר עו"ד אלון פרדו - תקן WCAG 2.2 AA, תכונות נגישות ויצירת קשר.',
  alternates: { canonical: '/accessibility-statement' },
};

export default function AccessibilityStatementPage() {
  return <SubpageShell areaKey="accessibility_statement" isPolicy />;
}
