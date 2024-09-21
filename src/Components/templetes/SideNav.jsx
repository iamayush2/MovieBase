import { RiHeartFill } from "@remixicon/react";
import React from "react";
import { Link } from "react-router-dom";
import { FaFire } from "react-icons/fa";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { MdLocalMovies } from "react-icons/md";
import { IoTvSharp } from "react-icons/io5";
import { MdSportsSoccer } from "react-icons/md";
import { IoPeopleCircle } from "react-icons/io5";
import { MdConnectWithoutContact } from "react-icons/md";
import { FcAbout } from "react-icons/fc";

const SideNav = () => {
  return (
    <div className="w-[17%] h-full flex flex-col p-10   border-r-2 border-zinc-400 overflow-auto">
      <h1 className="text-white flex text-3xl font-bold gap-2">
        <img className="w-[16%]" src="/public/movie.svg" alt="" />
        <Link to="/">
          M<span className="text-lg hover:text-xl">😉</span>Base
        </Link>
      </h1>

      <nav className="mt-9 flex flex-col gap-1 text-zinc-400">
        <h1 className="text-white text-lg font-semibold pb-2">New feed</h1>

        <Link
          to="/popular"
          className="hover:bg-sky-800 p-4 flex items-center gap-2 hover:text-white rounded-lg duration-300 font-semibold"
        >
          <FaMoneyBillTrendUp className="text-xl" /> Popular
        </Link>
        <Link
          to="/movie"
          className="hover:bg-sky-800 p-4 flex items-center gap-2 hover:text-white rounded-lg duration-300 font-semibold"
        >
          <MdLocalMovies className="text-xl" /> Movies
        </Link>
        <Link
          to="/tvshows"
          className="hover:bg-sky-800 p-4 flex items-center gap-2 hover:text-white rounded-lg duration-300 font-semibold"
        >
          <IoTvSharp className="text-xl" /> Tv Shows
        </Link>
        <Link
          to="/trending"
          className="hover:bg-sky-800 p-4 flex items-center gap-2 hover:text-white rounded-lg duration-300 font-semibold"
        >
          <FaFire className="text-xl" /> Trending
        </Link>

        <Link
          to="/people"
          className="hover:bg-sky-800 p-4 flex items-center gap-2 hover:text-white rounded-lg duration-300 font-semibold"
        >
          <IoPeopleCircle className="text-xl" /> People
        </Link>
      </nav>

      <hr className="w-full  bg-white mt-2" />

      <nav className="mt-6 flex flex-col gap-1 text-zinc-400">
        <h1 className="text-white text-lg font-semibold pb-2 ">
          Website Information
        </h1>
        <Link className="hover:bg-sky-800 p-4 flex items-center gap-2 hover:text-white rounded-lg duration-300 font-semibold">
          <FcAbout className="text-xl" /> About
        </Link>
        <Link className="hover:bg-sky-800 p-4 flex items-center gap-2 hover:text-white rounded-lg duration-300 font-semibold">
          <MdConnectWithoutContact className="text-xl" /> Contact us
        </Link>
      </nav>
    </div>
  );
};

export default SideNav;
