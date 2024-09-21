import React from "react";
import { Link } from "react-router-dom";

const Movienav = ({ obj }) => {
  return (
    <Link
      to={`/${obj.media_type}/details/${obj.id}`}
      className="flex w-full gap-4 h-[15vh] items-center p-4 text-black bg-amber-100 hover:bg-sky-600 duration-300"
    >
      <img
        src={`https://image.tmdb.org/t/p/original/${
          obj.backdrop_path || obj.profile_path
        }`}
        alt=""
        className=" h-[120%] cover rounded-lg shadow-lg"
      />
      <span className="font-medium text-lg">
        {obj.name || obj.title || obj.orignal_title}
      </span>
    </Link>
  );
};

export default Movienav;
