import { Leaf, Award, Heart, Truck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";

const features: { Icon: LucideIcon; title: string; subtitle: string }[] = [
  {
    Icon: Leaf,
    title: "Текстиль з Туреччини",
    subtitle: "Якість, якій довіряють",
  },
  {
    Icon: Award,
    title: "Преміальна якість",
    subtitle: "Висока щільність тканини",
  },
  {
    Icon: Heart,
    title: "З турботою про вас",
    subtitle: "Гіпоалергенні матеріали",
  },
  {
    Icon: Truck,
    title: "Швидка доставка",
    subtitle: "По всій Україні",
  },
];

export default function Features() {
  return (
    <section className="relative z-30 -mt-10 sm:-mt-12 lg:-mt-16">
      <Container>
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 bg-white rounded-3xl shadow-md p-6 sm:p-8">
          {features.map(({ Icon, title, subtitle }) => (
            <li key={title} className="flex items-center gap-3 min-w-0">
              <span className="shrink-0 flex items-center justify-center bg-[#FAF8F5] text-[#1A1A1A] rounded-full p-3">
                <Icon aria-hidden="true" size={20} strokeWidth={2} />
              </span>
              <span className="min-w-0">
                <p className="text-sm font-medium text-[#1A1A1A]">{title}</p>
                <p className="text-sm text-[#766E65]">{subtitle}</p>
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
