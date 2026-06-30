import { getTranslations } from "next-intl/server";
import { FACEBOOK_URL } from "@/lib/constants";

export default async function FacebookEmbed() {
  const t = await getTranslations("facebook");

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl min-w-0 px-4 sm:px-6">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <h2 className="text-2xl font-bold text-spark-900 sm:text-3xl">{t("title")}</h2>
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-full bg-spark-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-spark-900 sm:w-auto"
          >
            {t("follow")}
          </a>
        </div>
        <div className="min-w-0 overflow-hidden rounded-2xl border border-spark-100 bg-white p-2 shadow-sm sm:p-4">
          <iframe
            title="Spark English Centre Facebook"
            src={`https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(FACEBOOK_URL)}&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false`}
            width="100%"
            height="500"
            style={{ border: "none", overflow: "hidden", maxWidth: "100%" }}
            loading="lazy"
            allow="encrypted-media"
            className="aspect-auto min-h-[420px] w-full max-w-full sm:min-h-[500px]"
          />
        </div>
      </div>
    </section>
  );
}
