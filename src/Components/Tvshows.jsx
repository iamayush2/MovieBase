import React, { useEffect, useState } from "react";
import { TiArrowBack } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import Topnav from "./templetes/Topnav";
import Drop from "./templetes/Drop";
import Cards from "./Cards";
import axios from "../utils/axios";
import Loader from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";

const Tvshows = () => {
  const navigate = useNavigate();

  const [tvshowsdata, settvshowsdata] = useState([]);
  const [page, setpage] = useState(1);

  const getTvshowsdata = async () => {
    try {
      const { data } = await axios(`/tv/popular?page=${page}`);
      settvshowsdata((prev) => [...prev, ...data.results]);
      setpage(page + 1);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTvshowsdata();
  }, []);

  const handleItemClick = () => {};
  return tvshowsdata ? (
    <div className="w-screen h-screen bg-inherit flex flex-col ">
      <div className="w-full h-[15%] flex p-3 px-10 items-center ">
        <div className="w-[25%] h-full  flex gap-8 items-center">
          <TiArrowBack
            onClick={() => navigate(-1)}
            className="text-sky-200 text-4xl font-bold shadow-sm hover:cursor-pointer hover:text-amber-200"
          />
          <h1 className="text-5xl font-bold text-amber-100 shadow-md">
            Tv Shows
          </h1>
        </div>

        <div className="w-[75%] h-full gap-5  flex items-center justify-center">
          <div className="w-[50%]">
            {" "}
            <Topnav />
          </div>
        </div>
      </div>

      <div className="w-full bg-inherit ">
        <InfiniteScroll
          loader={
            <div className="w-full  h-[10vh] mt-4 flex justify-center">
              <img className="w-[5%] " src="public/animate1.gif"></img>
            </div>
          }
          hasMore={true}
          dataLength={tvshowsdata.length}
          next={getTvshowsdata}
        >
          <Cards data={tvshowsdata} title="tv" />
        </InfiniteScroll>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default Tvshows;
