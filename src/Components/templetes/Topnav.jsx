import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import Movienav from "./Movienav";
import axios from "../../utils/axios";

const Topnav = () => {
  const [query, setquery] = useState("");
  const [rawdata, setrawdata] = useState([]);

  const getdata = async () => {
    try {
      const { data } = await axios(`search/multi?query=${query}`);

      setrawdata(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getdata();
  }, [query]);

  return (
    <div className="relative w-[100%]  h-[10vh] pt-4  flex justify-center items-center gap-2 text-white ">
      <FaSearch />
      <input
        onChange={(e) => setquery(e.target.value)}
        value={query}
        type="search"
        id="search"
        placeholder="search anything"
        className="w-[100%] p-3 outline-none border-sky-600 border-[0.25px] rounded-lg bg-transparent "
      />

      <div className="z-50 max-h-[50vh] w-[97%] flex flex-col translate-x-3 rounded   absolute top-[95%]  overflow-auto ">
        {rawdata.map((v, i) => (
          <Movienav key={i} obj={v} />
        ))}
      </div>
    </div>
  );
};

export default Topnav;
