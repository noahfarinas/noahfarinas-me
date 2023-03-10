import { React,useEffect, useRef } from "react";

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
    id: "photo",
  },
  {
    name: '"ABOUT ME"',
    id: "skills",
  },
  {
    name: '"PROJECTS"',
    id: "projectView",
  },
];

const Navbar = () => {
  const headerRef = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScroll = () => {
    const scrollPos = window.pageYOffset;
    headerRef.current.style.opacity = 1 - (scrollPos / 300);
  };
  return (
    <header ref={headerRef} >
        <div className="links">
          {SOCIALS.map((item) => (
            <a href={item.link} target="_blank">
              <ion-icon name={item.icon}></ion-icon>
            </a>
          ))}
        </div>
    </header>
  );
};


export default Navbar;
