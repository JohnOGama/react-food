import React from "react";
import CustomModal from "../CustomModal";
import useGlobalStore from "../../store/useGlobalStore";

export default function FoodModal() {
  const { isModalOpen, closeModal, modalContent } = useGlobalStore();

  if (!modalContent) return;

  const { title, price, image } = modalContent;

  return (
    <CustomModal isOpen={isModalOpen} onClose={closeModal}>
      <div className="space-y-3">
        <h1>{title}</h1>
      </div>
    </CustomModal>
  );
}
