export type Product = {
  id: string;
  name: string;
  fabric: "Ранфорс" | "Бязь Gold Lux";
  price: number;
  oldPrice?: number;
  badge?: string;
  image: string;
};

export const featuredProducts: Product[] = [
  {
    id: "lisovi-druzi",
    name: "Комплект «Лісові друзі»",
    fabric: "Ранфорс",
    price: 1650,
    oldPrice: 1950,
    badge: "ХІТ ПРОДАЖУ",
    image: "/images/product-placeholder.jpg",
  },
  {
    id: "warm-beige",
    name: "Комплект «Warm Beige»",
    fabric: "Ранфорс",
    price: 1850,
    badge: "ТОП",
    image: "/images/product-placeholder.jpg",
  },
  {
    id: "terracotta-bloom",
    name: "Комплект «Terracotta Bloom»",
    fabric: "Бязь Gold Lux",
    price: 1750,
    oldPrice: 2050,
    badge: "-15%",
    image: "/images/product-placeholder.jpg",
  },
  {
    id: "myatnyi-zatyshok",
    name: "Комплект «М'ятний затишок»",
    fabric: "Ранфорс",
    price: 1900,
    image: "/images/product-placeholder.jpg",
  },
];
