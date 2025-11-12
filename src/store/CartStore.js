import {create} from "zustand";

const useCartStore = create((set) => ({
  cart: [],
  addToCart: (product) => set((state) => {
    const existing = state.cart.find((p) => p.id === product.id);
    if (existing) {
      existing.qty += 1;
      return { cart: [...state.cart] };
    }
    return { cart: [...state.cart, { ...product, qty: 1 }] };
  }),
  removeFromCart: (id) => set((state) => ({
    cart: state.cart.filter((item) => item.id !== id)
  })),
  updateQuantity: (id, qty) => set((state) => ({
    cart: state.cart.map(item => item.id === id ? { ...item, qty } : item)
  })),
  clearCart: () => set({ cart: [] })
}));

export default useCartStore;
