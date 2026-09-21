import { ChevronDown } from "lucide-react";
import Link from "next/link";
import Container from "@/components/ui/Container";

export default function TopBar() {
  return (
    <div className="w-full bg-[#FAF8F5] border-b border-[#E5E0D8] text-[#766E65] text-xs py-2.5">
      <Container className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span>Доставка по всій Україні</span>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:inline">Оплата при отриманні</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <Link href="/about" className="hover:opacity-70 transition-opacity">
            Про нас
          </Link>
          <Link
            href="/delivery"
            className="hover:opacity-70 transition-opacity"
          >
            Доставка і оплата
          </Link>
          <Link
            href="/returns"
            className="flex items-center gap-1 hover:opacity-70 transition-opacity"
          >
            Повернення та обмін
            <ChevronDown size={14} strokeWidth={1.5} />
          </Link>
        </div>
      </Container>
    </div>
  );
}
