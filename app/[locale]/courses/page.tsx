import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";
import PageHeader from "@/components/PageHeader";
import CourseCard from "@/components/CourseCard";

const courseKeys = ["general", "ielts", "kids", "business"] as const;

export default async function CoursesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("courses");

  return (
    <>
      <PageHeader title={t("title")} subtitle={t("subtitle")} />
      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:grid-cols-2 sm:px-6">
          {courseKeys.map((key) => (
            <CourseCard
              key={key}
              title={t(`items.${key}.title`)}
              description={t(`items.${key}.description`)}
              level={t(`items.${key}.level`)}
              registerLabel={t("register")}
            />
          ))}
        </div>
      </section>
    </>
  );
}
