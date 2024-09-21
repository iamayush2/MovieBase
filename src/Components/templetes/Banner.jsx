import React from "react";
import { MdDateRange } from "react-icons/md";
import { Link } from "react-router-dom";
import { VscStarFull } from "react-icons/vsc";

const Banner = ({ data }) => {
  const handleNavigation = () => {
    navigate(`/${data.media_type}/details/${data.id}`);

    setTimeout(() => {
      navigate(`/${data.media_type}/details/${data.id}/trailer`);
    }, 2000);
  };

  return (
    <div
      style={{
        background: ` linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,0.7),rgba(0,0,0,.9))`,
        backgroundImage: ` url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.profile_path
        })`,
        backgroundSize: "cover",
        backgroundPosition: "top 4%",
      }}
      className=" relative w-[98.5%] h-[80vh] shadow-lg  rounded-lg mt-3 contain mx-auto font-bold"
    >
      <div className="name w-[70%] flex flex-col bg-transparent  shadow-2xl  absolute bottom-[5%] left-[5%] translate-y-[5%] translate-x-[-5%] text-amber-50 p-8 ">
        <h1 className="text-5xl font-black  p-2 max-w-fit">
          {" "}
          {data.name || data.title || data.orignal_title}
        </h1>
        <p className="mt-3">
          {data.overview && data.overview.slice(0, 200)}
          {"... "}
          <Link
            to={`/${data.media_type}/details/${data.id}`}
            className="text-blue-200 font-black"
          >
            more
          </Link>
        </p>

        <div className="icons flex gap-7 mt-2">
          <div className="icon flex items-center gap-1 text-xl ">
            <MdDateRange className="text-sky-400" />
            {data.release_date || "No Information"}
          </div>
          <div className="icon flex items-center gap-1 text-xl ">
            <VscStarFull className="text-sky-400" />
            {data.media_type}
          </div>
        </div>

        <Link
          to={`/${data.media_type}/details/${data.id}/trailer`}
          className="mt-4 p-3 bg-sky-400 max-w-fit font-semibold rounded-md"
        >
          Watch Trailer
        </Link>
      </div>
    </div>
  );
};

export default Banner;
