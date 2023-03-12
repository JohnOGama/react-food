import React from "react";
import { AiOutlineSearch, AiOutlineMenu, AiFillTag } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillCartFill, BsFillBagHeartFill } from "react-icons/bs";
import { RiTruckFill } from "react-icons/ri";
import { MdHelpCenter, MdRedeem } from "react-icons/md";
import { FaWallet, FaTimes } from "react-icons/fa";
import { useState } from "react";

function Navbar() {
  const [nav, setNav] = useState(false);
  return (
    <div className="w-full py-2 shadow-md">
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
        <div className="cursor-pointer flex bg-black text-white items-center p-2 px-3 rounded-full mr-2">
          <BsFillCartFill className="mr-2" />
          <p>Cart</p>
        </div>

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
