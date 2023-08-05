import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Confirmation = () => {
  const subsDetails = useSelector((state) => state.subsReducer.subsDetails);
  console.log(subsDetails);

  const [isCancelled,setIsCancelled]=useState(false);
  const clickCancel=()=>{
    setIsCancelled(true);
  }
  const history=useHistory()

  const altPlan=()=>{
    history.push("/plans");
  }

  return (
    <>
      <div className="bg-signBg-100 w-screen h-screen flex justify-center items-center ">
        <div className="bg-white rounded-lg p-6">
          <div className="flex justify-between items-center">
            <div className="flex gap-3 justify-center items-center">
              <div className="text-2xl font-semibold ">Current Plan Details</div>
              {
                isCancelled
                ?<button className="bg-red-400 hover:bg-red-500 rounded px-2 text-xs py-1 text-white text-center">Cancelled</button>
                :<button className="bg-blue-500 hover:bg-signBg-100 rounded px-2 text-xs py-1 text-white text-center">Active</button>
              }
            </div>
            {
                isCancelled
                ?<></>
                :<button className="text-red-700 font-semibold" onClick={clickCancel}>Cancel</button>
            }
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-sm">basic</p>
            <p className="text-xs">Phone + tablet</p>
            <p className="font-bold text-2xl ">2000/year</p>
            <button className="flex border-signBg-100 px-4 py-2 text-md text-signBg-100 border-2 w-fit rounded my-1 hover:bg-signBg-100 hover:text-white" onClick={altPlan}>
                {
                    isCancelled
                    ?"Choose Plan"
                    :"Change Plan"
                }
            </button>
            <p className="text-xs w-full flex flex-wrap text-gray-500">
              Your Subscription has started on July 11th and wil auto renew on
              July 12th 2023{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Confirmation;
