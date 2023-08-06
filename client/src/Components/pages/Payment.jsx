import React, {  useState } from "react";
import { useHistory  } from "react-router-dom";
import { BsCreditCard } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { postSubs } from "../../Redux/Reducer/Subscription/subs.action";
import {loadStripe} from "@stripe/stripe-js"
import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js"
import {Elements} from '@stripe/react-stripe-js';

const stripePromise = loadStripe(`${process.env.STRIPE_PUBLISHABLE_API_KEY}`);

const Wrapper = (props) => (
  <Elements stripe={stripePromise}>
    <Payment {...props} />
  </Elements>
);


const Payment = (props) => {
  // Stripe

  const stripe=useStripe()
  const elements=useElements()


  const history = useHistory();
    const subsData = JSON.parse(localStorage.getItem("selectedsubsData"));

    const [inputValue, setInputValue] = useState("");
    
    
    const dispatch = useDispatch();
    
    const handleDispatchsubsData = async () => {
      if (subsData) {
        try {
          
          // Stripe
          const paymentMethod= await stripe.createPaymentMethod({
            type:"card",
            card:elements.getElement("card"),
            })
            const response=await fetch("/stripe/new", {
              method:"POST",
              headers:{
                "Content-Type":"application/json",
              },
              body:JSON.stringify({
                paymentMethod:paymentMethod.paymentMethod.id,
              })
            })
            if(!response.ok) return alert('payment Unsuccessfull')
            const paymentData=await response.json();
            const confirm =await stripe.confirmCardPayment(paymentData.clientSecret)
            if(confirm.error) return alert("Payment Unsuccessfull")
            alert('Payment Successfull, suscription is active')
            history.push("/confirm");
      } catch (error) {
        console.error("Error saving data:", error);
      }
        }
    };

    
    
    
  return (
    <div className="bg-signBg-100 w-full h-screen flex justify-center items-center px-64">
      <div className="bg-white h-80 w-3/5 rounded-l-xl flex flex-col gap-2 p-8">
        <p className="text-2xl font-semibold ">Complete Payment</p>
        <p>Enter your Credit of Debit card details below</p>
        {/* <div className=" flex items-center justify-center">
          <div className="flex justify-start items-center rounded-sm border-y-2 border-l-2 py-2 px-4 gap-2 my-2 w-2/3">
            <BsCreditCard className="text-gray-500" />
            <input
            type="number"
            name="no"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
              placeholder="Card Number"
              className="w-full focus:outline-none border-r-2"
            />
          </div>
          <div className="flex w-1/3 border-y-2 border-r-2 py-2 px-2 gap-2">
            <input placeholder="MM/YY" className="focus:outline-none w-1/2 border-r-2" />
            <input placeholder="CVC" className="focus:outline-none w-1/2" />
          </div>
        </div> */}
        <CardElement className="py-4"/>
        <button className="bg-signBg-100 f w-1/2 text-white hover:bg-signBg-200 my-4 py-2 rounded-md text-center" onClick={handleDispatchsubsData}>
          Confirm Payment
        </button>
      </div>
      <div className="bg-gray-300 h-80 w-2/5 rounded-r-xl  p-10">
        <p className="text-xl font-semibold pb-6">Order Summary</p>
        <div className="flex justify-between items-center border-b-2 border-gray-400 py-3">
            <p className="text-md font-medium ">Plan Name</p>
            <p className="text-md font-bold">{subsData.planName}</p>
        </div>
        <div className="flex justify-between items-center border-b-2 border-gray-400 py-3">
            <p className="text-md font-medium ">Billing Cycle</p>
            <p className="text-md font-bold">{subsData.planType}</p>
        </div>
        <div className="flex justify-between items-center border-b-2 border-gray-400 py-3">
            <p className="text-md font-medium ">Plan Price</p>
            <p className="text-md font-bold">{subsData.price}/mo</p>
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
