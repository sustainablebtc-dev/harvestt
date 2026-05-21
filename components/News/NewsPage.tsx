import React from "react";
import NewsHero from "./NewsHero";
import { getNewsPageData } from "@/sanity/sanity-utils";

export default async function NewsPage() {
   const newsPageData = await getNewsPageData();
   return (
      <>
         <NewsHero newsPageData={newsPageData} />
      </>
   );
}
