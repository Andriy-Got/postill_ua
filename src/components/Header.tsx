import { ChevronDown, Search, User, Heart, ShoppingBag } from "lucide-react";
import Link from "next/link";
import Container from "@/components/ui/Container";

const navLinks = [
  { label: "Ранфорс", href: "/ranfors" },
  { label: "Бязь Gold Lux", href: "/byaz-gold-lux" },
  { label: "Новинки", href: "/new" },
  { label: "Акції", href: "/sale" },
  { label: "Блог", href: "/blog" },
  { label: "Контакти", href: "/contacts" },
];

const actionIcons = [
  { Icon: Search, label: "Пошук" },
  { Icon: User, label: "Кабінет" },
  { Icon: Heart, label: "Обране" },
  { Icon: ShoppingBag, label: "Кошик" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E5E0D8]">
      <Container className="py-4 grid grid-cols-2 lg:grid-cols-3 items-center">
        <Link
          href="/"
          className="font-serif font-normal text-2xl tracking-tight text-[#1A1A1A] justify-self-start"
        >
          Postill_ua
        </Link>

        <nav className="hidden lg:flex items-center justify-center gap-7 text-sm font-medium text-[#1A1A1A] whitespace-nowrap">
          <Link
            href="/catalog"
            className="flex items-center gap-1 hover:opacity-70 transition-opacity whitespace-nowrap"
          >
            Каталог
            <ChevronDown size={16} strokeWidth={1.5} />
          </Link>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:opacity-70 transition-opacity whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-5 justify-self-end">
          {actionIcons.map(({ Icon, label }) => (
            <button
              key={label}
              type="button"
              aria-label={label}
              className="hover:opacity-70 transition-opacity"
            >
              <Icon size={20} strokeWidth={1.5} color="#1A1A1A" />
            </button>
          ))}
        </div>
      </Container>
    </header>
  );
}
