import Image from "next/image";
import Container from "@/components/ui/Container";

const categories = [
  {
    image: "/images/cat-bedding.jpg",
    title: "Постільна білизна",
    subtitle: "Комплекти",
  },
  {
    image: "/images/cat-sheets.jpg",
    title: "Простирадла",
    subtitle: "На резинці та без",
  },
  {
    image: "/images/cat-pillows.jpg",
    title: "Наволочки",
    subtitle: "Різні розміри та кольори",
  },
  {
    image: "/images/cat-byaz.jpg",
    title: "Бязь Gold Lux колекція",
    subtitle: "Якісна та доступна бязь",
  },
  {
    image: "/images/cat-kids.jpg",
    title: "Для дітей",
    subtitle: "Комплекти для малюків",
  },
];

export default function Categories() {
  return (
    <section className="py-12">
      <Container>
        <h2 className="font-serif text-xl md:text-2xl font-normal text-[#1A1A1A] mb-6">
          Популярні категорії
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
          {categories.map(({ image, title, subtitle }) => (
            <div
              key={title}
              className="bg-white rounded-xl overflow-hidden border border-[#E5E0D8]/60 hover:shadow-md transition-all group"
            >
              <div className="relative aspect-4/3 overflow-hidden">
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="text-center py-4 px-2">
                <p className="text-sm font-medium text-[#1A1A1A]">{title}</p>
                <p className="text-xs text-[#766E65] mt-1">{subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
