import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BsCreditCard } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { postSubs } from "../../Redux/Reducer/Subscription/subs.action";

const Payment = () => {
    const dispatch = useDispatch();

    // const data=useEffect({

    // },[])

  const planData = JSON.parse(localStorage.getItem("selectedPlanData"));
  return (
    <div className="bg-signBg-100 w-full h-screen flex justify-center items-center px-64">
      <div className="bg-white h-80 w-3/5 rounded-l-xl flex flex-col gap-2 p-8">
        <p className="text-2xl font-semibold ">Complete Payment</p>
        <p>Enter your Credit of Debit card details below</p>
        <div className=" flex items-center justify-center">
          <div className="flex justify-start items-center rounded-sm border-y-2 border-l-2 py-2 px-4 gap-2 my-2 w-2/3">
            <BsCreditCard className="text-gray-500" />
            <input
              placeholder="Card Number"
              className="w-full focus:outline-none border-r-2"
            />
          </div>
          <div className="flex w-1/3 border-y-2 border-r-2 py-2 px-2 gap-2">
            <input placeholder="MM/YY" className="focus:outline-none w-1/2 border-r-2" />
            <input placeholder="CVC" className="focus:outline-none w-1/2" />
          </div>
        </div>
        <button className="bg-signBg-100 f w-1/2 text-white hover:bg-signBg-200 my-4 py-2 rounded-md text-center">
          Confirm Payment
        </button>
      </div>
      <div className="bg-gray-300 h-80 w-2/5 rounded-r-xl  p-10">
        <p className="text-xl font-semibold pb-6">Order Summary</p>
        <div className="flex justify-between items-center border-b-2 border-gray-400 py-3">
            <p className="text-md font-medium ">Plan Name</p>
            <p className="text-md font-bold">{planData.planName}</p>
        </div>
        <div className="flex justify-between items-center border-b-2 border-gray-400 py-3">
            <p className="text-md font-medium ">Billing Cycle</p>
            <p className="text-md font-bold">{planData.planType}</p>
        </div>
        <div className="flex justify-between items-center border-b-2 border-gray-400 py-3">
            <p className="text-md font-medium ">Plan Price</p>
            <p className="text-md font-bold">{planData.price}/mo</p>
        </div>
      </div>
    </div>
  );
};
{
  /* <p>Confirm Payment Details:</p>
      {planData && (
        <>
          <p>Plan Name: {planData.planName}</p>
          <p>Price: {planData.price}</p>
          <p>Video Quality: {planData.videoQuality}</p>
          <p>Resolution: {planData.resolution}</p>
          <p>Devices: {planData.devices.join(", ")}</p>
        </>
      )} */
}

export default Payment;
