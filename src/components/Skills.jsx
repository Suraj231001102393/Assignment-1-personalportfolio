import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaGitAlt,
  FaDatabase
} from "react-icons/fa";

import { SiCplusplus } from "react-icons/si";

function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "Python", icon: <FaPython /> },
    { name: "C++", icon: <SiCplusplus /> },
    { name: "SQL", icon: <FaDatabase /> },
    { name: "Git", icon: <FaGitAlt /> }
  ];

  return (
    <section id="skills" className="section">
      <div className="section-title">
        <p>WHAT I KNOW</p>
        <h2>Technical Skills</h2>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">
              {skill.icon}
            </div>

            <h3>{skill.name}</h3>

            <span>0{index + 1}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;