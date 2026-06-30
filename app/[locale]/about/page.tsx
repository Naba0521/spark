import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";
import PageHeader from "@/components/PageHeader";
import FeatureCards from "@/components/FeatureCards";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");
  const values = t.raw("values") as string[];

  return (
    <>
      <PageHeader title={t("title")} subtitle={t("intro")} />
      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-2">
          <div className="rounded-2xl border border-spark-100 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-spark-900">{t("missionTitle")}</h2>
            <p className="mt-4 text-sm leading-7 text-gray-600">{t("mission")}</p>
          </div>
          <div className="rounded-2xl border border-spark-100 bg-spark-100 p-8">
            <h2 className="text-2xl font-bold text-spark-900">{t("valuesTitle")}</h2>
            <ul className="mt-4 space-y-3">
              {values.map((value) => (
                <li
                  key={value}
                  className="flex items-start gap-3 text-sm leading-6 text-gray-700"
                >
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-spark-700" />
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <FeatureCards />
    </>
  );
}
