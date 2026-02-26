import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PracticeAreaContent from './PracticeAreaContent';

export default function SubpageShell({ areaKey, isPolicy = false }) {
  return (
    <>
      <Navbar />
      <PracticeAreaContent areaKey={areaKey} isPolicy={isPolicy} />
      <Footer />
    </>
  );
}
