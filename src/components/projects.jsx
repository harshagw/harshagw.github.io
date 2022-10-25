import React from "react";
import { LogoLinkedin, LogoGithub, LogoTwitter, LogoDiscord, LogoChrome, Star, StarHalf } from "react-ionicons";

const Projects = () => {
  const projects = [
    {
      name: "Crypto Bot",
      description:
        "I built a Python bot that takes real-time signal from TradingView Platform and trade coins accordingly on multiple exchanges like CoinBase, FTX, Gemini. I also developed a discord bot which helps to manage different trading coin settings. I have worked on 10+ different trading bots freelancing projects.",
      link: "",
    },
    {
      name: "NFT Sniper",
      description:
        " I built a application which can automate the bidding process on OpenSea using their SDK and browser automation. Additionally, I built a discord bot which can retrieve different information and act as a interface to configure the application.",
      link: "",
    },
    {
      name: "RealTime Colloboration",
      description:
        " I built a full stack trello clone including real time data sharing between members on same board. It includes features like authentication, real-time updates, ability to share boards, reordering cards etc.",
      link: "",
    },
  ];

  return (
    <div className="bg-[#321720] py-20 text-white">
      <div className="w-10/12 mx-auto">
        <div className="grid grid-cols-2 gap-10">
          {projects.map((project) => {
            return (
              <div className="p-10 border-2 border-red-300 border-dashed rounded-md ">
                <div className="poster"></div>
                <div className="info">
                  <h2 className="text-4xl font-semibold">{project.name}</h2>
                  <p className="my-4">{project.description}</p>
                  <button href="#">Github</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
