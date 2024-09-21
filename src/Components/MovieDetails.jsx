import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { getingMovieData, removemovie } from "../store/actions/movieAction";
import { IoMdArrowRoundBack } from "react-icons/io";
import { TbWorldWww } from "react-icons/tb";
import { FaWikipediaW } from "react-icons/fa";
import { FaImdb } from "react-icons/fa";
import { RiMovieFill } from "react-icons/ri";

import noimg from "../assets/noimg.jpg";
import { FaPlay } from "react-icons/fa";
import Mcard1 from "./templetes/Mcard1";
import { BiLoader } from "react-icons/bi";
import Loader from "./Loader";

const MovieDetails = () => {
  const { id } = useParams();
  const { info } = useSelector((state) => state.movie);

  const dispatch = useDispatch();
  const naviagate = useNavigate();

  useEffect(() => {
    dispatch(getingMovieData(id));

    return () => {
      dispatch(removemovie());
    };
  }, [id]);

  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.8)),url(https://image.tmdb.org/t/p/original/${info.details.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className=" relative w-screen min-h-[100vh] overflow-auto"
    >
      {/* 1st section  */}

      <nav className="  h-[10vh]   gap-8 w-full  flex items-center text-3xl p-10  px-6  text-amber-200">
        <div className="flex  items-center">
          <Link
            title="home"
            to="/"
            className="mt-1 text-6xl text-sky-600 hover:text-amber-200"
          >
            <RiMovieFill />
          </Link>
        </div>

        <div className="flex  items-center gap-16">
          <Link
            title="back"
            onClick={() => naviagate(-1)}
            className="text-3xl  hover:text-sky-600"
          >
            <IoMdArrowRoundBack />
          </Link>
          <a target="_blank" title="webpage" href={info.details.homepage}>
            <TbWorldWww className=" hover:text-sky-600" />
          </a>
          <a
            title="wikipedia"
            target="_blank"
            href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
          >
            <FaWikipediaW className=" hover:text-sky-600" />
          </a>
          <a
            title="imdb"
            target="_blank"
            href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}
          >
            <FaImdb className=" hover:text-sky-600" />
          </a>
        </div>
      </nav>

      {/* #2 sections */}

      <div className="z-[999] w-full h-[70vh] px-16 py-3 flex ">
        {/* poster & platform cont  */}
        <div className="cont w-[31%] flex flex-col items-end  ">
          {/* poster cont  */}
          <div className="img-cont w-[83%] h-[70%]  rounded-lg flex    object-cover">
            <img
              src={
                info.details.backdrop_path
                  ? `https://image.tmdb.org/t/p/original/${
                      info.details.poster_path || info.details.backdrop_path
                    }`
                  : noimg
              }
              alt=""
              className="h-[100%] shadow-lg rounded-lg object-cover"
            />
          </div>

          {/* platform cont  */}
          {info.watchPro && (
            <div className="w-[85%] h-[30%] gap-2 flex flex-col py-4  text-white font-bold text-right">
              {info.watchPro.flatrate && (
                <div className=" h-[30%] flex items-center ">
                  <h1 className=" text-sm">Avalable on: </h1>
                  <div className="plat-img  gap-1 px-1 h-full flex items-center ">
                    {info.watchPro.flatrate.map((e, i) => (
                      <img
                        title={e.provider_name}
                        key={i}
                        src={`https://image.tmdb.org/t/p/original/${e.logo_path}`}
                        className="h-[85%] rounded-md shadow-xl"
                      ></img>
                    ))}
                  </div>
                </div>
              )}
              {info.watchPro.buy && (
                <div className=" h-[30%] flex items-center">
                  <h1 className=" text-sm">Buy on: </h1>
                  <div className="plat-img px-2 gap-1  h-full flex items-center ">
                    {info.watchPro.buy.map((e, i) => (
                      <img
                        title={e.provider_name}
                        key={i}
                        src={`https://image.tmdb.org/t/p/original/${e.logo_path}`}
                        className="h-[85%] rounded-md shadow-xl"
                      ></img>
                    ))}
                  </div>
                </div>
              )}
              {info.watchPro.rent && (
                <div className=" h-[30%] flex items-center">
                  <h1 className=" text-sm">Rent on: </h1>
                  <div className="plat-img px-2 gap-1  h-full flex items-center ">
                    {info.watchPro.rent.map((e, i) => (
                      <img
                        title={e.provider_name}
                        key={i}
                        src={`https://image.tmdb.org/t/p/original/${e.logo_path}`}
                        className="h-[85%] rounded-md shadow-xl"
                      ></img>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* movie content div  */}

        <div className="flex w-full  flex-col gap-4 text-white font-semibold text-lg">
          {/* 1 */}
          <h1 className="text-5xl font-black leading-none text-white">
            {" "}
            {info.details.title ||
              info.details.name ||
              info.details.orignal_name ||
              info.details.orignal_title}
            <span className="text-3xl text-amber-100">
              ({info.details.release_date.split("-")[0]})
            </span>
          </h1>
          {/* 2 */}
          <h1 className="mb-1 -mt-1 italic font-bold text-xl text-amber-100">
            {info.details.tagline}
          </h1>

          {/* 3 */}
          <div className="flex h-[11%] items-center text-white font-medium gap-8 text-lg">
            {info.details.vote_average && (
              <div className=" text-amber-200 w-[5%] h-[99%]  flex items-center justify-center font-bold text-lg  shadow-lg rounded-full bg-sky-600">
                {(info.details.vote_average * 10).toFixed()}%
              </div>
            )}

            <p>{info.details.release_date}</p>

            <div className="flex">
              {info.details.genres.map((e) => e.name).join(",")}
            </div>
            <h1>{info.details.runtime}min</h1>
          </div>

          {/* 4 */}

          <div className="flex ml-3 flex-col gap-1">
            <h1 className="text-lg font-bold">Overview</h1>
            <p className="text-base">{info.details.overview}</p>
          </div>

          {/* 5 */}
          <div className="ml-3 flex flex-col gap-1">
            <h1 className="text-lg  font-bold ">Availabe in Languages</h1>
            <p className="text-sm ">{info.translations.join(" , ")}</p>
          </div>

          {/* 6  */}
          <Link
            to={`/movie/details/${id}/trailer`}
            className="p-4 mt-2 ml-3 bg-sky-600 w-[15%] justify-center rounded-md shadow-lg transition-all duration-500 ease-in-out text-amber-200  items-center flex gap-3 hover:bg-amber-200 hover:text-sky-600"
          >
            <FaPlay />
            Play Trailer
          </Link>
          {/* end  */}
        </div>
      </div>
      <hr className="mt-5 mb-8 h-[1px] max-w-screen-xl mx-auto bg-zinc-300 " />
      {/* part 3 */}

      {(info.recomendation.length > 0 || info.similar.length > 0) && (
        <div className="h-[63vh] gap-3  flex text-zinc-200 flex-col items-center text-start w-full">
          <h1 className="w-[90%] capitalize text-3xl font-black">
            Recommendations & suggestions
          </h1>
          <div className="tcont flex h-fit w-[90%] mt-2 rounded-xl  p-2 gap-3  overflow-auto">
            {info.recomendation.length > 0
              ? info.recomendation.map((e, i) => <Mcard1 e={e} key={i} />)
              : info.similar.map((e, i) => <Mcard1 e={e} key={i} />)}
          </div>
        </div>
      )}
      <Outlet />
      {/* end  */}
    </div>
  ) : (
    <Loader />
  );
};

export default MovieDetails;
