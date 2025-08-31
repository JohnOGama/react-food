import React, { useContext, useEffect, useRef } from "react";
import { AiOutlineSearch, AiOutlineMenu, AiFillTag } from "react-icons/ai";
import { BsFillCartFill, BsFillBagHeartFill } from "react-icons/bs";
import { RiTruckFill } from "react-icons/ri";
import { MdHelpCenter, MdRedeem } from "react-icons/md";
import { FaWallet, FaTimes } from "react-icons/fa";
import { useState } from "react";
import useFoodStore from "../store/useFoodStore";
import MainButton from "./MainButton";
import { AuthProviderContext } from "./Context/AuthProvider";
import { BASE_URL } from "../config/constant";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [isOrderCartOpen, setIsOrderCartOpen] = useState(false);
  const { userData } = useContext(AuthProviderContext);

  const modalRef = useRef();

  const {
    orderCartCount,
    foodData,
    clearCart,
    getTotalPrice,
    removeItemInCart,
    updateQuantity,
  } = useFoodStore();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef?.current && !modalRef?.current?.contains(event?.target)) {
        setIsOrderCartOpen(false); // Make sure you have this state updater
      }
    };

    if (isOrderCartOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOrderCartOpen]);

  return (
    <div className="w-full py-2 shadow-md fixed top-0 z-20 inset-x-0 bg-white border-b border">
      <div className="max-w-[1200px] mx-auto items-center justify-between flex">
        <div className="flex items-center">
          <AiOutlineMenu
            onClick={() => setNav(!nav)}
            className="cursor-pointer ml-2"
            size={30}
          />
          <img
            width={50}
            src="https://www.citypng.com/public/uploads/small/11653330621gdqzfnwkoqegldu60pc9etqlyobn28qrkvyy1b6ryymgnhxwlnxrytfwpycoux5qzksojfisr5vz8thzruqmzekuyqzh4ukvieio.png"
            alt="burger"
            className="cursor-pointer ml-3
          "
          />
        </div>

        <div className="flex md:w-[600px] w-[250px] bg-gray-200 items-center py-2 px-3 rounded-3xl">
          <AiOutlineSearch size={25} className="mr-2 cursor-pointer" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent font-medium focus:outline-none w-full"
          />
        </div>
        <div
          onClick={() => setIsOrderCartOpen((prev) => !prev)}
          className="relative cursor-pointer flex bg-black text-white items-center p-2 px-3 rounded-full mr-2"
        >
          <div className="bg-red-500 text-white flex justify-center items-center rounded-full w-5 h-5 absolute top-[-5px] right-[-5px]">
            {orderCartCount()}
          </div>
          <BsFillCartFill className="mr-2" />
          <p>Cart</p>

          {isOrderCartOpen && (
            <div
              ref={modalRef}
              className=" w-[300px]  absolute top-full mt-4 right-0 rounded-md text-black bg-white border border-black/50 shadow-lg p-2"
            >
              <h1>Your Cart</h1>
              <div className="space-y-2 overflow-y-auto h-[300px] scrollbar-hide">
                {foodData.length === 0 && (
                  <div className="flex justify-center items-center h-full">
                    <h1>You don't have add to cart yet</h1>
                  </div>
                )}

                {foodData.length > 0 &&
                  foodData.map((item) => (
                    <div className="flex gap-2 items-start">
                      <div>
                        <img
                          src={item.image}
                          alt={`${item.title}-${item.id}`}
                          className="w-[120px] h-[80px] rounded-md object-cover whitespace-nowrap"
                        />
                      </div>
                      <div className="flex justify-between items-center w-full">
                        <div>
                          <h1 className="text-lg font-bold">{item.title}</h1>
                          <p className="text-orange-600 font-semibold">
                            PHP {item.price}
                          </p>
                          <span
                            onClick={() => removeItemInCart(item.id)}
                            className="text-red-500"
                          >
                            Remove
                          </span>
                        </div>
                        <p>x{item.quantity}</p>
                      </div>
                    </div>
                  ))}
              </div>
              {foodData.length !== 0 && (
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h1>Total Price</h1>
                    <p>PHP {getTotalPrice()}</p>
                  </div>
                  <MainButton onClick={clearCart}>Clear</MainButton>
                </div>
              )}
            </div>
          )}
        </div>

        {!userData.is_authenticated && (
          <div>
            <a href={`${BASE_URL}/auth/google`}>Login</a>
          </div>
        )}

        <div
          className={
            nav
              ? "w-full h-full absolute top-0 left-0 bg-black/70 z-10 duration-300 ease-in-out"
              : "absolute"
          }
        >
          <div
            className={
              nav
                ? "md:w-[500px] w-[300px] h-full bg-white fixed left-0 top-0 duration-300 ease-in-out"
                : "fixed top-0 left-[-100%] h-screen bg-white z-10 duration-300"
            }
          >
            <FaTimes
              onClick={() => setNav(!nav)}
              className=" absolute top-5 right-5 cursor-pointer"
              size={30}
            />
            <nav className="mt-10">
              <ul className="flex flex-col text-gray-800 p-4 md:px-7">
                <li className="flex items-center border-gray-200 border-b-2 mb-4">
                  <RiTruckFill size={30} className="mr-2 m-3" />
                  <a href="/">Orders</a>
                </li>
                <li className="flex items-center border-gray-200 border-b-2 mb-4">
                  <BsFillBagHeartFill size={30} className="mr-2 m-3" />
                  <a href="/">Favourites</a>
                </li>
                <li className="flex items-center border-gray-200 border-b-2 mb-4">
                  <FaWallet size={30} className="mr-2 m-3" />
                  <a href="/">Wallet</a>
                </li>
                <li className="flex items-center border-gray-200 border-b-2 mb-4">
                  <MdHelpCenter size={30} className="mr-2 m-3" />
                  <a href="/">Help</a>
                </li>
                <li className="flex items-center border-gray-200 border-b-2 mb-4">
                  <AiFillTag size={30} className="mr-2 m-3" />
                  <a href="/">Promotions</a>
                </li>
                <li className="flex items-center border-gray-200 border-b-2 mb-4">
                  <MdRedeem size={30} className="mr-2 m-3" />
                  <a href="/">Reedem Code</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
