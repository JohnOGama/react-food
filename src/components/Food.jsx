import React, { useState } from "react";
import { data } from "../data/info.js";
import useGlobalStore from "../store/useGlobalStore.js";

function Food() {
  const { openModal } = useGlobalStore();

  const [foods, setFoods] = useState(data);
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  const filterPrice = (category) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto mt-2">
      <h1 className="text-center font-bold text-2xl md:text-5xl xl:text-6xl">
        Best Seller Street <span className="text-orange-600">Foods</span>
      </h1>
      <div className="px-2">
        <h1 className="text-xl font-bold">Filter Type:</h1>
        <div className="flex">
          <button
            onClick={() => setFoods(data)}
            className="text-[11px] md:text-normal my-3 mr-3 border-2 border-orange-500 px-3 rounded-full text-orange-500 font-bold hover:bg-orange-500 hover:text-white duration-100"
          >
            All
          </button>
          <button
            onClick={() => filterType("burger")}
            className="text-[11px] md:text-normal my-3 mx-3 border-2 border-orange-500 px-3 rounded-full text-orange-500 font-bold hover:bg-orange-500 hover:text-white duration-100"
          >
            Hamburger
          </button>
          <button
            onClick={() => filterType("French Frice")}
            className="text-[11px] md:text-normal mx-3 my-3 border-2 border-orange-500 px-3 rounded-full text-orange-500 font-bold hover:bg-orange-500 hover:text-white duration-100"
          >
            French Fries
          </button>
          <button
            onClick={() => filterType("Ice Cream")}
            className="text-[11px] md:text-normal mx-3 my-3 border-2 border-orange-500 px-3 rounded-full text-orange-500 font-bold hover:bg-orange-500 hover:text-white duration-100"
          >
            Ice Cream
          </button>
          <button
            onClick={() => filterType("Chicken")}
            className="text-[11px] md:text-normal mx-3 my-3 border-2 border-orange-500 px-3 rounded-full text-orange-500 font-bold hover:bg-orange-500 hover:text-white duration-100"
          >
            Chicken
          </button>
        </div>
        <div>
          <h1 className="text-xl font-bold">Filter Price:</h1>
          <div className="flex">
            <button className="text-normal my-3 mr-3 border-2 border-orange-500 px-4 py-2 rounded-full text-orange-500 font-bold hover:bg-orange-500 hover:text-white duration-100">
              P 100
            </button>
            <button className="text-normal mx-3 my-3 border-2 border-orange-500 px-4 py-2 rounded-full text-orange-500 font-bold hover:bg-orange-500 hover:text-white duration-100">
              P 150
            </button>
            <button className="text-normal mx-3 my-3 border-2 border-orange-500 px-4 py-2 rounded-full text-orange-500 font-bold hover:bg-orange-500 hover:text-white duration-100">
              P 200
            </button>
            <button className="text-normal mx-3 my-3 border-2 border-orange-500 px-4 py-2 rounded-full text-orange-500 font-bold hover:bg-orange-500 hover:text-white duration-100">
              P 250
            </button>
          </div>
          <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-5 xl:grid-cols-4 my-4 ">
            {foods.map((item, index) => (
              <div
                key={index}
                onClick={() =>
                  openModal({
                    title: item.name,
                    price: item.price,
                    image: item.image,
                  })
                }
                className="relative w-full rounded-lg cursor-pointer "
              >
                <div className="absolute bg-black/50 w-full h-full text-white pl-5 flex  justify-between items-end pb-4 pr-4 rounded-lg">
                  <p className="font-bold text-2xl md:text-lg xl:text-xl">
                    {item.name}
                  </p>
                  <p className="font-bold text-lg md:text-xl text-orange-400">
                    ₱<span>{item.price}</span>
                  </p>
                </div>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[300px] object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Food;
