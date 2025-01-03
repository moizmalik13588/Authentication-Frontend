import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <div className="bg-white shadow-xl rounded-lg p-8 w-96 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
          Welcome
        </h1>
        <p className="text-gray-600 mb-8">
          Choose an option to get started.
        </p>
        <div className="flex flex-col gap-4">
          <button
            onClick={() => navigate("/login")}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition-all duration-300"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/register")}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition-all duration-300"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
