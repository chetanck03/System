import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const images = [
  "https://i1.wp.com/www.icareermaker.com/wp-content/uploads/2016/12/GNDEC_Ludhiana.jpg",
  "https://images.static-collegedunia.com/public/college_data/images/appImage/13655_GNDEC_APP.jpg?tr=c-force",
  "https://architecture.gndec.ac.in/educational/images/gndec.jpg",
];

const Login = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="h-screen w-screen flex flex-col">
      <header className="flex justify-between items-center p-4 bg-gray-300 bg-opacity-75">
        <div className="flex items-center space-x-4">
          <img src="./gndec.png" alt="GNDEC Logo" className="h-12" />
          <span className="text-lg font-semibold">
            Guru Nanak Dev Engineering College
          </span>
        </div>
        <nav className="flex space-x-4">
          {["Admin", "Faculty", "Student"].map((role) => (
            <Link
              key={role}
              to={`/login/${role.toLowerCase()}login`}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg transform hover:scale-105 transition-transform duration-200"
            >
              {role} Login
            </Link>
          ))}
        </nav>
      </header>

      <div className="relative flex-grow">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${images[currentIndex]})` }}
        ></div>

        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
        >
          &#10094;
        </button>

        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Login;
