import styles from '@/app/modules/post.module.css';

export default function EachNews({
  news_title,
  name,
  news_content,
}: {
  news_title: string;
  name: string;
  news_content: string;
}) {
  return (
  <>

  <section className={`${styles.postSection} bg-purple-100 dark:bg-neutral-900
    dark:text-white rounded-lg break-words`}
  >
    <div className={`${styles.postLayout}`}>
      <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r w-fit
        from-blue-500 via-purple-500 to-rose-500 bg-clip-text text-transparent
        dark:bg-gradient-to-r dark:from-blue-500 dark:via-purple-500
        dark:to-rose-500"
      >
        {news_title}
      </h2>
      <p className="text-sm">{`By ${name}`}</p>
      <p className="whitespace-pre-line md:whitespace-pre-wrap">{news_content}</p>
    </div>
  </section>

  </>
  );
}
