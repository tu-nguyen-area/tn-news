import EachNews from '@/app/components/each-news';
import { fetchEachNews } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import { auth } from '@/app/(auth)/auth';

export default async function SectionFive({ id }: { id: string }) {
  const each_news = await fetchEachNews(id);
  const session = await auth();
  const user_id = session?.user?.id;

  return (
  <>

  <section>
    {each_news.map((news) => {
      if(user_id !== news.news_creator) {
        notFound();
      }
      return (
        <EachNews
          key={news.news_id}
          news_title={news.news_title}
          name={news.name}
          news_content={news.news_content}
        />
      );
    })}
  </section>

  </>
  );
}
