import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  fabric: string;
  quantity: number;
};

type CartProduct = Omit<CartItem, "quantity">;

type CartState = {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addItem: (product: CartProduct) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalCount: () => number;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),

      addItem: (product) => {
        set((state) => {
          const existing = state.items.find((item) => item.id === product.id);
          if (existing) {
            return {
              items: state.items.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          }
          return {
            items: [...state.items, { ...product, quantity: 1 }],
          };
        });
        set({ isOpen: true });
      },

      removeItem: (id) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        }));
      },

      updateQuantity: (id, delta) => {
        set((state) => ({
          items: state.items
            .map((item) =>
              item.id === id
                ? { ...item, quantity: item.quantity + delta }
                : item
            )
            .filter((item) => item.quantity > 0),
        }));
      },

      clearCart: () => set({ items: [] }),

      getTotalPrice: () =>
        get().items.reduce((sum, item) => sum + item.price * item.quantity, 0),

      getTotalCount: () =>
        get().items.reduce((sum, item) => sum + item.quantity, 0),
    }),
    {
      name: "postill-cart-storage",
      partialize: (state) => ({ items: state.items }),
    }
  )
);
