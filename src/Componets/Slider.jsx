import React, { useEffect } from "react";

function Slider({ game }) {
  return (
    <div className="relative ">
      <div
        className="absolute bottom-0  bg-gradient-to-t w-full
    pb-10 from-slate-900 to-transparent p-5 rounded-xl"
      >
        <h2 className="text-[24px] text-white font-protest font-extrabold">
          {game.name}
        </h2>
        <button className="bg-red-700 text-white px-4 p-2">Click here</button>
      </div>
      <img
        src={game.background_image}
        className=" h-[170px] md:h-[320px] w-full object-cover rounded-xl"
      />
    </div>
  );
}

export default Slider;
