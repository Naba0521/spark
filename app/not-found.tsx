import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-spark-100 px-4 text-center">
      <Image
        src="/images/logo.jpg"
        alt="Spark English Centre"
        width={96}
        height={96}
        className="mb-6 h-24 w-24 rounded-full object-cover"
      />
      <h1 className="text-3xl font-bold text-spark-900">404</h1>
      <p className="mt-3 max-w-md text-sm text-gray-600">
        Page not found / Хуудас олдсонгүй
      </p>
      <Link
        href="/mn"
        className="mt-8 inline-flex rounded-full bg-spark-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-spark-900"
      >
        Back to home / Нүүр хуудас
      </Link>
    </main>
  );
}
