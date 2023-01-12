import React from "react";

const PROJECTS = [
  {
    name: "Social Links",
    link: "https://noahfarinas.github.io/",
    type: "HTML & CSS",
    img: "./photos/social.png",
  },
  {
    name: "Rad Power Bikes",
    link: "https://noahfarinas.github.io/top-rad-bikes/",
    type: "ReactJS",
    img: "./photos/rad.png",
  },
  {
    name: "Stretching Search",
    link: "https://noahfarinas.github.io/stretching/",
    type: "ReactJS",
    img: "./photos/stretch.png",
  },
  {
    name: "Resume",
    link: "https://noahfarinas.github.io/noahfarinas-react-resume/",
    type: "ReactJS",
    img: "./photos/resume.png",
  },
];

const Code = () => {
  return (
    <div className="projectView">
      <>
        {PROJECTS.map((item) => (
          <ul>
            <>
              <img src={item.img} alt="test" />
              <h3>{item.name}</h3>
              <li>{item.type}</li>
              <a href={item.link} target="_blank">
                View Project
              </a>
            </>
          </ul>
        ))}
      </>
    </div>
  );
};

export default Code;
