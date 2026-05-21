"use client";

import styles from "@/app/learn/news/News.module.scss";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/sanity-urlFor";

const ArticleContent = ({ articleData }: { articleData: any }) => {
   return (
      <div className={styles.articleContent}>
         <h1 className={`${styles.articleTitle} heading-2`}>
            {articleData.title}
         </h1>

         <div className={styles.articleImage}>
            {articleData.image && (
               <Image
                  src={urlFor(articleData.image).url()}
                  alt={articleData.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 800px"
               />
            )}
         </div>

         <div className={styles.articleBody}>
            <PortableText value={articleData.content} />
         </div>
      </div>
   );
};

export default ArticleContent;
