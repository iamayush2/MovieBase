import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineStock } from "react-icons/ai";
import { FaLanguage } from "react-icons/fa6";
import { AiTwotoneLike } from "react-icons/ai";

const Mcard1 = ({ e }) => {
  return (
    <Link
      to={`/${e.media_type || e.title}/details/${e.id}`}
      className=" relative w-[20%] rounded-md h-[47vh] text-white bg-red-200 shrink-0 group"
    >
      <img
        src={`https://image.tmdb.org/t/p/original/${
          e.backdrop_path || e.profile_path
        }`}
        alt=""
        className="object-cover h-[100%] rounded-t-md"
      />

      <div className="absolute h-full w-full top-0 hidden rounded-md bg-gradient-to-b from-transparent to-black group-hover:flex flex-col transition-transform duration-400  ease-out ">
        <div className="absolute flex flex-col gap-1 bottom-5 translate-y-[5%] p-3 ">
          <h1 className="text-xl font-bold">{e.title || e.name}</h1>
          <div className="flex gap-1 text-xs">
            <div className="px-1 text-center py-1 flex items-center gap-1 rounded-md font-medium text-xs capitalize bg-sky-600">
              <FaLanguage className="text-sm text-amber-300" />
              <p>{e.original_language}</p>
            </div>

            <div className="px-1 text-center py-1 flex items-center gap-1 rounded-md font-medium text-sm capitalize bg-sky-600">
              <AiTwotoneLike className="text-sm text-black" />
              <p className="text-xs">{Math.round(e.vote_average * 10) / 10}</p>
            </div>
            <div className="px-1 text-center py-1 flex items-center gap-1 rounded-md font-medium text-sm capitalize bg-sky-600">
              <p>{e.media_type}</p>
            </div>
            {e.adult === true && (
              <div className="px-1 text-center py-1 flex items-center gap-1 rounded-md font-medium text-sm capitalize bg-red-600">
                <p>A</p>
              </div>
            )}
          </div>

          <p className="text-[0.8vw] font-medium mt-1">
            {e.overview && e.overview.slice(0, 80)}
            {"... "}
            <span className="text-blue-200 font-black">more</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Mcard1;
