import React, { useEffect, useState } from "react";
import SideNavGenreList from "../Componets/SideNavGenreList";
import GlobalApi from "../Servies.js/GlobalApi";
import Slider from "../Componets/Slider";
import PopularGameList from "../Componets/PopularGameList";
import TrendingGameList from "../Componets/TrendingGameList";
import come from "../assets/Images/join.png";

import SwiperGame from "../Componets/Swiper";

function Home({ theme }) {
  const [gameList, setGameList] = useState([]);
  const [gameListByGenre, setGameListByGenre] = useState([]);
  const backgroundColor = theme === "dark" ? "white" : "black";
  useEffect(() => {
    GlobalApi.getPopularGame.then((resp) => {
      console.log(resp);
      setGameList(resp.data.results);
    });
    getGameList(4);
  }, []);
  const getGameList = (genreId) => {
    console.log(genreId);
    if (genreId != 0) {
      GlobalApi.getGameListByGenreId(genreId).then((resp) => {
        console.log(resp);
        setGameListByGenre(resp.data.results);
      });
    }
  };
  return (
    <div className="container">
      <div className="w-full h-fit p-8 background-banner rounded-b-2xl">
        <img
          src={come}
          alt="banner to our discord"
          className="h-fit img-animated rounded-xl"
        />
      </div>
      <div className=" w-full flex justify-center mt-8 mb-8">
        <div
          className="h-[1.5px]  w-[80%]"
          style={{ background: backgroundColor }}
        ></div>
      </div>
      <SwiperGame />
      <div className="grid grid-cols-4 p-8">
        <div className="hidden md:flex">
          <SideNavGenreList
            selectedGenreId={(genreId) => getGameList(genreId)}
          />
        </div>
        {gameList?.length && gameListByGenre?.length > 0 ? (
          <div className="md:col-span-3 col-span-4 px-3">
            <Slider game={gameListByGenre[15]} />
            <TrendingGameList gameList={gameList} />
            <PopularGameList gameList={gameListByGenre} />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Home;
