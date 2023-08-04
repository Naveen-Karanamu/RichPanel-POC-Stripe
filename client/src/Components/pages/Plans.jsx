import React from "react";

const Plans = () => {
  return (
    <>
      <div>
        <p className="text-center text-4xl text-blue-950 font-bold py-12">
          Choose the right plan for you
        </p>
      </div>
      <div className="flex justify-center gap-36">
        {/* button row */}
        <div className=" ">
          <div className="flex gap-4 justify-center items-center">
            <button className="w-28 h-12 text-white font-semibold text-xl bg-signBg-200 rounded hover:bg-signBg-100 focus:bg-signBg-100">
              Monthly
            </button>
            <button className="w-28 h-12 text-white font-semibold text-xl bg-signBg-200 rounded hover:bg-signBg-100 focus:bg-signBg-100">
              Yearly
            </button>
          </div>
          <div className="flex flex-col gap-4 text-base py-16 text-gray-600 font-semibold">
            <p className="border-b-2 py-3">Monthly Price</p>
            <p className="border-b-2 py-3">Video quality</p>
            <p className="border-b-2 py-3">Resolution</p>
            <p className="py-3">Devices you can use to watch</p>
          </div>
        </div>
        {/* following rows */}
        <div className="flex gap-10">
          <div className=" hover:text-signBg-100">
            <button className="bg-signBg-200 text-white font-semibold text-base w-24 h-24 items-center flex justify-center hover:bg-signBg-100 focus:bg-signBg-100">
              <p>Mobile</p>
            </button>
            <div className="flex flex-col gap-4 justify-center items-center py-4 text-gray-500 font-bold hover:text-signBg-100 focus:bg-signBg-100">
              <p className="border-b-2 py-3 w-full text-center">₹ 100</p>
              <p className="border-b-2 py-3 w-full text-center">Good</p>
              <p className="border-b-2 py-3 w-full text-center">480p</p>
              <p className="text-xs py-3 w-full text-center">Phone</p>
              <p className="text-xs py-3 w-full text-center">Tablet</p>
            </div>
          </div>
          <div>
            <button className="bg-signBg-200 text-white font-semibold text-base w-24 h-24 items-center flex justify-center hover:bg-signBg-100 focus:bg-signBg-100">
              <p>Basic</p>
            </button>
            <div className="flex flex-col gap-4 justify-center items-center py-3 text-gray-500 font-bold hover:text-signBg-100">
              <p className="border-b-2 py-3 w-full text-center">₹ 200</p>
              <p className="border-b-2 py-3 w-full text-center">Good</p>
              <p className="border-b-2 py-3 w-full text-center">480p</p>
              <p className="text-xs py-3 w-full text-center">Phone</p>
              <p className="text-xs py-3 w-full text-center">Tablet</p>
              <p className="text-xs py-3 w-full text-center">Computer</p>
              <p className="text-xs py-3 w-full text-center">TV</p>
            </div>
          </div>
          <div>
            <button className="bg-signBg-200 text-white font-semibold text-base w-24 h-24 items-center flex justify-center hover:bg-signBg-100 focus:bg-signBg-100">
              <p>Standard</p>
            </button>
            <div className="flex flex-col gap-4 justify-center items-center py-3 text-gray-500 font-bold hover:text-signBg-100">
              <p className="border-b-2 py-3 w-full text-center">₹ 500</p>
              <p className="border-b-2 py-3 w-full text-center">Better</p>
              <p className="border-b-2 py-3 w-full text-center">1080p</p>
              <p className="text-xs py-3 w-full text-center">Phone</p>
              <p className="text-xs py-3 w-full text-center">Tablet</p>
              <p className="text-xs py-3 w-full text-center">Computer</p>
              <p className="text-xs py-3 w-full text-center">TV</p>
            </div>
          </div>
          <div>
            <button className="bg-signBg-200 text-white font-semibold text-base w-24 h-24 items-center flex justify-center hover:bg-signBg-100 focus:bg-signBg-100">
              <p>Premium</p>
            </button>
            <div className="flex flex-col gap-4 justify-center items-center py-3 text-gray-500 font-bold hover:text-signBg-100">
              <p className="border-b-2 py-3 w-full text-center">₹ 700</p>
              <p className="border-b-2 py-3 w-full text-center">Best</p>
              <p className="border-b-2 py-3 w-full text-center">4K+HDR</p>
              <p className="text-xs py-3 w-full text-center">Phone</p>
              <p className="text-xs py-3 w-full text-center">Tablet</p>
              <p className="text-xs py-3 w-full text-center">Computer</p>
              <p className="text-xs py-3 w-full text-center">TV</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-4">
        <button className="bg-signBg-100 text-xl font-semibold py-4 px-48 text-white hover:bg-signBg-200 focus:bg-signBg-200 ">Next</button>
      </div>
    </>
  );
};

export default Plans;
