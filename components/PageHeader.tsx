type PageHeaderProps = {
  title: string;
  subtitle?: string;
};

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="bg-gradient-to-br from-spark-900 to-spark-700 py-10 text-white sm:py-14 lg:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h1 className="break-words text-2xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/90 sm:mt-4 sm:text-base lg:text-lg">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}
