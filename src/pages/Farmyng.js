import React from "react";
import banner from "../src/assets/banner.webp"

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-10 text-center text-gray-800">
        Farmyng Club
      </h1>

      <div className="relative w-full max-w-5xl flex justify-center items-end gap-6">
        {/* Left Phone */}
        <div className="w-52 h-96 bg-black rounded-3xl overflow-hidden shadow-lg">
          <img
            src={banner}
            alt="Left screen"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
