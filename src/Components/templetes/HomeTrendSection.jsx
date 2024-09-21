import React, { useRef, useState } from "react";
import Mcard1 from "./Mcard1";
import "../../index.css";
import Dropdown from "./Dropdown";

const HomeTrendSection = ({
  rawData,
  isOpen,
  setIsOpen,
  selectedItem,
  setSelectedItem,
  toggleDropdown,
  handleItemClick,
}) => {
  return (
    <div className=" p-10 text-amber-50 flex flex-col gap-2">
      <h1 className="relative text-2xl text-amber-100 font-bold">
        {" "}
        Hot Picks Right Now
        <Dropdown
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          selectedItem={selectedItem}
          setSelectedItem={selectedItem}
          toggleDropdown={toggleDropdown}
          handleItemClick={handleItemClick}
        />
      </h1>

      <div className="tcont flex  p-2 gap-3  overflow-auto">
        {rawData.map((e, i) => (
          <Mcard1 e={e} key={i} />
        ))}
      </div>
    </div>
  );
};

export default HomeTrendSection;
