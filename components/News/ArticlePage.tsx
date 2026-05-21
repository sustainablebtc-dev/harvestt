import styles from "@/app/learn/news/News.module.scss";
import ArticleContent from "./ArticleContent";
import ArticleSidebar from "./ArticleSidebar";
import { getArticleData, getNewsPageData } from "@/sanity/sanity-utils";
import { notFound } from "next/navigation";

export default async function ArticlePage({ slug }: { slug: string }) {
   const articleData = await getArticleData(slug);
   const latestNewsData = await getNewsPageData();

   if (!articleData) {
      notFound();
   }

   return (
      <div className={styles.article}>
         <div className={styles.container}>
            <div className={styles.articleLayout}>
               <ArticleContent articleData={articleData} />
               <ArticleSidebar latestNewsData={latestNewsData} />
            </div>
         </div>
      </div>
   );
}
