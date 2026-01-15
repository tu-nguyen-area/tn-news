import Link from 'next/link';
import { deleteNews } from '@/app/lib/actions';

export function EditNews({ id }: { id: string }) {
  return (
  <>

  <Link href={`/profiles/${id}/edit`}>
    <button className="bg-black dark:bg-white rounded-lg text-white
      dark:text-black p-2 w-full md:w-36 h-10 hover:bg-gradient-to-r
      hover:from-blue-500 hover:via-purple-500 hover:to-rose-500
      hover:text-white"
    >
      Edit
    </button>
  </Link>

  </>
  );
}

export function DeleteNews({ id }: { id: string }) {
  const deleteNewsId = deleteNews.bind(null, id);

  return (
  <>

  <form action={deleteNewsId}>
    <button type="submit" className="bg-black dark:bg-white rounded-lg
      text-white dark:text-black p-2 w-full md:w-36 h-10
      hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500
      hover:to-rose-500 hover:text-white"
    >
      Delete
    </button>
  </form>

  </>
  );
}
