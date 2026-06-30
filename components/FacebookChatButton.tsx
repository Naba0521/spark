import { FACEBOOK_MESSENGER_URL } from "@/lib/constants";

type FacebookChatButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "white";
};

const variants = {
  primary:
    "bg-spark-700 text-white hover:bg-spark-900",
  secondary:
    "border border-white/40 text-white hover:bg-white/10",
  white:
    "bg-white text-spark-900 hover:bg-spark-100",
};

export default function FacebookChatButton({
  children,
  className = "",
  variant = "primary",
}: FacebookChatButtonProps) {
  return (
    <a
      href={FACEBOOK_MESSENGER_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
