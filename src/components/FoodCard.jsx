import React from "react";

function FoodCard() {
  return (
    <div className="max-w-[1200px] mx-auto px-2 grid md:grid-cols-3 my-10 gap-5">
      <div className="relative w-full md:max-w-[400px] md:h-[400px] hover:scale-105 duration-300 shadow-lg">
        <div className="absolute flex flex-col justify-end p-5 text-white bg-black/60 w-full h-full rounded-xl">
          <p className="font-bold text-4xl  mb-1">Burger</p>
          <p className="text-orange-500 font-semibold">PHP 149.00</p>
          <button className="border-2 p-2 w-[130px] rounded-xl mt-2 hover:bg-orange-400 hover:border-orange-400 bg-">
            Order Now
          </button>
        </div>
        <img
          src="https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 "
          alt=""
          className="w-full h-[200px] md:h-[400px] object-cover rounded-xl"
        />
      </div>
      <div className="relative w-full md:max-w-[400px] md:h-[400px] hover:scale-105 duration-300 shadow-lg">
        <div className="absolute flex flex-col justify-end p-5 text-white bg-black/60 w-full h-full rounded-xl">
          <p className="font-bold text-4xl  mb-1">Ice Cream</p>
          <p className="text-orange-500 font-semibold">PHP 99.00</p>
          <button className="border-2 p-2 w-[130px] rounded-xl mt-2 hover:bg-orange-400 hover:border-orange-400 bg-">
            Order Now
          </button>
        </div>
        <img
          src="https://images.pexels.com/photos/2586924/pexels-photo-2586924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="w-full h-[200px] md:h-[400px] object-cover rounded-xl"
        />
      </div>
      <div className="relative w-full md:max-w-[400px] md:h-[400px] hover:scale-105 duration-300 shadow-lg">
        <div className="absolute flex flex-col justify-end p-5 text-white bg-black/60 w-full h-full rounded-xl">
          <p className="font-bold text-4xl  mb-1">French Fries</p>
          <p className="text-orange-500 font-semibold">PHP 129.00</p>
          <button className="border-2 p-2 w-[130px] rounded-xl mt-2 hover:bg-orange-400 hover:border-orange-400 bg-">
            Order Now
          </button>
        </div>
        <img
          src="https://images.pexels.com/photos/2741461/pexels-photo-2741461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="w-full h-[200px] md:h-[400px] object-cover rounded-xl"
        />
      </div>
    </div>
  );
}

export default FoodCard;
