"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/lib/navigation";
import { routing, type Locale } from "@/i18n/routing";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (nextLocale: Locale) => {
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <div className="flex overflow-hidden rounded-full border border-spark-100 text-xs font-semibold">
      {routing.locales.map((loc) => (
        <button
          key={loc}
          type="button"
          onClick={() => switchLocale(loc)}
          className={`px-3 py-2 uppercase transition-colors ${
            locale === loc
              ? "bg-spark-700 text-white"
              : "bg-white text-spark-900 hover:bg-spark-100"
          }`}
        >
          {loc}
        </button>
      ))}
    </div>
  );
}
