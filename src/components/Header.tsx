"use client";

import { ChevronDown, Search, User, Heart, ShoppingBag } from "lucide-react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { useCartStore } from "@/lib/store/useCartStore";
import { useHasMounted } from "@/lib/hooks/useHasMounted";

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
];

export default function Header() {
  const hasMounted = useHasMounted();
  const openCart = useCartStore((state) => state.openCart);
  const totalCount = useCartStore((state) => state.getTotalCount());

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FAF8F5] border-b border-[#E5E0D8]">
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

          <button
            type="button"
            aria-label="Кошик"
            onClick={openCart}
            className="relative hover:opacity-70 transition-opacity"
          >
            <ShoppingBag size={20} strokeWidth={1.5} color="#1A1A1A" />
            {hasMounted && totalCount > 0 && (
              <span className="absolute -top-2 -right-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#1A1A1A] px-1 text-[10px] font-medium text-white">
                {totalCount}
              </span>
            )}
          </button>
        </div>
      </Container>
    </header>
  );
}
