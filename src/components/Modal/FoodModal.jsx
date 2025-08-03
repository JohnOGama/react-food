import React, { useState } from "react";
import CustomModal from "../CustomModal";
import useGlobalStore from "../../store/useGlobalStore";
import SecondaryButton from "../SecondaryButton";
import MainButton from "../MainButton";
import useFoodStore from "../../store/useFoodStore";
import toast from "react-hot-toast";

export default function FoodModal() {
  const { isModalOpen, closeModal, modalContent } = useGlobalStore();
  const { addToCart } = useFoodStore();

  const [quantity, setQuantity] = useState(1);

  if (!modalContent) return;

  const { title, price, image } = modalContent;

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    closeModal();
    addToCart({ ...modalContent, quantity });
    toast.success("Item was successfully added to your list.");
  };

  const handleBuy = () => {
    toast("Comming Soon <3");
  };

  return (
    <CustomModal isOpen={isModalOpen} onClose={closeModal}>
      <div className="space-y-3">
        <img
          src={image}
          alt="title"
          className="w-full h-[200px] object-cover rounded-md"
        />
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-2xl font-extrabold text-orange-600">₱ {price}</p>
        <div className="w-full justify-center flex gap-5 items-center">
          <button
            onClick={handleDecrement}
            className=" w-11 py-2 border border-black/20 rounded-md "
          >
            -
          </button>
          <h1 className="text-5xl font-bold">{quantity}</h1>
          <button
            onClick={handleIncrement}
            className=" w-11 py-2 border border-black/20 rounded-md "
          >
            +
          </button>
        </div>
        <div className="flex items-center gap-3">
          <SecondaryButton onClick={handleAddToCart}>
            Add To Cart
          </SecondaryButton>
          <MainButton onClick={handleBuy}>Buy</MainButton>
        </div>
      </div>
    </CustomModal>
  );
}
