type FeatureIconProps = {
  name: "teachers" | "groups" | "programs" | "environment";
};

export default function FeatureIcon({ name }: FeatureIconProps) {
  const className = "h-6 w-6 text-spark-700";

  switch (name) {
    case "teachers":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 14l9-5-9-5-9 5 9 5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M6 12v5c0 1 2 3 6 3s6-2 6-3v-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "groups":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="17" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M4 19c0-2.5 2.2-4.5 5-4.5s5 2 5 4.5M14 19c0-1.8 1.5-3.5 3.5-3.5.9 0 1.7.3 2.3.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "programs":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M5 5.5A2.5 2.5 0 0 1 7.5 3H18v16H7.5A2.5 2.5 0 0 1 5 16.5v-11Z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M5 7.5H3.5A1.5 1.5 0 0 0 2 9v6a1.5 1.5 0 0 0 1.5 1.5H5" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "environment":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 3l2.2 4.5L19 8.5l-3.5 3.4.8 4.9L12 14.8 7.7 16.8l.8-4.9L5 8.5l4.8-1L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      );
  }
}
