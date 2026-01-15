import EachNews from '@/app/components/each-news';
import { fetchEachNews } from '@/app/lib/data';

export default async function SectionTwo({ id }: { id: string }) {
  const each_news = await fetchEachNews(id);

  return (
  <>

  <section>
    {each_news.map((news) => {
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
