'use server';

import { genSaltSync, hashSync } from 'bcrypt-ts';
import postgres from 'postgres';

const sql = postgres(process.env.DATABASE_URL!,  { ssl: 'verify-full' });

export async function getUser(email: string) {
  try {
    const data = await sql`
      SELECT * FROM "Users"
      WHERE "email" = ${`${email}`};
    `;

    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch user data.');
  }
}

export async function createUser(email: string, password: string) {
  const salt = genSaltSync(10);
  const hash = hashSync(password, salt);
  const name = email;
  const time_created = new Date();

  try {
    await sql`
      INSERT INTO "Users" (name, email, password, time_created)
      VALUES(${name}, ${email}, ${hash}, ${time_created});
    `;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to create user.');
  }
}

export async function fetchNews() {
  try {
    const data = await sql`
      SELECT * FROM "News" JOIN "Users"
      ON "News"."news_creator" = "Users"."id"
      WHERE "News"."news_published" = 'true'
      ORDER BY "News"."time_created" DESC;
    `;

    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch post data.');
  }
}

export async function fetchNewsProfile(user_id: string) {
  try {
    const data = await sql`
      SELECT * FROM "News" JOIN "Users"
      ON "News"."news_creator" = "Users"."id"
      WHERE "News"."news_creator" = ${`${user_id}`}
      ORDER BY "News"."time_created" DESC;
    `;

    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch profile data');
  }
}

export async function fetchEachNews(news_id: string) {
  try {
    const data = await sql`
      SELECT * FROM "News" JOIN "Users"
      ON "News"."news_creator" = "Users"."id"
      WHERE "News"."news_id" = ${`${news_id}`};
    `;

    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch each post data.');
  }
}
