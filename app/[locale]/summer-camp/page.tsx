import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import PageHeader from "@/components/PageHeader";
import { Link } from "@/lib/navigation";
import {
  CAMP_PHONE_DISPLAY,
  CAMP_PHONE_TEL,
  FACEBOOK_URL,
} from "@/lib/constants";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "summerCamp.metadata" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

type Shift = { number: number; dates: string };
type Program = { title: string; description: string };
type Detail = { label: string; value: string };

export default async function SummerCampPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("summerCamp");

  const programs = t.raw("programs") as Program[];
  const advantages = t.raw("advantages") as string[];
  const shifts = t.raw("shifts") as Shift[];
  const details = t.raw("details") as Detail[];
  const statKeys = ["dates", "shifts", "ages", "location"] as const;

  return (
    <>
      <PageHeader title={t("title")} subtitle={t("intro")} />

      <section className="border-b border-spark-100 bg-spark-100 py-4">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-center text-sm font-bold uppercase tracking-[0.15em] text-spark-700">
            {t("hashtag")}
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl min-w-0 px-4 sm:px-6">
          <p className="mx-auto max-w-4xl text-center text-base leading-8 text-gray-700">
            {t("description")}
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {statKeys.map((key) => (
              <div
                key={key}
                className="rounded-2xl border border-spark-100 bg-white p-5 text-center shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-spark-700">
                  {t(`stats.${key}.label`)}
                </p>
                <p className="mt-2 text-lg font-bold text-spark-900">
                  {t(`stats.${key}.value`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-spark-100 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-bold text-spark-900 sm:text-3xl">
            {t("programsTitle")}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-sm text-gray-600">
            {t("programsNote")}
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => (
              <article
                key={program.title}
                className="rounded-2xl border border-spark-100 bg-white p-5 shadow-sm"
              >
                <h3 className="font-bold text-spark-900">{program.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {program.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl min-w-0 px-4 sm:px-6">
          <h2 className="text-center text-2xl font-bold text-spark-900 sm:text-3xl">
            {t("advantagesTitle")}
          </h2>
          <ul className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-2">
            {advantages.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-spark-100 bg-white p-4 text-sm leading-6 text-gray-700 shadow-sm"
              >
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-spark-700 text-xs font-bold text-white">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-spark-900 py-12 text-white sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-3xl font-bold">{t("detailsTitle")}</h2>
          <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
            {details.map(({ label, value }) => (
              <div
                key={label}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-white/70">
                  {label}
                </p>
                <p className="mt-2 font-semibold">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl min-w-0 px-4 sm:px-6">
          <h2 className="text-center text-2xl font-bold text-spark-900 sm:text-3xl">
            {t("scheduleTitle")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-gray-600">
            {t("scheduleNote")}
          </p>
          <div className="mx-auto mt-10 max-w-3xl overflow-x-auto rounded-2xl border border-spark-100 bg-white shadow-sm">
            <table className="w-full min-w-[260px] text-left text-sm">
              <thead className="bg-spark-100">
                <tr>
                  <th className="px-5 py-3 font-semibold text-spark-900">#</th>
                  <th className="px-5 py-3 font-semibold text-spark-900">
                    {locale === "mn" ? "Огноо" : "Dates"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {shifts.map((shift, index) => (
                  <tr
                    key={shift.number}
                    className={index % 2 === 0 ? "bg-white" : "bg-spark-100/40"}
                  >
                    <td className="px-5 py-3 font-bold text-spark-700">
                      {shift.number}
                    </td>
                    <td className="px-5 py-3 text-gray-700">{shift.dates}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-spark-700 to-spark-900 py-14 text-white sm:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold">{t("registerTitle")}</h2>
          <p className="mt-4 text-base leading-7 text-white/90">
            {t("registerText")}
          </p>
          <p className="mt-6 text-lg font-semibold text-white/90">
            {t("closing")}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={CAMP_PHONE_TEL}
              className="inline-flex w-full items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-spark-900 transition hover:bg-spark-100 sm:w-auto"
            >
              {t("registerCall")}
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/40 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
            >
              Facebook
            </a>
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/40 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
            >
              {t("registerCta")}
            </Link>
          </div>
          <p className="mt-6 text-2xl font-bold">{CAMP_PHONE_DISPLAY}</p>
        </div>
      </section>
    </>
  );
}
