import React, { useState } from "react";

const Dropdown = ({
  isOpen,
  setIsOpen,
  selectedItem,
  setSelectedItem,
  toggleDropdown,
  handleItemClick,
}) => {
  const items = ["all", "movie", "tv"];

  return (
    <div className="absolute right-0 -top-1  text-white w-[17%] inline-block text-left">
      <div>
        <button
          onClick={toggleDropdown}
          className="inline-flex capitalize justify-between w-full rounded-md border border-sky-700 shadow-sm px-4 py-2 bg-inherit text-white text-sm font-medium  hover:bg-sky-600 focus:outline-none"
        >
          {selectedItem}
          <svg
            className={`ml-2 h-5 w-5 transition-transform duration-300 ${
              isOpen ? "transform rotate-180" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.707a1 1 0 011.414 0L10 11l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 z-10 rounded-md shadow-lg bg-amber-300 ring-1 text-white ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {items.map((item, index) => (
              <button
                key={index}
                onClick={() => handleItemClick(item)}
                className="block capitalize px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                role="menuitem"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
