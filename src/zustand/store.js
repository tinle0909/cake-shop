import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  getProducts: (list) => set(() => ({ products: list })),
}));
// export const useUserStore = create((set) => ({
//   user: {},

// }));
