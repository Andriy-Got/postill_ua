import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-[540px] md:h-[600px] lg:h-[640px] overflow-hidden">
      <Image
        src="/images/header_photo.jpg"
        alt="Postill Bedding"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5]/90 via-[#FAF8F5]/50 to-transparent w-full md:w-3/5 z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 h-full flex flex-col justify-center items-start">
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#1A1A1A] leading-[1.2] mb-4 max-w-md">
          Постільна білизна
          <br />
          для вашого затишку
        </h1>
        <p className="text-xs sm:text-sm text-[#4A453E] leading-relaxed mb-8 max-w-xs">
          Натуральні тканини. Преміальна якість.
          <br />
          Створено для солодких снів.
        </p>
        <Link
          href="/catalog"
          className="bg-[#1A1A1A] text-white px-7 py-3.5 text-sm font-medium rounded-sm hover:bg-[#333333] transition-colors shadow-sm"
        >
          До каталогу
        </Link>
      </div>
    </section>
  );
}
