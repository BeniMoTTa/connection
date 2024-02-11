import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { games } from "../Data/swiper";
const SwiperGame = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      breakpoints={{
        375: {
          slidesPerView: 1,
        },
        540: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {games.map((game) => (
        <SwiperSlide key={game.id}>
          <div
            className="bg-gray-100 p-4 rounded-lg flex flex-col justify-end"
            style={{
              backgroundImage: `url(${game.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "350px",
            }}
          >
            <div className="bg-black bg-opacity-50 p-4 rounded-lg">
              <h3 className="text-white text-xl font-semibold">{game.name}</h3>
              <p className="text-white text-sm">{game.type}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperGame;
