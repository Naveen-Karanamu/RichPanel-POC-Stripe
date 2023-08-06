import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getSubs } from "../../Redux/Reducer/Subscription/subs.action";

const Confirmation = () => {
  // from Redux
  const subscriptions = useSelector((state) => state.subsctipitons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSubs(123));
  }, [dispatch]);
  console.log(subscriptions);

  const [isCancelled, setIsCancelled] = useState(false);
  const clickCancel = () => {
    setIsCancelled(true);
  };
  const history = useHistory();
  // from localStorage
  const subsData = JSON.parse(localStorage.getItem("selectedsubsData"));

  const altPlan = () => {
    history.push("/plans");
  };
  // console.log(subsData);

  // Current date
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();

  // Next month
  function formatDate(date) {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString().slice(-2);
    return `${day}/${month}/${year}`;
  }

  function getNextMonthDateWithDay(currentDate) {
    // Get the current date, month, and year
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    // Calculate the next month and year
    let nextMonth = currentMonth + 1;
    let nextYear = currentYear;

    if (nextMonth > 11) {
      // If the next month is greater than 11 (December), set it to January of the next year
      nextMonth = 0;
      nextYear++;
    }

    // Create a new Date object for the next month's date
    const nextMonthDate = new Date(nextYear, nextMonth, currentDay);
    return nextMonthDate;
  }
  const nextMonthDateWithDay = getNextMonthDateWithDay(currentDate);
  const formattedDate = formatDate(nextMonthDateWithDay);
  // console.log(formattedDate);

  return (
    <>
      <div className="bg-signBg-100 w-screen h-screen flex justify-center items-center ">
        <div className="bg-white rounded-lg p-6">
          <div className="flex justify-between items-center">
            <div className="flex gap-3 justify-center items-center">
              <div className="text-2xl font-semibold ">
                Current Plan Details
              </div>
              {isCancelled ? (
                <button className="bg-red-400 hover:bg-red-500 rounded px-2 text-xs py-1 text-white text-center">
                  Cancelled
                </button>
              ) : (
                <button className="bg-blue-500 hover:bg-signBg-100 rounded px-2 text-xs py-1 text-white text-center">
                  Active
                </button>
              )}
            </div>
            {isCancelled ? (
              <></>
            ) : (
              <button
                className="text-red-700 font-semibold"
                onClick={clickCancel}
              >
                Cancel
              </button>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-sm">{subsData.planName}</p>
            <p className="text-xs">
              {subsData.devices
                .map((device, index) => (index === 0 ? device : `+ ${device}`))
                .join(" ")}
            </p>
            <p className="font-bold text-2xl ">
              {subsData.price}/{subsData.planType == "Monthly" ? "mo" : "year"}
            </p>
            <button
              className="flex border-signBg-100 px-4 py-2 text-md text-signBg-100 border-2 w-fit rounded my-1 hover:bg-signBg-100 hover:text-white"
              onClick={altPlan}
            >
              {isCancelled ? "Choose Plan" : "Change Plan"}
            </button>
            {subsData.planType == "Monthly" ? (
              <p className="text-xs w-full flex flex-wrap text-gray-500">
                Your Subscription has started on {day}/{month}/{year} and wil
                auto renew on {formattedDate}{" "}
              </p>
            ) : (
              <p className="text-xs w-full flex flex-wrap text-gray-500">
                Your Subscription has started on {day}/{month}/{year} and wil
                auto renew on {day}/{month}/{year + 1}{" "}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Confirmation;
