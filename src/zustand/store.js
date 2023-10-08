import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  getProducts: (list) => set(() => ({ products: list })),
}));
export const useCartStore = create((set) => ({
  carts: [],
  updateQuantity: (list) => set(() => ({ carts: list })),
  addCart: (item) => set((state) => ({ carts: state.carts.push(item) })),
  removeCart: (id) =>
    set((state) => ({ carts: state.carts.filter((item) => item.id !== id) })),
}));
