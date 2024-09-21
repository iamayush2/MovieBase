import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPersonData, removeperson } from "../store/actions/personAction";

import Loader from "./Loader";

import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdArrowRoundBack } from "react-icons/io";
import { TbWorldWww } from "react-icons/tb";
import { FaWikipediaW } from "react-icons/fa";
import { FaImdb } from "react-icons/fa";
import { RiMovieFill } from "react-icons/ri";
import noimg from "../assets/noimg.jpg";
import { FaPlay } from "react-icons/fa";
import Mcard1 from "./templetes/Mcard1";
import { BiLoader } from "react-icons/bi";
import Mcardh from "./templetes/Mcardh";
import { FaInstagram } from "react-icons/fa";

const PersonDetails = () => {
  const { id } = useParams();
  const { info } = useSelector((state) => state.person);
  const dispatch = useDispatch();
  const naviagate = useNavigate();

  useEffect(() => {
    dispatch(getPersonData(id));

    return () => {
      dispatch(removeperson());
    };
  }, []);

  return info ? (
    <div className="flex flex-col min-h-[100vh] w-full bg-inherit pb-4 overflow-auto">
      {/* 1 secton  */}
      <div
        style={{
          background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.8)),url(https://images.pexels.com/photos/5627838/pexels-photo-5627838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="h-[80vh] w-full flex flex-col gap-2 "
      >
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
            <a
              title="instagram"
              target="_blank"
              href={`https://www.instagram.com/${info.externalid.instagram_id}`}
            >
              <FaInstagram className=" hover:text-sky-600" />
            </a>
            {info.externalid.twitter_id && (
              <a
                title="X"
                target="_blank"
                href={`https://x.com/${info.externalid.twitter_id}`}
              >
                <FaXTwitter className=" hover:text-sky-600" />
              </a>
            )}
          </div>
        </nav>

        <div className="w-full h-[70vh] p-2  flex gap-4">
          {/* 1 */}
          <div className="w-[30%] h-full flex  justify-end ">
            <img
              src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`}
              alt=""
              className="h-[85%] p-2 w-fit rounded-3xl shadow-lg border-2 border-sky-300"
            />
          </div>

          {/* 2 */}

          <div className="flex w-full px-3 py-1 gap-4 flex-col text-white ">
            <h1 className="text-6xl leading-none font-black">
              {info.detail.name}
            </h1>
            <div className="flex font-medium text-lg px-3 gap-9">
              <h2>
                <span className="font-bold text-lg text-amber-200 ">
                  Brithplace
                </span>
                :{" "}
                {info.detail.place_of_birth
                  ? info.detail.place_of_birth
                  : "No Information"}
              </h2>

              {info.detail.birthday && (
                <>
                  {" "}
                  <h2>
                    <span className="font-bold text-lg text-amber-200">
                      Brith year
                    </span>
                    : {info.detail.birthday.split("-")[0]}
                  </h2>
                  <h2>
                    <span className="font-bold text-lg text-amber-200">
                      Brith date:{" "}
                    </span>
                    {info.detail.birthday
                      .split("-")
                      .reverse()
                      .map((e) => e)
                      .join("-")}
                  </h2>
                </>
              )}
              <h2>
                {" "}
                <span className="font-bold text-lg text-amber-200">
                  Gender{" "}
                </span>
                : {info.detail.gender === 2 ? "Male" : "Female"}
              </h2>
            </div>

            <div className="flex flex-col px-3 gap-2">
              <h2 className="text-3xl  font-bold text-sky-500">Biography</h2>
              <p className="text-sm leading-5 ">
                {info.detail.biography
                  ? info.detail.biography
                  : "No Information Available!"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* end 1 section  */}

      {info.combinedCredits.cast.length > 0 && (
        <div className="h-fit pb-4  mt-8 flex text-zinc-200 flex-col items-center text-start w-full">
          <h1 className="w-[90%] text-center border-b-2 border-zinc-400 pb-2 capitalize text-4xl font-bold text-sky-500">
            Movie Credits
          </h1>
          <h1 className="w-[90%] mt-6 capitalize text-3xl font-semibold text-amber-200">
            Cast
          </h1>
          <div className="tcont flex h-fit w-[90%] mt-2 rounded-xl  p-2 gap-3  overflow-auto">
            {info.combinedCredits.cast.slice(1, 30).map((e, i) => (
              <Mcardh e={e} key={i} />
            ))}
          </div>
          {info.combinedCredits.crew.length > 0 && (
            <>
              {" "}
              <h1 className="w-[90%] mt-6 capitalize text-3xl font-semibold text-amber-200">
                Crew
              </h1>
              <div className="tcont flex h-fit w-[90%] mt-2 rounded-xl  p-2 gap-3  overflow-auto">
                {info.combinedCredits.cast.slice(1, 15).map((e, i) => (
                  <Mcardh e={e} key={i} />
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  ) : (
    <Loader />
  );
};

export default PersonDetails;
