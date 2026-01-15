import ProfileNews from '@/app/components/profile-news';
import { fetchNewsProfile } from '@/app/lib/data';
import { auth } from '@/app/(auth)/auth';

export default async function SectionFour() {
  const session = await auth();
  const user_id = session?.user?.id;
  const list_news_profile = await fetchNewsProfile(`${user_id}`);

  return (
  <>

  <section>
    {list_news_profile.map((news) => {
      return (
        <ProfileNews
          key={news.news_id}
          news_id={news.news_id}
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
