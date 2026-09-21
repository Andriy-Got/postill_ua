import Container from "@/components/ui/Container";
import SectionHeader from "@/components/SectionHeader";
import ProductCard from "@/components/ProductCard";
import { featuredProducts } from "@/data/products";

export default function FeaturedProducts() {
  return (
    <section className="bg-[#FAF8F5] pt-12 lg:pt-16 pb-12 lg:pb-16">
      <Container>
        <SectionHeader
          title="Хіти продажу"
          subtitle="Найпопулярніші комплекти для вашого затишку"
          ctaLabel="Дивитись всі комплекти →"
          ctaHref="/catalog"
          className="mb-8"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
