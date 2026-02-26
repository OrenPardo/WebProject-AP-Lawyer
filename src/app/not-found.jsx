import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-stone-50 text-stone-900 px-4">
      <h1 className="text-6xl font-heading font-bold text-gold mb-4">404</h1>

      <p className="text-xl mb-2 text-center" dir="rtl" lang="he">
        הדף שחיפשת לא נמצא
      </p>
      <p className="text-lg mb-8 text-center text-stone-500" dir="ltr" lang="en">
        The page you were looking for could not be found
      </p>

      <div className="flex gap-4">
        <Link
          href="/"
          className="inline-block bg-gold text-white px-6 py-3 rounded hover:opacity-90 transition font-semibold"
        >
          <span dir="rtl" lang="he">חזרה לדף הבית</span>
        </Link>
        <Link
          href="/"
          className="inline-block border border-gold text-gold px-6 py-3 rounded hover:bg-gold hover:text-white transition font-semibold"
        >
          <span dir="ltr" lang="en">Back to Home</span>
        </Link>
      </div>
    </main>
  );
}
