import React from "react";
import LoginImg from "../assets/login.jpg";

const Login = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img src={LoginImg} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="bg-gray-100 flex flex-col justify-center">
        <form className="max-w-[400px] w-full mx-auto bg-white p-4">
          <h2 className="text-4xl font-bold text-center py-6">BRAND.</h2>
          <div className="flex flex-col py-2">
            <label>Username</label>
            <input className="border p-2" type="text" />
          </div>
          <div className="flex flex-col py-2">
            <label>Password</label>
            <input className="border p-2" type="password" />
          </div>
          <button className="border w-full my-5 py-2 bg-blue-600 hover:bg-blue-500">Sign-in</button>
          <div className="flex justify-between">
            <p className="flex items-center ">
              <input type="checkbox" className="mr-1" />
              Remember Me
            </p>
            <p>Create an Account</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
