import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/lib/navigation";
import { FACEBOOK_URL } from "@/lib/constants";

export default async function Footer() {
  const t = await getTranslations("footer");
  const tNav = await getTranslations("nav");
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-spark-900 text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.jpg"
              alt="Spark English Centre"
              width={56}
              height={56}
              className="h-14 w-14 rounded-full object-cover"
            />
            <div>
              <p className="text-lg font-bold">Spark English Centre</p>
              <p className="text-sm text-white/80">{t("tagline")}</p>
            </div>
          </div>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-white/70">
            {t("menu")}
          </p>
          <div className="flex flex-col gap-2 text-sm">
            <Link href="/" className="hover:text-spark-500">
              {tNav("home")}
            </Link>
            <Link href="/about" className="hover:text-spark-500">
              {tNav("about")}
            </Link>
            <Link href="/summer-camp" className="hover:text-spark-500">
              {tNav("summerCamp")}
            </Link>
            <Link href="/courses" className="hover:text-spark-500">
              {tNav("courses")}
            </Link>
            <Link href="/contact" className="hover:text-spark-500">
              {tNav("contact")}
            </Link>
          </div>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-white/70">
            {t("social")}
          </p>
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm hover:text-spark-500"
          >
            Facebook
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/70">
        {t("rights", { year })}
      </div>
    </footer>
  );
}
