'use client';

import { createNews, NewsState } from '@/app/lib/actions';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import Link from 'next/link';

function Submit() {
  const { pending } = useFormStatus();
  return (
    <button className="bg-black dark:bg-white rounded-lg text-white
      dark:text-black p-2 w-full md:w-36 h-10 hover:bg-gradient-to-r
      hover:from-blue-500 hover:via-purple-500 hover:to-rose-500
      hover:text-white" type="submit" disabled={pending}
    >
      {pending ? "Confirming..." : "Confirm"}
    </button>
  );
}

export default function CreateForm({
  user_id,
}: {
  user_id: string;
}) {
  const initialState: NewsState = { message: null, errors: {} };
  const createNewsWithId = createNews.bind(null, `${user_id}`);
  const [state, formAction] = useActionState(createNewsWithId, initialState);

  return (
  <>

  <section className="m-8">
    <form action={formAction}>
      <div className="my-6">
        <label className="text-xl bg-gradient-to-r from-blue-500
          via-purple-500 to-rose-500 bg-clip-text font-bold text-transparent"
        >
          Title
        </label>
        <input name="news_title" placeholder="Title..." className="rounded-lg
          w-full border-2 p-2" required
        ></input>
      </div>
      <input name="news_published" type="hidden" defaultValue=""></input>
      <div className="my-6">
        <label className="text-xl bg-gradient-to-r from-blue-500 via-purple-500
          to-rose-500 bg-clip-text font-bold text-transparent"
        >
          Content
        </label>
        <textarea name="news_content" placeholder="Content..."
          className="rounded-lg w-full h-64 md:h-96 border-2 p-2" required
        ></textarea>
      </div>
      <div className="grid gap-6 md:flex md:justify-between my-6 md:my-12">
        <Link href="/profiles">
          <button className="bg-black dark:bg-white rounded-lg text-white
            dark:text-black p-2 w-full md:w-36 h-10 hover:bg-gradient-to-r
            hover:from-blue-500 hover:via-purple-500 hover:to-rose-500
            hover:text-white"
          >Cancel</button>
        </Link>
        <Submit />
      </div>
    </form>
  </section>

  </>
  );
}
