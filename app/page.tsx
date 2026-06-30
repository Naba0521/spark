import RootRedirect from "@/components/RootRedirect";

export default function RootPage() {
  return (
    <>
      <meta httpEquiv="refresh" content="0; url=/mn/" />
      <RootRedirect />
    </>
  );
}
