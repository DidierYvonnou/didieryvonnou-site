import { ArrowRight } from "lucide-react";

type Props = {
  href: string;
  children: React.ReactNode;
  light?: boolean;
};

export default function PrimaryButton({
  href,
  children,
  light = false,
}: Props) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-3 rounded-full px-6 py-3 text-sm font-medium transition duration-300 ${
        light
          ? "bg-[#ede5dc] text-[#292928] hover:bg-white"
          : "bg-[#4c523c] text-[#ede5dc] hover:bg-[#3d4231]"
      }`}
    >
      {children}

      <ArrowRight
        size={16}
        className="transition group-hover:translate-x-1"
      />
    </a>
  );
}