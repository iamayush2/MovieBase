import React, { useEffect, useState } from "react";
import SideNav from "./templetes/SideNav";
import Topnav from "./templetes/Topnav";
import Banner from "./templetes/Banner";
import axios from "../utils/axios";
import HomeTrendSection from "./templetes/HomeTrendSection";
import Loader from "./Loader";

function Home() {
  const [walpapper, setwalpapper] = useState(null);
  const [rawData, setrawData] = useState([]);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("all");

  const toggleDropdown = () => {
    setIsOpen((e) => !e);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  const getdata = async () => {
    try {
      const { data } = await axios(`trending/all/day`);
      let random =
        data.results[Math.floor(Math.random() * data.results.length)];
      setwalpapper(random);
    } catch (error) {
      console.error(error);
    }
  };

  const getrawData = async () => {
    try {
      const { data } = await axios(`trending/${selectedItem}/day`);
      setrawData(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getrawData();
    getdata();
  }, [selectedItem]);

  return walpapper && rawData ? (
    <>
      <SideNav />
      <div className="w-[83%] overflow-auto ">
        <div className="w-[50%] mx-auto">
          <Topnav />
        </div>

        <Banner data={walpapper} />
        <HomeTrendSection
          rawData={rawData}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          selectedItem={selectedItem}
          setSelectedItem={selectedItem}
          toggleDropdown={toggleDropdown}
          handleItemClick={handleItemClick}
        />
      </div>
    </>
  ) : (
    <Loader />
  );
}

export default Home;
