import SectionFive from '@/app/ui/home/section-five';
import { EditNews, DeleteNews } from '@/app/ui/home/buttons';
import Link from 'next/link';

export default async function Page(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const id = params.id;

  return (
  <>

  <main>
    <SectionFive id={id}/>
    <div className="grid gap-6 md:flex md:justify-between m-6 md:m-8">
      <Link href="/profiles">
        <button className="bg-black dark:bg-white rounded-lg text-white
          dark:text-black p-2 w-full md:w-36 h-10 hover:bg-gradient-to-r
          hover:from-blue-500 hover:via-purple-500 hover:to-rose-500
          hover:text-white"
        >
          Back
        </button>
      </Link>
      <DeleteNews id={id} />
      <EditNews id={id} />
    </div>
  </main>

  </>
  );
}
