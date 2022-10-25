import React from "react";

const About = () => {
  return (
    <div className="py-20 bg-[#342246] text-white">
      <div className="w-10/12 mx-auto">
        <h2 className="text-4xl font-semibold">About me</h2>
        <p className="py-10 text-lg">
          Hi, I am Harsh Agarwal. I am a 3rd Year student at the IITBHU.
          <br />
          <br />
          I am a freelancer. I started it in my first year of college. I have worked on 20+ professional projects with a
          100% job success rate for various clients. My projects include browser automation, web scrapping, API
          Development, trading bots, etc. I also work on basic server management, including setting up the automated job
          in the server. Freelancing taught me how to present my idea to the client, negotiate, never underestimate
          myself, and prioritize tasks always to meet deadlines.
          <br />
          <br />
          I'm interested in web development as well. I am a full stack developer and have worked on various projects,
          including Trello clone, Todoist clone, Wordle, etc. Additionally, I have experimented with flutter, a
          cross-platform app development library. I am also efficient in Data Structure and algorithms. I like
          problem-solving.
          <br />
          <br />I also like to learn about financial markets and trade stocks.
        </p>
        <button className="block px-6 py-3 font-bold text-black bg-white rounded-md">View Resume</button>
      </div>
    </div>
  );
};

export default About;
