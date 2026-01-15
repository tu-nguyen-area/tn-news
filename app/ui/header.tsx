import Link from 'next/link';

export default function Header() {
  return (
  <>

  <header>
    <section className="flex justify-between text-white bg-gradient-to-r
      from-blue-500 via-purple-500 to-rose-500 p-1"
    >
      <Link href="/">
        TN NEWS
      </Link>
      <p>tu-nguyen@tnadvancement.com</p>
    </section>
  </header>

  </>
  );
}
