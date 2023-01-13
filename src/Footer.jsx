import { React, useEffect, useRef } from "react";


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

const Footer = () => {
  const footerRef = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScroll = () => {
    const scrollPos = window.pageYOffset;
    footerRef.current.style.opacity = (scrollPos / 300) - 6.5;
  };
  return (
    <footer ref={footerRef}>
      <div className="footer">
        <div className="footerLinks">
          {SOCIALS.map((item) => (
            <a href={item.link} target="_blank">
              <ion-icon name={item.icon}></ion-icon>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;