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
    headerRef.current.style.opacity = 1 - scrollPos / 300;
  };

  const handleClick = (id) => {
    const element = document.getElementById(id);
    console.log(element)
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header ref={headerRef}>
    <div className="navbar">
      <div className="name">
        <a href="#photo" onClick={() => handleClick("photo")}>
          <img src="./photos/jordan.GIF" alt="shoes" />
        </a>
          <div className="navbarMenu">
            {NAV.map((item) => (
              <h3> <a href="#" onClick={() => handleClick(item.id)}>{item.name}</a></h3>
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