import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { CAMP_PHONE_DISPLAY, CAMP_PHONE_TEL, FACEBOOK_URL } from "@/lib/constants";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");

  const phone = CAMP_PHONE_DISPLAY;
  const email = t("info.email");
  const phoneHref = CAMP_PHONE_TEL;

  const infoItems = [
    {
      label: t("phone"),
      value: phone,
      href: phoneHref,
    },
    {
      label: t("email"),
      value: email,
      href: `mailto:${email}`,
    },
    {
      label: t("address"),
      value: t("info.address"),
    },
    {
      label: t("hours"),
      value: t("info.hours"),
    },
  ];

  return (
    <>
      <PageHeader title={t("title")} subtitle={t("subtitle")} />
      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-2xl border border-spark-100 bg-white p-8 shadow-sm">
              <div className="space-y-5">
                {infoItems.map(({ label, value, href }) => (
                  <div key={label}>
                    <p className="text-xs font-semibold uppercase tracking-wide text-spark-700">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="mt-1 inline-block text-sm text-spark-700 hover:underline"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm text-gray-700">{value}</p>
                    )}
                  </div>
                ))}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-spark-700">
                    {t("facebook")}
                  </p>
                  <a
                    href={FACEBOOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-sm text-spark-700 hover:underline"
                  >
                    facebook.com/Spark English Centre
                  </a>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-spark-100 bg-spark-100">
              <iframe
                title="Spark English Centre map"
                src="https://maps.google.com/maps?q=Ulaanbaatar%2C%20Mongolia&output=embed"
                width="100%"
                height="280"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div className="rounded-2xl border border-spark-100 bg-white p-8 shadow-sm">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
