import React from "react";

const SOCIALS = [
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/noah-farinas-b3b9571b0/",
    icon: "logo-linkedin",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/noahhnigel/?hl=en",
    icon: "logo-instagram",
  },
  {
    name: "Github",
    link: "https://github.com/noahfarinas",
    icon: "logo-github",
  },
];
const NAV = [
  {
    name: '"HOME"',
    id: "photo"
  },
  {
    name: '"ABOUT ME"',
    id: "skills"
  },
  {
    name: '"PROJECTS"',
    id: "projectView"
  },
  {
    name: '"CONTACT"',
  },
];

const Navbar = () => {
  return (
    <header>
      <div className="navbar">
        <div className="name">
          <img src="./photos/jordan.gif" alt="shoes" />
          <div className="navbarMenu">
            {NAV.map((item) => (
              <h3>{item.name}</h3>
            ))}
          </div>
        </div>
        <div className="links">
          {SOCIALS.map((item) => (
            <a href={item.link} target="_blank">
              <ion-icon name={item.icon}></ion-icon>
              
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
