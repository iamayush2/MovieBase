import React, { useEffect, useState } from "react";
import { TiArrowBack } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import Topnav from "./templetes/Topnav";
import Drop from "./templetes/Drop";
import Cards from "./Cards";
import axios from "../utils/axios";
import Loader from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";

const Popular = () => {
  const navigate = useNavigate();

  const [populardata, setpopulardata] = useState([]);
  const [category, setcategory] = useState("tv");
  const [page, setpage] = useState(1);

  const getPoulardata = async () => {
    try {
      const { data } = await axios(`/${category}/popular?page=${page}`);
      setpopulardata((prev) => [...prev, ...data.results]);
      setpage(page + 1);
    } catch (error) {
      console.error(error);
    }
  };

  const getCategoryData = (e) => {
    setpopulardata([]);
    setpage(1);
  };

  useEffect(() => {
    getPoulardata();
  }, [category]);

  const handleItemClick = () => {};
  return populardata ? (
    <div className="w-screen h-screen bg-inherit flex flex-col ">
      <div className="w-full h-[15%] flex p-3 px-10 items-center ">
        <div className="w-[25%] h-full  flex gap-8 items-center">
          <TiArrowBack
            onClick={() => navigate(-1)}
            className="text-sky-200 text-4xl font-bold shadow-sm hover:cursor-pointer hover:text-amber-200"
          />
          <h1 className="text-5xl font-bold text-amber-100 shadow-md">
            Popular
          </h1>
        </div>

        <div className="w-[75%] h-full gap-5  flex items-center justify-center">
          <div className="w-[50%]">
            {" "}
            <Topnav />
          </div>
          <div className="flex mt-4 h-full items-center justify-center gap-5 w-[40%]">
            <Drop
              title={"category"}
              options={["tv", "movie"]}
              handleItemClick={getCategoryData}
            />
          </div>
        </div>
      </div>

      <div className="w-full bg-inherit ">
        <InfiniteScroll
          loader={
            <div className="w-full  h-[10vh] mt-4 flex justify-center">
              <img className="w-[5%] " src="public\animate1.gif"></img>
            </div>
          }
          hasMore={true}
          dataLength={populardata.length}
          next={getPoulardata}
        >
          <Cards data={populardata} title={category} />
        </InfiniteScroll>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default Popular;
