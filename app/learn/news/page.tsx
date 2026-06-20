import NewsPage from "@/components/News/NewsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: "News & Insights | Sustainable Bitcoin Protocol",
   description: "Stay up to date with the latest research and insights from Sustainable Bitcoin Protocol.",
};

export default function page() {
   return <NewsPage />;
}
