import React from "react";
import { Link } from "react-router-dom";
import noimg from "../assets/noimg.jpg";

const Cards = ({ data, title }) => {
  return (
    <div className="flex flex-wrap w-full justify-center gap-10 p-10 shadow-lg bg-inherit">
      {data.map((e, i) => (
        <Link
          to={`/${e.media_type || title}/details/${e.id}`}
          key={i}
          className=" relative w-[17%] pb-1 h-[45vh] text-zinc-100 bg-inherit rounded-md hover:text-sky-600"
        >
          <img
            src={
              e.profile_path || e.backdrop_path
                ? `https://image.tmdb.org/t/p/original/${
                    e.backdrop_path || e.profile_path
                  }`
                : noimg
            }
            alt=""
            className="w-[100%] h-[90%] object-cover rounded-md"
          />
          <h1 className="p-1 text-xl font-bold">
            {e.title || e.name || e.orignal_name || e.orignal_title}
          </h1>

          {e.vote_average && (
            <div className=" text-sky-600 w-[22%] h-[16%] absolute top-[70%] right-[-10%] flex items-center justify-center font-bold text-lg translate-x-[-10%] translate-y-[-60%] shadow-lg rounded-full bg-amber-200">
              {(e.vote_average * 10).toFixed()}%
            </div>
          )}
        </Link>
      ))}
    </div>
  );
};

export default Cards;
