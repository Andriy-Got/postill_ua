import Link from "next/link";
import { ChevronDown, Mail, Clock } from "lucide-react";
import Container from "@/components/ui/Container";
import NewsletterForm from "@/components/NewsletterForm";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function TelegramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 2 11 13" />
      <path d="M22 2 15 22l-4-9-9-4 20-7z" />
    </svg>
  );
}

function ViberIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 3c-5 0-9 3.6-9 8 0 2.6 1.4 4.9 3.6 6.4-.1.9-.5 2.4-1.6 3.6 1.7-.2 3.3-1 4.5-1.9.8.2 1.6.3 2.5.3 5 0 9-3.6 9-8s-4-8.4-9-8.4Z" />
      <path d="M9.3 10c.3 2 1.9 3.6 3.9 3.9" />
    </svg>
  );
}

const catalogLinks = [
  { label: "Ранфорс колекція", href: "/ranfors" },
  { label: "Бязь Gold Lux", href: "/byaz-gold-lux" },
  { label: "Дитяча серія", href: "/kids" },
  { label: "Знижки і акції", href: "/sale" },
  { label: "Новинки", href: "/new" },
];

const helpLinks = [
  { label: "Оплата і доставка", href: "/shipping" },
  { label: "Обмін та повернення 14 днів", href: "/returns" },
  { label: "Як обрати розмір", href: "/size-guide" },
  { label: "Догляд за постіллю", href: "/care" },
  { label: "Блог і натхнення", href: "/blog" },
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com", Icon: InstagramIcon },
  { label: "Telegram", href: "https://t.me", Icon: TelegramIcon },
  { label: "Viber", href: "viber://chat", Icon: ViberIcon },
];

const paymentBadges = [
  "Нова Пошта",
  "Visa",
  "Mastercard",
  "Apple Pay",
  "Google Pay",
];

function FooterLinkGroup({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <details
      open
      className="group border-t border-footer-border/60 py-4 lg:border-none lg:py-0"
    >
      <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-serif text-footer-text/90 [&::-webkit-details-marker]:hidden lg:cursor-default lg:pointer-events-none">
        {title}
        <ChevronDown
          size={16}
          strokeWidth={1.5}
          aria-hidden="true"
          className="shrink-0 text-footer-muted motion-safe:transition-transform group-open:rotate-180 lg:hidden"
        />
      </summary>
      <ul className="space-y-1 pt-3 lg:pt-6">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="block py-1.5 text-[15px] leading-relaxed text-footer-text hover:text-footer-accent motion-safe:transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </details>
  );
}

export default function Footer() {
  return (
    <footer className="bg-footer-surface text-footer-text">
      <Container className="grid grid-cols-1 gap-y-10 pt-10 pb-12 lg:grid-cols-5 lg:gap-x-10 lg:gap-y-0 lg:pt-14 lg:pb-16">
        <div className="lg:col-span-2">
          <Link
            href="/"
            className="font-serif font-normal text-2xl tracking-tight text-footer-text"
          >
            Postill_ua
          </Link>
          <p className="mt-3 max-w-xs text-sm text-footer-muted leading-relaxed">
            Преміальна постільна білизна з натуральної турецької бавовни.
          </p>

          <NewsletterForm />
        </div>

        <FooterLinkGroup title="Каталог" links={catalogLinks} />
        <FooterLinkGroup title="Допомога і інфо" links={helpLinks} />

        <details
          open
          className="group border-t border-footer-border/60 py-4 lg:border-none lg:py-0"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-serif text-footer-text/90 [&::-webkit-details-marker]:hidden lg:cursor-default lg:pointer-events-none">
            Контакти
            <ChevronDown
              size={16}
              strokeWidth={1.5}
              aria-hidden="true"
              className="shrink-0 text-footer-muted motion-safe:transition-transform group-open:rotate-180 lg:hidden"
            />
          </summary>

          <div className="pt-3 lg:pt-6">
            <a
              href="tel:+380671234567"
              className="block text-xl font-medium text-footer-text hover:text-footer-accent motion-safe:transition-colors"
            >
              +38 (067) 123 45 67
            </a>
            <a
              href="mailto:info@postill.ua"
              className="mt-2 flex items-center gap-2 text-sm text-footer-muted hover:text-footer-accent motion-safe:transition-colors"
            >
              <Mail size={16} strokeWidth={1.5} aria-hidden="true" />
              info@postill.ua
            </a>
            <p className="mt-2 flex items-center gap-2 text-sm text-footer-muted">
              <Clock size={16} strokeWidth={1.5} aria-hidden="true" />
              Щодня з 09:00 до 20:00
            </p>

            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-footer-border text-footer-text hover:border-footer-accent hover:text-footer-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-footer-accent motion-safe:transition-colors"
                >
                  <Icon width={18} height={18} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </details>
      </Container>

      <div className="border-t border-footer-border">
        <Container className="flex flex-col gap-6 py-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-2 text-xs text-footer-muted sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-2">
            <p>© 2026 Postill_ua. Всі права захищено.</p>
            <p>ФОП Іванов І. І. · РНОКПП 0000000000</p>
            <nav aria-label="Правова інформація" className="flex gap-4">
              <Link
                href="/privacy"
                className="hover:text-footer-accent motion-safe:transition-colors"
              >
                Політика конфіденційності
              </Link>
              <Link
                href="/offer"
                className="hover:text-footer-accent motion-safe:transition-colors"
              >
                Публічна оферта
              </Link>
            </nav>
          </div>

          <ul
            aria-label="Способи оплати та доставки"
            className="flex flex-wrap items-center gap-2"
          >
            {paymentBadges.map((badge) => (
              <li
                key={badge}
                className="rounded-full border border-footer-border px-3 py-1 text-[11px] text-footer-muted"
              >
                {badge}
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </footer>
  );
}
