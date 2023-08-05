import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const MonthlyPlans = () => {
  const history = useHistory();

  const [isMonth, setIsMonth] = useState(true);
  const [isYear, setIsYear] = useState(false);

  const toggleMonth = () => {
    setIsMonth(true);
    setIsYear(false);
  };

  const toggleYear = () => {
    setIsYear(true);
    setIsMonth(false);
  };

  // secondary components
  const[isMobile,setIsMobile]=useState(false);
  const[isBasic,setIsBasic]=useState(false);
  const[isStandard,setIsStandard]=useState(false);
  const[isPremium,setisPremium]=useState(false);

  const toggleMobile=()=>{
    setIsMobile(true);
    setIsBasic(false);
    setIsStandard(false)
    setisPremium(false);
  }
  const toggleBasic=()=>{
    setIsMobile(false);
    setIsBasic(true);
    setIsStandard(false)
    setisPremium(false);
  }
  const toggleStandard=()=>{
    setIsMobile(false);
    setIsBasic(false);
    setIsStandard(true)
    setisPremium(false);
  }
  const togglePremium=()=>{
    setIsMobile(false);
    setIsBasic(false);
    setIsStandard(false)
    setisPremium(true);
  }

  const initialData = {
    no:"",
    planName: "",
    price: "",
    videoQuality: "",
    resolution: "",
    devices: [],
    planType: "",
  };

  const [tempData, setTempData] = useState(initialData);

  const nextButton = () => {
    let data = { ...initialData }; // Create a copy of the initialData object

    if (isMobile) {
      data.planName = "Mobile";
      data.price = isMonth ? "₹ 100" : "₹ 1000";
      data.videoQuality = "Good";
      data.resolution = "480p";
      data.devices = ["Phone", "Tablet"];
    } else if (isBasic) {
      data.planName = "Basic";
      data.price = isMonth ? "₹ 200" : "₹ 2000";
      data.videoQuality = "Good";
      data.resolution = "480p";
      data.devices = ["Phone", "Tablet", "Computer", "TV"];
    } else if (isStandard) {
      data.planName = "Standard";
      data.price = isMonth ? "₹ 500" : "₹ 5000";
      data.videoQuality = "Better";
      data.resolution = "1080p";
      data.devices = ["Phone", "Tablet", "Computer", "TV"];
    } else if (isPremium) {
      data.planName = "Premium";
      data.price = isMonth ? "₹ 700" : "₹ 7000";
      data.videoQuality = "Best";
      data.resolution = "4K+HDR";
      data.devices = ["Phone", "Tablet", "Computer", "TV"];
    }
    data.planType = isMonth ? "Monthly" : "Yearly";

    setTempData(data); // Update tempData state with the selected plan's data
    localStorage.setItem("selectedsubsData", JSON.stringify(data));
  history.push("/payment");
    console.log(data);
  };
  
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
            {isMonth ? (
              <button
                className="w-28 h-12 text-white font-semibold text-xl bg-signBg-100 rounded hover:bg-signBg-100 "
                onClick={toggleMonth}
              >
                Monthly
              </button>
            ) : (
              <button
                className="w-28 h-12 text-white font-semibold text-xl bg-signBg-200 rounded hover:bg-signBg-100 "
                onClick={toggleMonth}
              >
                Monthly
              </button>
            )}
            {isYear ? (
              <button
                className="w-28 h-12 text-white font-semibold text-xl bg-signBg-100 rounded hover:bg-signBg-100 "
                onClick={toggleYear}
              >
                Yearly
              </button>
            ) : (
              <button
                className="w-28 h-12 text-white font-semibold text-xl bg-signBg-200 rounded hover:bg-signBg-100"
                onClick={toggleYear}
              >
                Yearly
              </button>
            )}
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
          <div className=" hover:text-signBg-100"  onClick={toggleMobile}>
            <button className="bg-signBg-200 text-white font-semibold text-base w-24 h-24 items-center flex justify-center hover:bg-signBg-100 focus:bg-signBg-100">
              <p>Mobile</p>
            </button>
            <div className="flex flex-col gap-4 justify-center items-center py-4 text-gray-500 font-bold hover:text-signBg-100 focus:bg-signBg-100">
              {isMonth ? (
                <p className="border-b-2 py-3 w-full text-center">₹ 100</p>
              ) : (
                <p className="border-b-2 py-3 w-full text-center">₹ 1000</p>
              )}
              <p className="border-b-2 py-3 w-full text-center">Good</p>
              <p className="border-b-2 py-3 w-full text-center">480p</p>
              <p className="text-xs py-3 w-full text-center">Phone</p>
              <p className="text-xs py-3 w-full text-center">Tablet</p>
            </div>
          </div>
          <div onClick={toggleBasic}>
            <button className="bg-signBg-200 text-white font-semibold text-base w-24 h-24 items-center flex justify-center hover:bg-signBg-100 focus:bg-signBg-100" >
              <p>Basic</p>
            </button>
            <div className="flex flex-col gap-4 justify-center items-center py-3 text-gray-500 font-bold hover:text-signBg-100">
              {isMonth ? (
                <p className="border-b-2 py-3 w-full text-center">₹ 200</p>
              ) : (
                <p className="border-b-2 py-3 w-full text-center">₹ 2000</p>
              )}
              <p className="border-b-2 py-3 w-full text-center">Good</p>
              <p className="border-b-2 py-3 w-full text-center">480p</p>
              <p className="text-xs py-3 w-full text-center">Phone</p>
              <p className="text-xs py-3 w-full text-center">Tablet</p>
              <p className="text-xs py-3 w-full text-center">Computer</p>
              <p className="text-xs py-3 w-full text-center">TV</p>
            </div>
          </div>
          <div  onClick={toggleStandard}>
            <button className="bg-signBg-200 text-white font-semibold text-base w-24 h-24 items-center flex justify-center hover:bg-signBg-100 focus:bg-signBg-100">
              <p>Standard</p>
            </button>
            <div className="flex flex-col gap-4 justify-center items-center py-3 text-gray-500 font-bold hover:text-signBg-100">
              {isMonth ? (
                <p className="border-b-2 py-3 w-full text-center">₹ 500</p>
              ) : (
                <p className="border-b-2 py-3 w-full text-center">₹ 5000</p>
              )}
              <p className="border-b-2 py-3 w-full text-center">Better</p>
              <p className="border-b-2 py-3 w-full text-center">1080p</p>
              <p className="text-xs py-3 w-full text-center">Phone</p>
              <p className="text-xs py-3 w-full text-center">Tablet</p>
              <p className="text-xs py-3 w-full text-center">Computer</p>
              <p className="text-xs py-3 w-full text-center">TV</p>
            </div>
          </div>
          <div  onClick={togglePremium}>
            <button className="bg-signBg-200 text-white font-semibold text-base w-24 h-24 items-center flex justify-center hover:bg-signBg-100 focus:bg-signBg-100">
              <p>Premium</p>
            </button>
            <div className="flex flex-col gap-4 justify-center items-center py-3 text-gray-500 font-bold hover:text-signBg-100">
              {isMonth ? (
                <p className="border-b-2 py-3 w-full text-center">₹ 700</p>
              ) : (
                <p className="border-b-2 py-3 w-full text-center">₹ 7000</p>
              )}
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
        <button className="bg-signBg-100 text-xl font-semibold py-4 px-48 text-white hover:bg-signBg-200 focus:bg-signBg-200 " onClick={nextButton}>
          Next
        </button>
      </div>
    </>
  );
};

export default MonthlyPlans;
