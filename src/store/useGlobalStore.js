import { create } from "zustand";

const useGlobalStore = create((set) => ({
  isModalOpen: false,
  modalContent: null,

  openModal: (content) =>
    set({
      isModalOpen: true,
      modalContent: content,
    }),

  closeModal: () =>
    set({
      isModalOpen: false,
      modalContent: null,
    }),

  toggleModal: () =>
    set((state) => ({
      isModalOpen: !state.isModalOpen,
    })),
}));

export default useGlobalStore;
