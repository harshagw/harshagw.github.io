import React from "react";

const Freelancing = () => {
  const testimonials = [
    {
      review:
        "It was great to work with Harsh, he is so talented, hard working and get things done beyond the scope. I highly recommend him. He went well beyond the task and deliver more than the scope..",
      color: "red-100",
    },
    {
      review:
        "It was a pleasure working with Harsh. He was very communicative, fast & built exactly what I needed. Definitely going to hire him for similar tasks in the near future",
      color: "#faa88d",
    },
    {
      review:
        "Really great, delivered well before the time agreed. Included a couple of bonus feature I hadn't asked for that was great.",
      color: "#9bbef0",
    },
  ];

  return (
    <div className="bg-[#2c2d37] py-20 text-white">
      <div className="w-10/12 mx-auto">
        <p className="text-3xl text-[#f4a88d]  first-letter:text-4xl first-letter:font-extrabold">
          I am a Python Freelancer. I have worked on 20+ professional projects with a 100% job success rate for various
          clients. My projects include browser automation, web scrapping, API Development, trading bots, etc.
        </p>
        <a
          href="#_"
          class="my-16 relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
        >
          <span class="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
          <span class="relative px-6 py-3 transition-all ease-out bg-[#2c2d37] rounded-md group-hover:bg-opacity-0 duration-400">
            <span class="relative text-white">PROFILE</span>
          </span>
        </a>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {testimonials.map((testimonial, index) => {
            return (
              <div className={`inline-block text-purple-300 text-${testimonial["color"]}`}>
                <svg
                  viewBox="0 0 151 132"
                  fill="currentcolor"
                  xmlns="http://www.w3.org/2000/svg"
                  height="40px"
                  width="40px"
                  className="my-4"
                >
                  <title>“</title>
                  <defs>
                    <path
                      id="quotation-mark"
                      d="M67.0203 65.5L36.5145 65.5L36.5145 71.0352C36.5145 89.0246 46.2209 98.25 67.0203 100.095L67.0203 131C26.3459 130.539 -2.13724e-06 106.553 -5.40359e-06 69.1902L-1.14524e-05 1.52588e-05L67.0203 9.39968e-06L67.0203 65.5ZM151 65.5L120.494 65.5L120.494 71.0352C120.494 89.0246 130.201 98.25 151 100.095L151 131C110.326 130.539 83.9796 106.553 83.9796 69.1902L83.9796 7.91706e-06L151 2.05795e-06L151 65.5Z"
                    ></path>
                    <clipPath id="clip-path">
                      <path
                        id="quotation-mark"
                        d="M67.0203 65.5L36.5145 65.5L36.5145 71.0352C36.5145 89.0246 46.2209 98.25 67.0203 100.095L67.0203 131C26.3459 130.539 -2.13724e-06 106.553 -5.40359e-06 69.1902L-1.14524e-05 1.52588e-05L67.0203 9.39968e-06L67.0203 65.5ZM151 65.5L120.494 65.5L120.494 71.0352C120.494 89.0246 130.201 98.25 151 100.095L151 131C110.326 130.539 83.9796 106.553 83.9796 69.1902L83.9796 7.91706e-06L151 2.05795e-06L151 65.5Z"
                      ></path>
                    </clipPath>
                  </defs>
                  <path
                    id="quotation-mark"
                    d="M67.0203 65.5L36.5145 65.5L36.5145 71.0352C36.5145 89.0246 46.2209 98.25 67.0203 100.095L67.0203 131C26.3459 130.539 -2.13724e-06 106.553 -5.40359e-06 69.1902L-1.14524e-05 1.52588e-05L67.0203 9.39968e-06L67.0203 65.5ZM151 65.5L120.494 65.5L120.494 71.0352C120.494 89.0246 130.201 98.25 151 100.095L151 131C110.326 130.539 83.9796 106.553 83.9796 69.1902L83.9796 7.91706e-06L151 2.05795e-06L151 65.5Z"
                  ></path>
                </svg>
                <p className="text-lg ">{testimonial["review"]}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Freelancing;
