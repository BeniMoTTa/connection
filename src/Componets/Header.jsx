import React, { useContext, useEffect, useState } from "react";
import logo from "./../assets/Images/mottagames.jpg";

import SideNavGenreList from "./SideNavGenreList";
import {
  HiMoon,
  HiOutlineBars3CenterLeft,
  HiOutlineXMark,
  HiSun,
} from "react-icons/hi2";
import { ThemeContext } from "../Context/ThemeContext";

function Header() {
  const [toggle, setToggle] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="flex items-center p-3 h-24 background-animated border-b-2">
      <img src={logo} width={45} className="hidden md:block rounded-full" />
      <div className="md:hidden">
        {!toggle ? (
          <HiOutlineBars3CenterLeft
            onClick={() => setToggle(!toggle)}
            className="dark:text-white text-[25px] cursor-pointer"
          />
        ) : (
          <HiOutlineXMark
            onClick={() => setToggle(!toggle)}
            className="dark:text-white text-[25px] cursor-pointer"
          />
        )}
        {toggle ? (
          <div className="absolute z-10 bg-white  mt-3 dark:bg-[#121212]">
            <SideNavGenreList />
          </div>
        ) : null}
      </div>
      <div className="w-[1.5px] bg-white h-[90%] ml-6"></div>
      <div className="flex mx-5 w-full p-2 justify-center rounded-full items-center px-2">
        <h3 className="md:text-2xl font-bold text-white font-protest sm:text-xl ">
          Which one will you{" "}
          <span className="game-animated md:text-[35px] font-protest font-extrabold">
            choose?
          </span>
        </h3>
      </div>
      <div className="w-[1.5px] bg-white h-[90%] mr-6"></div>
      <div>
        {theme == "dark" ? (
          <HiSun
            className="text-[40px] cursor-pointer
        text-[yellow] p-1 rounded-full "
            onClick={() => setTheme("light")}
          />
        ) : (
          <HiMoon
            className="text-[35px] cursor-pointer text-gray-200 p-1 rounded-full"
            onClick={() => setTheme("dark")}
          />
        )}
      </div>
    </div>
  );
}

export default Header;
