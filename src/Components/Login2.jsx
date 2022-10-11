import React from "react";
import Logimg from "../assets/login.jpg";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const Login2 = () => {
  return (
    <div className="relative h-screen w-full bg-zinc-900/90">
      <img
        src={Logimg}
        alt=""
        className="absolute h-full w-full object-cover mix-blend-overlay"
      />

      <div className="flex flex-col justify-center items-center h-full">
        <form action="" className="max-w-[480px] p-8 w-full mx-auto bg-white">
          <h2 className="font-bold text-4xl text-center py-4">BRAND.</h2>
          <div className="flex justify-between py-8">
            <p className="border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center ">
              <FaFacebook className="mr-2" /> Facebook
            </p>
            <p className="border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center ">
              <FcGoogle className="mr-2" /> Google
            </p>
          </div>
          <div className="flex flex-col mb-4">
            <label className="text-base font-semibold">Username</label>
            <input
              className="border relative bg-gray-100 p-1.5"
              type="text"
              name=""
              id=""
            />
          </div>

          <div className="flex flex-col ">
            <label className="text-base font-semibold">Password</label>
            <input
              className="border relative bg-gray-100 p-1.5"
              type="password"
              name=""
              id=""
            />
          </div>
          <button className="w-full py-3 my-5 bg-blue-600 hover:bg-blue-500 relative text-white">
            Sign In
          </button>

          <p className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Remember Me
          </p>
          <p className="mt-8 text-center">Not a member? Sign-up Now</p>
        </form>
      </div>
    </div>
  );
};

export default Login2;
