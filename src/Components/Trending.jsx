import React, { useEffect, useState } from "react";
import SideNav from "./templetes/SideNav";
import { useNavigate } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";
import Topnav from "./templetes/Topnav";

import axios from "../utils/axios";
import Loader from "./Loader";
import Mcard1 from "./templetes/Mcard1";
import InfiniteScroll from "react-infinite-scroll-component";

const Trending = () => {
  const navigate = useNavigate();

  const [data, setdata] = useState([]);
  const [page, setpage] = useState(1);

  const getrawData = async () => {
    try {
      const { data } = await axios(`trending/movie/day?page=${page}`);
      setdata((prev) => [...prev, ...data.results]);
      setpage(page + 1);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getrawData();
  }, []);

  return data ? (
    <div className="w-screen h-screen bg-inherit   flex flex-col ">
      <div className="z-10 fixed py-3 bg-inherit w-full px-10  flex justify-center">
        <div className="w-[100%] h-[10vh] flex   items-center gap-5 ">
          <TiArrowBack
            onClick={() => navigate(-1)}
            className="text-sky-200 text-4xl font-bold shadow-sm hover:cursor-pointer hover:text-amber-200"
          />
          <h1 className="text-5xl font-bold text-amber-100 shadow-md">
            Trending
          </h1>

          <div className=" relative w-[100%] bg-inherit h-full  items-center  flex justify-center ">
            <div className="w-[50%] flex justify-center">
              <Topnav />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[18vh] flex flex-wrap  bg-inherit w-full justify-center ">
        <InfiniteScroll
          dataLength={data.length}
          next={getrawData}
          hasMore={true}
          loader={<img src="public\animate1.gif"></img>}
        >
          <div className="tcont bg-inherit flex flex-wrap  p-2 gap-10 justify-center ">
            {data.map((e, i) => (
              <Mcard1 e={e} key={i} />
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default Trending;
