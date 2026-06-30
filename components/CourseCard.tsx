import { FACEBOOK_MESSENGER_URL } from "@/lib/constants";

type CourseCardProps = {
  title: string;
  description: string;
  level: string;
  registerLabel: string;
};

export default function CourseCard({
  title,
  description,
  level,
  registerLabel,
}: CourseCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-spark-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="mb-4 inline-flex w-fit rounded-full bg-spark-100 px-3 py-1 text-xs font-semibold text-spark-700">
        {level}
      </div>
      <h3 className="text-xl font-bold text-spark-900">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-gray-600">{description}</p>
      <a
        href={FACEBOOK_MESSENGER_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center justify-center rounded-full bg-spark-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-spark-900"
      >
        {registerLabel}
      </a>
    </article>
  );
}
