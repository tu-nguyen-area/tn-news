import Link from 'next/link';

export default function Footer() {
  const year = new Date();

  return (
  <>

  <footer className="flex justify-center text-white bg-gradient-to-r
    from-blue-500 via-purple-500 to-rose-500 p-3 md:p-6"
  >
    <section>
      <p>Privacy Policy | Terms of Use</p>
      <p>Powered by <Link
        href="https://www.tnadvancement.com/"
        target="_blank"
      >
        TN ADVANCEMENT</Link>
      </p>
      <p>&#169; {year.getFullYear()} TN News Project. All rights reserved</p>
    </section>
  </footer>

  </>
  );
}
