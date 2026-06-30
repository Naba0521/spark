"use client";

import { FormEvent, useState } from "react";
import { useTranslations } from "next-intl";
import { CONTACT_EMAIL } from "@/lib/constants";

export default function ContactForm() {
  const t = useTranslations("contact.form");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const phone = String(formData.get("phone") ?? "");
    const message = String(formData.get("message") ?? "");

    const subject = encodeURIComponent(`Spark English Centre - ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\n\nMessage:\n${message}`,
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-spark-100 bg-spark-100 p-6 text-spark-900">
        {t("success")}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-spark-900">
          {t("name")}
        </label>
        <input
          id="name"
          name="name"
          required
          autoComplete="name"
          placeholder={t("placeholderName")}
          className="w-full rounded-xl border border-spark-100 px-4 py-3 text-sm outline-none ring-spark-500 focus:ring-2"
        />
      </div>
      <div>
        <label htmlFor="phone" className="mb-1 block text-sm font-medium text-spark-900">
          {t("phone")}
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          placeholder={t("placeholderPhone")}
          className="w-full rounded-xl border border-spark-100 px-4 py-3 text-sm outline-none ring-spark-500 focus:ring-2"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-spark-900">
          {t("message")}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder={t("placeholderMessage")}
          className="w-full rounded-xl border border-spark-100 px-4 py-3 text-sm outline-none ring-spark-500 focus:ring-2"
        />
      </div>
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-full bg-spark-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-spark-900 sm:w-auto"
      >
        {t("submit")}
      </button>
    </form>
  );
}
