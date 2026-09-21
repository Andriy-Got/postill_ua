import Link from "next/link";
import { cn } from "cn";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
};

export default function SectionHeader({
  title,
  subtitle,
  ctaLabel,
  ctaHref,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("flex items-end justify-between", className)}>
      <div>
        <h2 className="font-serif text-2xl md:text-3xl text-[#1A1A1A]">
          {title}
        </h2>
        {subtitle && (
          <p className="text-xs md:text-sm text-[#766E65] mt-1">{subtitle}</p>
        )}
      </div>
      {ctaHref && ctaLabel && (
        <Link
          href={ctaHref}
          className="text-xs md:text-sm font-medium text-[#1A1A1A] hover:opacity-75 transition-opacity whitespace-nowrap"
        >
          {ctaLabel}
        </Link>
      )}
    </div>
  );
}
