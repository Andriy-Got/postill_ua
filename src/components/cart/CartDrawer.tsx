"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, Trash2, ShoppingBag, Minus, Plus } from "lucide-react";
import { useCartStore } from "@/lib/store/useCartStore";
import { useHasMounted } from "@/lib/hooks/useHasMounted";

const FREE_SHIPPING_THRESHOLD = 2500;

function formatPrice(value: number) {
  return `${new Intl.NumberFormat("uk-UA").format(value)} ₴`;
}

export default function CartDrawer() {
  const hasMounted = useHasMounted();

  const isOpen = useCartStore((state) => state.isOpen);
  const items = useCartStore((state) => state.items);
  const closeCart = useCartStore((state) => state.closeCart);
  const removeItem = useCartStore((state) => state.removeItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const clearCart = useCartStore((state) => state.clearCart);
  const getTotalPrice = useCartStore((state) => state.getTotalPrice);
  const getTotalCount = useCartStore((state) => state.getTotalCount);

  const [orderPlaced, setOrderPlaced] = useState(false);

  useEffect(() => {
    if (!isOpen) setOrderPlaced(false);
  }, [isOpen]);

  if (!hasMounted) return null;

  const totalPrice = getTotalPrice();
  const totalCount = getTotalCount();
  const remainingForFreeShipping = FREE_SHIPPING_THRESHOLD - totalPrice;

  function handleCheckout() {
    setOrderPlaced(true);
    clearCart();
  }

  return (
    <>
      <div
        onClick={closeCart}
        aria-hidden="true"
        className={`fixed inset-0 z-50 bg-black/40 backdrop-blur-xs transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Кошик"
        className={`fixed top-0 right-0 z-50 flex h-full w-full max-w-md flex-col justify-between bg-[#FAF8F5] p-6 shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <h2 className="flex items-center gap-2 font-serif text-xl text-[#1A1A1A]">
            Кошик
            {totalCount > 0 && (
              <span className="rounded-full bg-[#1A1A1A] px-2 py-0.5 text-xs font-medium text-white">
                {totalCount}
              </span>
            )}
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Закрити кошик"
            className="flex h-9 w-9 items-center justify-center rounded-full text-[#1A1A1A] hover:bg-[#E5E0D8]/40 transition-colors"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {orderPlaced ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1A1A1A] text-white">
              <ShoppingBag size={22} strokeWidth={1.5} />
            </div>
            <p className="font-serif text-lg text-[#1A1A1A]">
              Дякуємо за замовлення!
            </p>
            <p className="max-w-[26ch] text-sm text-[#766E65]">
              Ми зв&apos;яжемось із вами найближчим часом для підтвердження.
            </p>
            <button
              type="button"
              onClick={closeCart}
              className="mt-2 rounded-lg bg-[#1A1A1A] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#333333] transition-colors"
            >
              Закрити
            </button>
          </div>
        ) : items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FAF8F5] border border-[#E5E0D8] text-[#766E65]">
              <ShoppingBag size={22} strokeWidth={1.5} />
            </div>
            <p className="text-[#1A1A1A]">Ваш кошик порожній</p>
            <button
              type="button"
              onClick={closeCart}
              className="mt-2 rounded-lg bg-[#1A1A1A] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#333333] transition-colors"
            >
              До покупок
            </button>
          </div>
        ) : (
          <>
            <ul className="min-h-0 flex-1 overflow-y-auto -mx-6 px-6 py-4 space-y-4">
              {items.map((item) => (
                <li key={item.id} className="flex gap-3">
                  <div className="relative w-20 aspect-[3/4] shrink-0 overflow-hidden rounded-lg border border-[#E5E0D8] bg-white">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-1 flex-col min-w-0">
                    <p className="text-[11px] font-medium tracking-wider text-[#766E65] uppercase">
                      {item.fabric}
                    </p>
                    <p className="text-sm font-medium text-[#1A1A1A] line-clamp-1">
                      {item.name}
                    </p>
                    <p className="mt-1 text-sm font-bold text-[#1A1A1A]">
                      {formatPrice(item.price)}
                    </p>

                    <div className="mt-auto flex items-center justify-between pt-2">
                      <div className="flex items-center gap-2 rounded-lg border border-[#E5E0D8]">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, -1)}
                          aria-label="Зменшити кількість"
                          className="flex h-7 w-7 items-center justify-center text-[#1A1A1A] hover:bg-[#E5E0D8]/40 transition-colors"
                        >
                          <Minus size={14} strokeWidth={1.5} />
                        </button>
                        <span className="min-w-[1.5ch] text-center text-sm text-[#1A1A1A]">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, 1)}
                          aria-label="Збільшити кількість"
                          className="flex h-7 w-7 items-center justify-center text-[#1A1A1A] hover:bg-[#E5E0D8]/40 transition-colors"
                        >
                          <Plus size={14} strokeWidth={1.5} />
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        aria-label="Видалити товар"
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-[#766E65] hover:bg-[#E5E0D8]/40 hover:text-[#1A1A1A] transition-colors"
                      >
                        <Trash2 size={16} strokeWidth={1.5} />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-t border-[#E5E0D8] pt-4">
              <p className="text-xs text-[#766E65]">
                {remainingForFreeShipping > 0
                  ? `До безкоштовної доставки: ${formatPrice(remainingForFreeShipping)}`
                  : "Безкоштовна доставка від 2 500 ₴"}
              </p>

              <div className="mt-3 flex items-center justify-between">
                <span className="text-sm text-[#766E65]">Разом</span>
                <span className="font-serif text-lg text-[#1A1A1A]">
                  {formatPrice(totalPrice)}
                </span>
              </div>

              <button
                type="button"
                onClick={handleCheckout}
                className="mt-4 w-full rounded-lg bg-[#1A1A1A] py-3 text-sm font-medium text-white hover:bg-[#333333] transition-colors"
              >
                Оформити замовлення
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
