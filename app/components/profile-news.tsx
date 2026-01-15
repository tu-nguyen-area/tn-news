import Link from 'next/link';
import styles from '@/app/modules/post.module.css';

export default function ProfileNews({
  news_id,
  name,
  news_title,
  news_content,
}: {
  news_id: string;
  name: string;
  news_title: string;
  news_content: string;
}) {
  return (
  <>

  <section className={`${styles.postSection} bg-purple-100 rounded-lg
    border-2 break-words hover:bg-gradient-to-r hover:from-blue-500
    hover:via-purple-500 hover:to-rose-500 hover:text-white border-purple-500
    dark:hover:bg-gradient-to-r dark:hover:from-blue-500
    dark:hover:via-purple-500 dark:hover:to-rose-500
    dark:text-white dark:bg-neutral-900`}
  >
    <Link href={`/profiles/${news_id}`}>
      <div className={`${styles.postLayout} truncate`}>
        <h2 className="text-xl text-left md:text-center font-bold">
          {news_title}
        </h2>
        <p className="text-sm text-center">{`By ${name}`}</p>
        <p>{news_content}</p>
      </div>
    </Link>
  </section>

  </>
  );
}
