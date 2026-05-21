import ArticlePage from "@/components/News/ArticlePage";
import { Metadata } from "next";

type Props = {
   params: Promise<{
      slug: string;
   }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
   const { slug } = await params;
   return {
      title: `${slug} | News | Harvestt`,
      description: "Read the latest article from Harvestt.",
   };
}

export default async function page({ params }: Props) {
   const { slug } = await params;
   return <ArticlePage slug={slug} />;
}
