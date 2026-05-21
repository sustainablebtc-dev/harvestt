"use client";

import { useRef, useState } from "react";
import styles from "@/app/learn/news/News.module.scss";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const NewsHero = ({ newsPageData }: { newsPageData: any }) => {
   const [activeCategory, setActiveCategory] = useState("*");

   if (!newsPageData || !newsPageData.news) {
      return (
         <section className={styles.hero}>
            <div className="container">
               <p>No news found.</p>
            </div>
         </section>
      );
   }

   const filteredNews = activeCategory === "*" 
      ? newsPageData.news 
      : newsPageData.news.filter((article: any) => 
         article?.categories?.some((cat: any) => cat.categoryKey === activeCategory)
      );

   const latestNews = filteredNews.slice(0, 4);
   const remainingNews = filteredNews.slice(4);

   // Group news by category for sliders
   const categoriesWithNews = (newsPageData.categories || []).filter((cat: any) => 
      newsPageData.news.some((article: any) => 
         article?.categories?.some((articleCat: any) => articleCat.categoryKey === cat.categoryKey)
      )
   );

   return (
      <>
      <section className={styles.hero}>
         <div className={styles.container}>
            {/* Header */}
            <div style={{ marginBottom: "var(--space-16)" }}>
               <h1 className={styles.heroHeading}>
                  News & Insights
               </h1>
               <p className={styles.heroSubHeading}>
                  Stay up to date with the latest research and insights from Harvestt.
               </p>
            </div>

            {/* Featured Section */}
            <div className={styles.allCategoryHero}>
               {/* First featured article - full width */}
               {latestNews[0] && (
                  <div className={`${styles.articleCard} ${styles.featuredArticle}`} key={latestNews[0]._id}>
                     <div className={styles.articleImage}>
                        <Link
                           href={latestNews[0].btnIsRedirect ? (latestNews[0].url || "#") : `/learn/news/${latestNews[0]?.slug?.current || ""}`}
                           target={latestNews[0].btnIsRedirect ? "_blank" : ""}
                        >
                           {latestNews[0].imageURL && (
                              <Image
                                 src={latestNews[0].imageURL}
                                 alt={latestNews[0].title}
                                 fill
                                 sizes="(max-width: 1024px) 100vw, 40vw"
                                 priority
                              />
                           )}
                           <label>Featured</label>
                        </Link>
                     </div>

                     <div className={styles.content}>
                        <div className={styles.articleInfoData}>
                           <span className={styles.articleDate}>
                              {new Date(latestNews[0].date || latestNews[0]._createdAt).toLocaleDateString("en-US", {
                                 month: "short",
                                 day: "numeric",
                                 year: "numeric"
                              })}
                           </span>
                        </div>
                        <h2 className={styles.articleTitle}>
                           <Link href={latestNews[0].btnIsRedirect ? (latestNews[0].url || "#") : `/learn/news/${latestNews[0]?.slug?.current || ""}`}>
                              {latestNews[0].title}
                           </Link>
                        </h2>
                        <p className={styles.articleDescription}>
                           {latestNews[0].description}
                        </p>
                     </div>
                  </div>
               )}

               {/* Remaining 3 articles in a row */}
               <div className={styles.remainingArticles}>
                  {latestNews.slice(1, 4).map((news: any) => (
                     <div className={styles.articleCard} key={news._id}>
                        <div className={styles.articleImage}>
                           <Link
                              href={news.btnIsRedirect ? (news.url || "#") : `/learn/news/${news?.slug?.current || ""}`}
                              target={news.btnIsRedirect ? "_blank" : ""}
                           >
                              {news.imageURL && (
                                 <Image
                                    src={news.imageURL}
                                    alt={news.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                 />
                              )}
                              <label>Latest</label>
                           </Link>
                        </div>

                        <div className={styles.content}>
                           <div className={styles.articleInfoData}>
                              <span className={styles.articleDate}>
                                 {new Date(news.date || news._createdAt).toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                    year: "numeric"
                                 })}
                              </span>
                           </div>
                           <h2 className={styles.articleTitle}>
                              <Link href={news.btnIsRedirect ? (news.url || "#") : `/learn/news/${news?.slug?.current || ""}`}>
                                 {news.title}
                              </Link>
                           </h2>
                           <p className={styles.articleDescription}>
                              {news.description}
                           </p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* Category Sliders */}
      {categoriesWithNews.map((category: any) => {
         const categoryNews = newsPageData.news.filter((article: any) => 
            article.categories.some((cat: any) => cat.categoryKey === category.categoryKey)
         );

         return (
            <section 
               key={category._id} 
               className={`${styles.categoryWiseSliders} ${category.title.toLowerCase().includes('sbp') ? styles.sbpInMedia : ''}`}
            >
               <div className={styles.container}>
                  <div className={styles.sliderHeader}>
                     <h3 className={styles.sliderHeading}>{category.title}</h3>
                  </div>
                  <div className={styles.sliderWrapper}>
                        <div className={styles.sliderBody}>
                           <Swiper
                              modules={[Navigation, Pagination]}
                              spaceBetween={24}
                              slidesPerView={1}
                              navigation
                              breakpoints={{
                                 640: { slidesPerView: 2 },
                                 1024: { slidesPerView: 3 }
                              }}
                           >
                           {categoryNews.map((news: any) => (
                              <SwiperSlide key={news._id}>
                                 <div className={styles.articleCard}>
                                    <div className={styles.articleImage}>
                                       <Link
                                          href={news.btnIsRedirect ? (news.url || "#") : `/learn/news/${news?.slug?.current || ""}`}
                                       >
                                          {news.imageURL && (
                                             <Image
                                                src={news.imageURL}
                                                alt={news.title}
                                                fill
                                                sizes="(max-width: 768px) 100vw, 33vw"
                                             />
                                          )}
                                       </Link>
                                    </div>
                                    <div className={styles.content}>
                                       <div className={styles.articleInfoData}>
                                          <span className={styles.articleDate}>
                                             {new Date(news.date || news._createdAt).toLocaleDateString("en-US", {
                                                month: "short",
                                                day: "numeric",
                                                year: "numeric"
                                             })}
                                          </span>
                                       </div>
                                       <h4 className={styles.articleTitle}>
                                          <Link href={news.btnIsRedirect ? (news.url || "#") : `/learn/news/${news?.slug?.current || ""}`}>
                                             {news.title}
                                          </Link>
                                       </h4>
                                       {news.description && (
                                          <p className={styles.articleDescription}>
                                             {news.description}
                                          </p>
                                       )}
                                    </div>
                                 </div>
                              </SwiperSlide>
                           ))}
                        </Swiper>
                     </div>
                  </div>
               </div>
            </section>
         );
      })}
   </>
   );
};

export default NewsHero;
