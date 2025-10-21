import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="  mx-auto text-white  relative mb-100">
      <div className="bg-[#9538E2] rounded-4xl h-[600px]">
        <h1 className=" px-10 pt-20 text-6xl font-semibold  ">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h1>
        <p className=" max-w-3xl mx-auto p-4.5 font-medium">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <button className=" rounded-3xl btn m-2.5 text-[#9538E2] ">
          Shop Now
        </button>
      </div>
      <div className="mx-auto border-3 bg-white-900 rounded-4xl w-fit p-4 mt-10 absolute left-1/8 top-3/5 ">
        <img
          className="w-[900px] h-[480px] mx-auto rounded-3xl"
          src="/public/assets/banner.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
