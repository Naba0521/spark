import { getTranslations } from "next-intl/server";
import FeatureIcon from "./FeatureIcon";

const featureKeys = ["teachers", "groups", "programs", "environment"] as const;

export default async function FeatureCards() {
  const t = await getTranslations("features");

  return (
    <section className="bg-spark-100 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-spark-900 sm:text-4xl">
          {t("title")}
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featureKeys.map((key) => (
            <div
              key={key}
              className="rounded-2xl border border-spark-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-spark-100">
                <FeatureIcon name={key} />
              </div>
              <h3 className="text-lg font-bold text-spark-900">
                {t(`items.${key}.title`)}
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                {t(`items.${key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
