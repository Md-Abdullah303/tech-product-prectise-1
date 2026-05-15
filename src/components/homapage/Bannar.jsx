import React from "react";

const Banner = () => {
  return (
    <div className="bg-[url(https://images.unsplash.com/photo-1511707171634-5f897ff02aa9)] bg-no-repeat bg-center mt-20 py-45 px-20 rounded-lg relative">
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75 rounded-lg "></div>

      {/* banner context */}
      <div className="text-white grid grid-cols-2 gap-5 relative z-10 ">
        <div className="col-span-2 md:col-span-1 space-y-3">
          <h1 className="text-4xl md:text-7xl font-bold ">
            Best tech products in BD
          </h1>
          <p className="text-xl md:text-3xl text-gray-400 font-medium">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
            aliquid velit corrupti quis adipisci optio sunt aliquam id!
            Voluptatum laborum ea quidem id!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
