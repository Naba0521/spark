import { getTranslations } from "next-intl/server";
import { Link } from "@/lib/navigation";

export default async function SummerCampBanner() {
  const t = await getTranslations("summerCamp.banner");

  return (
    <section className="border-y border-spark-100 bg-gradient-to-r from-spark-100 via-white to-spark-100">
      <div className="mx-auto flex max-w-6xl flex-col items-stretch justify-between gap-4 px-4 py-6 sm:flex-row sm:items-center sm:px-6">
        <div className="min-w-0">
          <span className="mb-2 inline-flex rounded-full bg-spark-700 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
            {t("badge")}
          </span>
          <h2 className="text-lg font-bold text-spark-900 sm:text-2xl">{t("title")}</h2>
          <p className="mt-1 text-sm text-gray-600">{t("subtitle")}</p>
        </div>
        <Link
          href="/summer-camp"
          className="inline-flex w-full shrink-0 items-center justify-center rounded-full bg-spark-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-spark-900 sm:w-auto"
        >
          {t("cta")}
        </Link>
      </div>
    </section>
  );
}
