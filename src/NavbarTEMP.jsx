import { React,useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

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
    <Router>
      <header ref={headerRef}>
        <div className="navbar">
          <div className="name">
            <Link to="/">
              <img src="./photos/jordan.GIF" alt="shoes" />
            </Link>
            <div className="navbarMenu">
              {NAV.map((item) => (
                <h3>
                  <Link to={`/${item.id}`} onClick={() => handleClick(item.id)}>
                    {item.name}
                  </Link>
                </h3>
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
      <React.Suspense fallback={<div>Loading...</div>}>
          <Route path="/" exact>
            {/* Home Component */}
          </Route>
          <Route path={`/${NAV[1].id}`}>
            {/* About Me Component */}
          </Route>
          <Route path={`/${NAV[2].id}`}>
            {/* Projects Component */}
          </Route>
          <Route path={`/${NAV[3].id}`}>
            {/* Contact Component */}
          </Route>
      </React.Suspense>
    </Router>
  );
};

export default Navbar;