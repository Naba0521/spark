"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/lib/navigation";
import LanguageSwitcher from "./LanguageSwitcher";

const navItems = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/summer-camp", key: "summerCamp" },
  { href: "/courses", key: "courses" },
  { href: "/contact", key: "contact" },
] as const;

export default function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-spark-100 bg-white/95 backdrop-blur">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-2 px-4 py-3 sm:px-6 lg:grid-cols-[auto_1fr_auto] lg:gap-4">
        <Link href="/" className="flex min-w-0 items-center gap-2 sm:gap-3">
          <Image
            src="/images/logo.jpg"
            alt="Spark English Centre"
            width={48}
            height={48}
            className="h-10 w-10 shrink-0 rounded-full object-cover sm:h-12 sm:w-12"
            priority
          />
          <span className="hidden min-w-0 truncate text-sm font-bold leading-tight text-spark-900 sm:block">
            Spark
            <span className="block text-xs font-semibold text-spark-700">
              English Centre
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center justify-center gap-0.5 lg:flex xl:gap-1"
          aria-label="Main"
        >
          {navItems.map(({ href, key }) => (
            <Link
              key={key}
              href={href}
              className={`whitespace-nowrap rounded-full px-2.5 py-2 text-xs font-medium transition-colors xl:px-4 xl:text-sm ${
                isActive(href)
                  ? "bg-spark-700 text-white"
                  : "text-spark-900 hover:bg-spark-100"
              }`}
            >
              {t(key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-1.5 sm:gap-2">
          <LanguageSwitcher />
          <button
            type="button"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-spark-100 text-spark-900 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="text-xl leading-none">{open ? "×" : "☰"}</span>
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-spark-100 bg-white px-4 py-3 lg:hidden"
          aria-label="Mobile"
        >
          <div className="flex flex-col gap-1">
            {navItems.map(({ href, key }) => (
              <Link
                key={key}
                href={href}
                onClick={() => setOpen(false)}
                className={`rounded-xl px-4 py-3 text-sm font-medium ${
                  isActive(href)
                    ? "bg-spark-700 text-white"
                    : "text-spark-900 hover:bg-spark-100"
                }`}
              >
                {t(key)}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
