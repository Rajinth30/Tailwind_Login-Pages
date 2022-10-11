import React from "react";
import Treeimg from "../assets/trees.jpg";

const Login3 = () => {
  return (
    <div className="w-full h-screen flex">
      <div className="grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px] bg-gray-400">
        <div className="w-full h-[550px] hidden md:block">
          <img src={Treeimg} alt="" className="w-full h-full" />
        </div>
        <div className="p-4 flex flex-col justify-around">
          <form>
            <h2 className="text-4xl font-bold text-center mb-8">BRAND.</h2>
            <div>
              <input
                className="border p-2 mr-2"
                type="text"
                placeholder="Username"
              />
              <input
                className="border p-2 "
                type="password"
                placeholder="Password"
              />
            </div>
            <button className="w-full py-2 my-4 bg-green-600 hover:bg-green-500 rounded-md">
              Sign In
            </button>
            <p className="text-center text-white">Forgot username or Password</p>
          </form>
          <button className="items-center rounded-md bg-gray-800 hover:bg-gray-700 text-white py-2 ">Sign-Up</button>
        </div>
      </div>
    </div>
  );
};

export default Login3;
