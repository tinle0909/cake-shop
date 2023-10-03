import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  getProducts: (list) => set(() => ({ products: list })),
}));
export const useCartStore = create((set) => ({
  carts: [
    {
      name: "Chocolate Cake",
      price: "25",
      id: 1,
      brand: "Bakery A",
      image:
        "https://images.unsplash.com/photo-1559373098-e1caaccae791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fEFubml2ZXJzYXJ5JTIwY2FrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      description: "A delicious chocolate cake perfect for birthdays",
      category: "birthday",
      quantity: 1,
    },
    {
      name: "Vanilla Cake",
      price: "20",
      id: 2,
      brand: "Bakery B",
      image:
        "https://images.unsplash.com/photo-1559373098-e1caaccae791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fEFubml2ZXJzYXJ5JTIwY2FrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      category: "birthday",
      description: "A classic vanilla cake with buttercream frosting",
      quantity: 2,
    },
  ],
  updateQuantity: (list) => set(() => ({ carts: list })),
  addCart: (item) => set((state) => ({ carts: state.carts.push(item) })),
  removeCart: (id) =>
    set((state) => ({ carts: state.carts.filter((item) => item.id !== id) })),
}));
