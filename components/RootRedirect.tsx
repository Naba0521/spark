"use client";

import { useEffect } from "react";

export default function RootRedirect() {
  useEffect(() => {
    window.location.replace("/mn/");
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-spark-100 px-4">
      <p className="text-sm text-spark-900">Redirecting…</p>
    </main>
  );
}
