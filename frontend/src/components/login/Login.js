import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      className="h-screen w-screen backdrop-blur-md flex justify-center items-center"
      style={{
        backgroundImage: `url("https://i1.wp.com/www.icareermaker.com/wp-content/uploads/2016/12/GNDEC_Ludhiana.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}>
      <div className="flex flex-col items-center mt-10 space-y-8 sm:space-y-32 px-4 sm:px-0">
        <h1 className="text-3xl sm:text-4xl font-semibold bg-black text-white w-full text-center py-4 bg-opacity-75 rounded-2xl">
          GNE Ludhiana
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-28">
          <div className="h-72 w-full sm:h-96 sm:w-80 space-y-6 sm:space-y-11 shadow-2xl flex flex-col justify-center items-center bg-transparent backdrop-blur-md bg-[#cebe30] bg-opacity-60 rounded-xl">
            <h1 className="text-2xl sm:text-4xl font-extrabold">Admin</h1>
            <Link
              type="button"
              to="/login/adminlogin"
              className="flex items-center justify-center bg-blue-500 h-10 w-24 sm:w-32 text-lg rounded-lg text-white hover:scale-110 transition-all duration-200">
              Login
            </Link>
          </div>
          <div className="h-72 w-full sm:h-96 sm:w-80 space-y-6 sm:space-y-11 shadow-2xl flex flex-col justify-center items-center bg-transparent backdrop-blur-md bg-[#5a51d6] bg-opacity-60 rounded-xl">
            <h1 className="text-2xl sm:text-4xl font-extrabold">Faculty</h1>
            <Link
              type="button"
              to="/login/facultylogin"
              className="flex items-center justify-center bg-blue-500 h-10 w-24 sm:w-32 text-lg rounded-lg text-white hover:scale-110 transition-all duration-200">
              Login
            </Link>
          </div>
          <div className="h-72 w-full sm:h-96 sm:w-80 space-y-6 sm:space-y-11 shadow-2xl flex flex-col justify-center items-center bg-transparent backdrop-blur-md bg-[#d65158] bg-opacity-60 rounded-xl">
            <h1 className="text-2xl sm:text-4xl font-extrabold">Student</h1>
            <Link
              type="button"
              to="/login/studentlogin"
              className="flex items-center justify-center bg-blue-500 h-10 w-24 sm:w-32 text-lg rounded-lg text-white hover:scale-110 transition-all duration-200">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
