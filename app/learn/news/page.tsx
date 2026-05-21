import NewsPage from "@/components/News/NewsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: "News & Insights | Harvestt",
   description: "Stay up to date with the latest research and insights from Harvestt.",
};

export default function page() {
   return <NewsPage />;
}
