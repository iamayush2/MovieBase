import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GiCrossMark } from "react-icons/gi";

const Trailer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const cat = pathname.includes("movie") ? "movie" : "tv";
  console.log(cat);
  const trailervideo = useSelector((state) => state[cat].info.video);

  return (
    <div className="absolute top-0 left-0 h-screen w-screen flex justify-center items-center bg-[rgba(0,0,0,.9)] text-white ">
      <Link
        onClick={() => navigate(-1)}
        className=" absolute right-[5%] top-[5%] translate-x-[-5%]  translate-y-[-5%] text-4xl  hover:text-sky-600"
      >
        <GiCrossMark />
      </Link>

      {trailervideo ? (
        <ReactPlayer
          controls
          height={600}
          width={1100}
          url={`https://www.youtube.com/watch?v=${trailervideo.key}`}
        />
      ) : (
        <h1 className="text-4xl text-red-500">!Trailer not found</h1>
      )}
    </div>
  );
};

export default Trailer;
