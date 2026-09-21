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
    <section className="bg-[#FFFFFF] border-y border-[#E5E0D8] pt-12 lg:pt-16">
      <Container className="grid grid-cols-2 gap-6 lg:flex lg:flex-wrap lg:justify-between lg:gap-x-6">
        {features.map(({ Icon, title, subtitle }) => (
          <div key={title} className="flex items-center">
            <div className="bg-[#FAF8F5] p-3 rounded-full text-[#1A1A1A] mr-3">
              <Icon size={20} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-sm font-medium text-[#1A1A1A]">{title}</p>
              <p className="text-sm text-[#666666]">{subtitle}</p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
}
