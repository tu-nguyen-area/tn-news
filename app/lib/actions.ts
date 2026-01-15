'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import postgres from 'postgres';

const sql = postgres(process.env.DATABASE_URL!,  { ssl: 'verify-full' });

const NewsSchema = z.object({
  news_id: z.string(),
  news_title: z.string(),
  news_creator: z.string(),
  time_created: z.string(),
  news_content: z.string(),
  news_published: z.string(),
});

export type NewsState = {
  errors?: {
    news_title?: string[];
    news_content?: string[];
    news_published?: string[];
  };

  message?: string | null;
};

const CreateNews = NewsSchema.omit({news_id: true, news_creator: true, time_created: true});
const EditNews = NewsSchema.omit({news_id: true, news_creator: true, time_created: true});

export async function createNews(
  user_id: string,
  prevState: NewsState,
  formData: FormData,
) {
  const validatedFields = CreateNews.safeParse({
    news_title: formData.get('news_title'),
    news_content: formData.get('news_content'),
    news_published: formData.get('news_published'),
  });

  if(!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing fields. Failed to create post.',
    };
  }

  const {news_title, news_content, news_published} = validatedFields.data;
  const time_created = new Date();

  try {
    await sql`
      INSERT INTO "News" (news_title, news_creator, time_created, news_content, news_published)
      VALUES(${news_title}, ${user_id}, ${time_created}, ${news_content}, 'false');
    `;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to create post data.');
  }

  revalidatePath('/', 'layout');
  redirect('/profiles');
}

export async function editNews(
  news_id: string,
  user_id: string,
  prevState: NewsState,
  formData: FormData,
) {
  const validatedFields = EditNews.safeParse({
    news_title: formData.get('news_title'),
    news_content: formData.get('news_content'),
    news_published: formData.get('news_published'),
  });

  if(!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing fields. Failed to edit post.',
    };
  }

  const {news_title, news_content, news_published} = validatedFields.data;

  try {
    await sql`
      UPDATE "News" SET
      "news_title" = ${news_title},
      "news_content" = ${news_content},
      "news_published" = ${news_published}
      WHERE "news_id" = ${news_id};
    `;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to edit post data.');
  }

  revalidatePath('/', 'layout');
  redirect(`/profiles/${news_id}`);
}

export async function deleteNews(news_id: string) {
  try {
    await sql`
      DELETE FROM "News"
      WHERE "news_id" = ${news_id};
    `;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to delete post data.');
  }

  revalidatePath('/', 'layout');
  redirect('/profiles');
}
