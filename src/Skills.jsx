import React from "react";

const SKILLS = ["HTML", "CSS", "JAVASCRIPT"];

const LIBRARY = ["REACT", "DATE-FNS"];

const TOOLS = [
  "JIRA",
  "CONFLUENCE",
  "GIT",
  "GITHUB",
  "VISUAL STUDIO CODE",
  "STORYBOOK",
  "JENKINS",
  "LUCID CHART",
  "ZOOM",
];

const Skills = () => {
  return (
    <div className="skills">
      <div className="goals">
        <h3>"ABOUT ME"</h3>
        <p><b>I value being a self-starter to achieve the goals I have set for myself.</b>  My interest for a career in nursing started to disintegrate as I became
        more interested in Front-end development. To immerse myself further, I
        began exploring alternative ways of learning Front-end development
        through Udemy, Google, YouTube, and creating projects on GitHub pages.
        Through my own curiosity I've found Front-end development to be an
        exciting and challenging field to pursue.</p>
        <a href="https://docs.google.com/document/d/1vRr4s_zblTTOWCzBR717XlSrN4dA6THf_cSYoQf9WFQ/edit">Download Resume</a>
      </div>
      <div className="skillsContainer">
        <div className="languages">
          <ul>
            <h3>"LANGUAGES"</h3>
            {SKILLS.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="libraries">
          <ul>
            <h3>"LIBRARIES"</h3>
            {LIBRARY.map((library, index) => (
              <li key={index}>{library}</li>
            ))}
          </ul>
        </div>

        <div className="tools">
          <ul>
            <h3>"TOOLS"</h3>
            {TOOLS.map((tools, index) => (
              <li key={index}>{tools}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
