import EditForm from '@/app/components/edit-form';
import { fetchEachNews } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import { auth } from '@/app/(auth)/auth';

export default async function SectionThree({ id }: { id: string }) {
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
        <EditForm
          key={news.news_id}
          news_id={news.news_id}
          news_creator={news.news_creator}
          news_published={news.news_published}
          news_title={news.news_title}
          news_content={news.news_content}
        />
      );
    })}
  </section>

  </>
  );
}
