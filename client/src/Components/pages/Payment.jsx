import React from "react";
import { useLocation } from "react-router-dom";

const Payment = () => {
    const planData = JSON.parse(localStorage.getItem("selectedPlanData"));
  return (
    <div>
      <p>Confirm Payment Details:</p>
      {planData && (
        <>
          <p>Plan Name: {planData.planName}</p>
          <p>Price: {planData.price}</p>
          <p>Video Quality: {planData.videoQuality}</p>
          <p>Resolution: {planData.resolution}</p>
          <p>Devices: {planData.devices.join(", ")}</p>
        </>
      )}
    </div>
  );
};

export default Payment;
