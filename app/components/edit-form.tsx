'use client';

import { editNews, NewsState } from '@/app/lib/actions';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import Link from 'next/link';

function Submit() {
  const { pending } = useFormStatus();

  return (
    <button className="bg-black dark:bg-white rounded-lg text-white
      dark:text-black p-2 w-full md:w-36 h-10 hover:bg-gradient-to-r
      hover:from-blue-500 hover:via-purple-500 hover:to-rose-500
      hover:text-white" type="submit" disabled={pending}>
      {pending ? "Confirming..." : "Confirm"}
    </button>
  );
}

export default function EditForm({
  news_id,
  news_title,
  news_creator,
  news_published,
  news_content,
}: {
  news_id: string,
  news_title: string,
  news_creator: string,
  news_published: string,
  news_content: string
}) {
  const initialState: NewsState = { message: null, errors: {} };
  const editNewsWithId = editNews.bind(null, news_id, news_creator);
  const [state, formAction] = useActionState(editNewsWithId, initialState);

  return (
  <>

  <section className="m-8">
    <form action={formAction}>
      <div className="my-6">
        <label className="text-xl bg-gradient-to-r from-blue-500 via-purple-500
          to-rose-500 bg-clip-text font-bold text-transparent"
        >
          Title
        </label>
        <input name="news_title" defaultValue={news_title} placeholder="Title..."
          className="rounded-lg w-full border-2 p-2" required>
        </input>
      </div>
      <div className="my-6 flex justify-between gap-16">
        <div className="w-full">
          <label className="bg-gradient-to-r from-blue-500 via-purple-500
            to-rose-500 bg-clip-text font-bold text-transparent text-xl"
          >
            Published
          </label>
          <select name="news_published" defaultValue={news_published}
            className="rounded-lg w-full border-2 p-2" required
          >
            <option value="true">Public</option>
            <option value="false">Private</option>
          </select>
        </div>
      </div>
      <div className="my-6">
        <label className="bg-gradient-to-r from-blue-500 via-purple-500
          to-rose-500 bg-clip-text font-bold text-transparent text-xl"
        >
          Content
        </label>
        <textarea name="news_content" defaultValue={news_content}
          placeholder="Content..."
          className="rounded-lg w-full h-64 md:h-96 border-2 p-2" required>
        </textarea>
      </div>
      <div className="grid gap-6 md:flex md:justify-between my-6 md:my-12">
        <Link href={`/profiles/${news_id}`}>
          <button className="bg-black dark:bg-white rounded-lg text-white
            dark:text-black p-2 w-full md:w-36 h-10 hover:bg-gradient-to-r
            hover:from-blue-500 hover:via-purple-500 hover:to-rose-500
            hover:text-white"
          >
            Cancel
          </button>
        </Link>
        <Submit />
      </div>
    </form>
  </section>

  </>
  );
}
