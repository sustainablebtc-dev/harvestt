"use client";

import styles from "@/app/learn/news/News.module.scss";
import Link from "next/link";
import Image from "next/image";

const ArticleSidebar = ({ latestNewsData }: { latestNewsData: any }) => {
   if (!latestNewsData || !latestNewsData.news) {
      return null;
   }

   const latestPosts = latestNewsData.news
      .slice(0, 5);

   return (
      <aside className={styles.articleAside}>
         <div className={styles.articleAsideCard}>
            <h3 className="text-xl font-bold border-b border-border-default pb-4">Recent Posts</h3>

            <ul className={styles.relatedList}>
               {latestPosts.map((news: any) => (
                  <li key={news._id}>
                     {news.imageURL && (
                        <div className="relative w-20 h-20 flex-shrink-0 bg-muted">
                           <Image
                              src={news.imageURL}
                              alt={news.title}
                              fill
                              sizes="80px"
                              className="object-cover"
                           />
                        </div>
                     )}
                     <div>
                        <Link 
                           href={news.btnIsRedirect ? news.url : `/learn/news/${news.slug.current}`}
                           target={news.btnIsRedirect ? "_blank" : ""}
                        >
                           <h4 className={styles.relatedListHeading}>
                              {news.title}
                           </h4>
                        </Link>
                        <span className="text-[10px] uppercase tracking-widest text-secondary">
                           {new Date(news.date || news._createdAt).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric"
                           })}
                        </span>
                     </div>
                  </li>
               ))}
            </ul>
         </div>
      </aside>
   );
};

export default ArticleSidebar;
