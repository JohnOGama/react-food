import React from "react";

function Hero() {
  return (
    <div className="max-w-[1200px] mx-auto px-2 pt-20  ">
      <div className="max-h-[500px] relative ">
        <div className="w-full h-full absolute max-h-[500px] text-white rounded-lg bg-black/40 flex flex-col justify-center px-4">
          <h1 className="font-bold text-3xl md:text-4xl xl:text-5xl xl:px-5">
            Best <span className="text-orange-600">Foods</span>
          </h1>
          <h1 className="font-bold text-5xl md:text-6xl xl:text-7xl xl:px-5">
            In Your Area
          </h1>
        </div>
        <img
          src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="w-full max-h-[500px] object-cover rounded-lg"
        />
      </div>
    </div>
  );
}

export default Hero;
