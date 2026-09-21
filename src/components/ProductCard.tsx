import Image from "next/image";
import { Heart, ShoppingBag } from "lucide-react";
import type { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  const { name, fabric, price, oldPrice, badge, image } = product;

  return (
    <div className="bg-[#FFFFFF] border border-[#E5E0D8] rounded-2xl overflow-hidden flex flex-col group hover:shadow-md transition-all duration-300">
      <div className="aspect-[3/4] relative overflow-hidden bg-[#FAF8F5]">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-[50%_35%] scale-110 origin-[50%_60%] group-hover:scale-[1.18] transition-transform duration-500"
        />

        {badge && (
          <span className="absolute top-3 left-3 bg-[#FAF8F5]/95 text-[#1A1A1A] text-[11px] font-semibold px-2.5 py-1 rounded-full border border-[#E5E0D8] backdrop-blur-sm">
            {badge}
          </span>
        )}

        <button
          type="button"
          aria-label="Додати до обраного"
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#1A1A1A] hover:text-red-500 hover:bg-white transition-colors"
        >
          <Heart size={16} strokeWidth={1.5} />
        </button>
      </div>

      <div className="p-4 flex flex-col flex-1 justify-between">
        <div>
          <p className="text-[11px] font-medium tracking-wider text-[#766E65] uppercase">
            {fabric}
          </p>
          <p className="font-medium text-[#1A1A1A] line-clamp-1 mt-1 text-sm md:text-base">
            {name}
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-[#E5E0D8]/60 flex items-center justify-between">
          <div className="flex items-baseline gap-1.5">
            <span className="font-bold text-[#1A1A1A]">{price}&nbsp;₴</span>
            {oldPrice && (
              <span className="text-xs text-[#766E65] line-through">
                {oldPrice}&nbsp;₴
              </span>
            )}
          </div>
          <button
            type="button"
            className="bg-[#1A1A1A] hover:bg-[#333333] text-white text-xs px-3 py-2 rounded-lg flex items-center gap-1.5 transition-colors"
          >
            <ShoppingBag size={14} strokeWidth={1.5} />
            В кошик
          </button>
        </div>
      </div>
    </div>
  );
}
