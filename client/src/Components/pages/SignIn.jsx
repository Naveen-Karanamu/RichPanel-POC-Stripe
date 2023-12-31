import {  useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";

// Redux actions
import { signIn } from '../../Redux/Reducer/Auth/auth.action'

const SignIn = ({ isOpen, setIsOpen }) => {
    const history = useHistory();

    const routeChange = () =>{ 
        let path = `/signup`; 
        history.push(path);
      }
    
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setUserData((prev) => ({ ...prev, [e.target.id]: e.target.value }));

  const dispatch = useDispatch();

  const submit = async () => {
    setUserData({
      email: "",
      password: "",
    });
    const dispatchData= await dispatch(signIn(userData));
    
    dispatchData.status==="registered"
    ?history.push("/plans")
    :alert(dispatchData.payload.response.data.error);
  };
  return (
    <div className="bg-signBg-100 w-full h-screen flex justify-center items-center">
      <div className="inline-block w-full max-w-md p-10 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-lg ">
        <div
          as="h3"
          className="text-3xl font-medium leading-6 text-gray-700 pb-10 text-center"
        >
          Login to your Account
        </div>
        <div className="mt-2 flex flex-col gap-4">
          <form className="flex flex-col gap-5">
            
            <div>
              <p>Email</p>
              <div className="flex items-center gap-3  ">
                <input
                  type="email"
                  name="review"
                  onChange={handleChange}
                  placeholder="Email"
                  id="email"
                  value={userData.email}
                  className="bg-white border border-gray-400 py-2 w-full  rounded-lg md:text-lg px-6"
                />
              </div>
            </div>
            <div>
              <p>Password</p>
              <div className="flex items-center gap-3  ">
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  placeholder="Password"
                  id="password"
                  value={userData.password}
                  className="bg-white border border-gray-400 py-2 w-full  rounded-lg md:text-lg px-6"
                />
              </div>
            </div>

            <div className="flex items-top gap-2">
              <input type="checkbox" id="terms" className="md:w-5 md:h-5" />
              <lable htmlFor="terms" className="text-gray-500 text-xs ">
                Remember me
              </lable>
            </div>

            <div className="flex items-center justify-center">
              <div
                className=" text-white py-2 rounded-lg  w-full text-center hover:cursor-pointer bg-signBg-100"
                onClick={submit}
              >
                Login
              </div>
            </div>
          </form>

          <div className="md:text-lg text-black flex justify-center">
            New to MyApp? &nbsp;
            <span
              className="text-signBg-100 font-bold hover:cursor-pointer"
              onClick={routeChange}
            >
              Sign Up 
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;