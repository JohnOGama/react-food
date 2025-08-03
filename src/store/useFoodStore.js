import { create } from "zustand";
import { persist } from "zustand/middleware";

const useFoodStore = create(
  persist(
    (set, get) => ({
      foodData: [],

      orderCartCount: () => {
        const length = get().foodData.length;
        return length;
      },

      addToCart: (data) => {
        if (!data.id) return;

        set((state) => {
          const existing = state.foodData.find((item) => item.id === data.id);

          if (existing) {
            return {
              ...state,
              foodData: state.foodData.map((item) =>
                item.id === data.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          }

          return {
            ...state,
            foodData: [...state.foodData, { ...data, quantity: data.quantity }],
          };
        });
      },

      removeItemInCart: (foodId) => {
        if (!foodId) return;

        set((state) => ({
          ...state,
          foodData: state.foodData.filter((item) => item.id !== foodId),
        }));
      },

      updateQuantity: (foodId, newQuantity) => {
        if (!foodId || newQuantity < 0) return;

        set((state) => ({
          ...state,
          foodData: state.foodData.map((item) =>
            item.id === foodId ? { ...item, quantity: newQuantity } : item
          ),
        }));
      },

      clearCart: () => {
        set({ foodData: [] });
      },

      getTotalPrice: () => {
        const total = get().foodData.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );
        return total;
      },
    }),
    {
      name: "food-cart-storage", // unique name for localStorage
    }
  )
);

export default useFoodStore;
