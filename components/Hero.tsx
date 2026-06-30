import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/lib/navigation";

export default async function Hero() {
  const t = await getTranslations("hero");

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-spark-900 via-spark-700 to-spark-500 text-white">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white blur-3xl" />
      </div>
      <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 sm:px-6 sm:py-16 md:grid-cols-2 md:gap-10 md:py-24">
        <div className="min-w-0">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 sm:text-sm">
            Spark English Centre
          </p>
          <h1 className="text-2xl font-bold leading-tight sm:text-3xl lg:text-5xl">
            {t("title")}
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/90 sm:mt-5 sm:text-base lg:text-lg">
            {t("subtitle")}
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-spark-900 transition hover:bg-spark-100 sm:w-auto"
            >
              {t("ctaPrimary")}
            </Link>
            <Link
              href="/summer-camp"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
            >
              {t("ctaSecondary")}
            </Link>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="rounded-full bg-white p-2 shadow-2xl shadow-black/20 sm:p-4">
            <Image
              src="/images/logo.jpg"
              alt="Spark English Centre logo"
              width={280}
              height={280}
              className="h-32 w-32 rounded-full object-cover sm:h-48 sm:w-48 md:h-56 md:w-56 lg:h-72 lg:w-72"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
