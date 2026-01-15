import New from '@/app/components/new';
import { fetchNews } from '@/app/lib/data';

export default async function SectionOne() {
  const list_news = await fetchNews();

  return (
  <>

  <section>
    {list_news.map((news) => {
      return (
        <New
          key={news.news_id}
          news_id={news.news_id}
          name={news.name}
          news_title={news.news_title}
          news_content={news.news_content}
        />
      );
    })}
  </section>

  </>
  );
}
