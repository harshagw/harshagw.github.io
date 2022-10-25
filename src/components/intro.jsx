import React from "react";

const Intro = () => {
  return (
    <div className="w-full min-h-screen text-white bg-black">
      <div className="flex flex-col-reverse items-center justify-around w-10/12 min-h-screen mx-auto md:justify-between md:flex-row">
        <div>
          <h1 className="font-extrabold text-7xl">
            Hey there, I'm <br /> Harsh Agarwal
          </h1>
          <p className="my-6 text-lg">
            I build innovative products on the web keeping design in mind. <br />I am a freelancer and a full stack web
            developer.
          </p>
          <button className="block px-8 py-4 font-bold text-black bg-white rounded-md">Say Hi</button>
        </div>

        <div className="flex items-center justify-center text-center">
          <div className="w-48 h-48 bg-white rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
