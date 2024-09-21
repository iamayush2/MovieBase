import React from "react";
import circle from "../assets/circle.gif";
const Loader = () => {
  return (
    <div className="w-screen h-screen bg-black flex items-center justify-center">
      <img src={circle} className="h-[50%] w-[25%]" alt="" />
    </div>
  );
};

export default Loader;
