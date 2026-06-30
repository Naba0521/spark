import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/Hero";
import SummerCampBanner from "@/components/SummerCampBanner";
import FeatureCards from "@/components/FeatureCards";
import FacebookEmbed from "@/components/FacebookEmbed";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <SummerCampBanner />
      <FeatureCards />
      <FacebookEmbed />
    </>
  );
}
