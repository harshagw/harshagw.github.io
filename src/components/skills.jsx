import React from "react";

// const Skills = () => {
//   const skills = ["Python", "Javascript", "C++", "HTML/CSS", "ReactJs", "NodeJS"];
//   return (
//     <div className="bg-[#251b34] py-20 text-white">
//       <div className="w-10/12 mx-auto">
//         <h2 className="text-[#f4a88d] text-4xl">My Skills</h2>
//         <p className="py-10 text-xl font-bold">
//           I constantly learn new and exciting concepts in computer science and web development. I try applying these
//           concepts to solve real-world problems. Few technologies I enjoy working with:
//           <ul className="grid grid-cols-4 mt-5">
//             {skills.map((skill) => (
//               <li className="first-letter:font-semibold first-letter:text-[#f4a88d]">{skill}</li>
//             ))}
//           </ul>
//         </p>
//       </div>
//     </div>
//   );
// };

const Skills = () => {
  const skills = ["Python", "Javascript", "C++", "HTML/CSS", "ReactJs", "NodeJS"];
  return (
    <div className="bg-[#251b34] py-20 text-white">
      <div className="grid w-10/12 grid-cols-2 mx-auto">
        <div className="max-w-xs">
          <h2 className="text-[#f4a88d] text-4xl font-extrabold">My Skills</h2>
          <p className="py-5">
            I constantly learn new and exciting concepts in computer science and web development. I try applying these
            concepts to solve real-world problems.
          </p>
        </div>

        <ul className="grid grid-cols-2 gap-5 mt-5 text-xl font-bold">
          {skills.map((skill) => (
            <li className="first-letter:font-semibold first-letter:text-[#f4a88d]">{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
