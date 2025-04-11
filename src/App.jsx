import { useState } from "react";
import SphereAnimation from "./SphereAnimation";
import "./App.css";
import { motion } from "framer-motion";

import { FiLayout, FiEye } from "react-icons/fi";
import { FaReact, FaJs, FaGitAlt, FaPaperPlane } from "react-icons/fa";
import { SiTypescript, SiCss3, SiTestinglibrary } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import Contact from "./Contact";
import Footer from "./Footer";
import CursorAnimation from "./CursorAnimation";

import TypingText from "./Animation";
import SplashCursor from "./crsr";
import AboutMe from "./About";
function App() {
  const [activeSection, setActiveSection] = useState("home");
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description:
        "A full-featured online store with cart functionality, product filtering, and secure checkout.",
      tags: ["Html", "CSS", "Javascript"],
      imageUrl: "/src/Images/jsPortfolio.png",
    },
    {
      id: 2,
      title: "Chat-Application",
      description:
        "Kanban-style productivity app with drag-and-drop functionality and team collaboration.",
      tags: [
        "React.js",
        "Node.js",
        "Tailwind CSS",
        "Express.js",
        "MongoDB",
        "Socket.IO",
      ],
      imageUrl: "/src/Images/chatapp.png",
    },
    {
      id: 3,
      title: "Online Job Portal",
      description:
        "Real-time weather forecasting with interactive maps and historical data visualization.",
      tags: ["React.js", "Node.js", "Tailwind CSS", "Express.js", "MongoDB"],
      imageUrl: "/src/Images/jobportal.png",
    },
  ];
  const skillsData = [
    {
      category: "Frontend",
      skills: [
        { name: "React", icon: <FaReact />, color: "#61DAFB" },
        { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
        { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
        { name: "CSS/SCSS", icon: <SiCss3 />, color: "#2965F1" },
      ],
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
        { name: "RESTful APIs", icon: <TbApi />, color: "#6DB33F" },
        { name: "Responsive Design", icon: <FiLayout />, color: "#43B1E5" },
        { name: "Testing", icon: <SiTestinglibrary />, color: "#E535AB" },
      ],
    },
  ];

  return (
    <div className="portfolio-app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">
          <h1>Portfolio</h1>
        </div>
        <ul className="nav-links">
          <li>
            <a
              href="#home"
              onClick={() => setActiveSection("home")}
              className={activeSection === "home" ? "active" : ""}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={() => setActiveSection("about")}
              className={activeSection === "about" ? "active" : ""}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={() => setActiveSection("skills")}
              className={activeSection === "skills" ? "active" : ""}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={() => setActiveSection("projects")}
              className={activeSection === "projects" ? "active" : ""}
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              onClick={() => setActiveSection("contact")}
              className={activeSection === "contact" ? "active" : ""}
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="./src/Images/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setActiveSection("resume")}
              className={activeSection === "resume" ? "active" : ""}
            >
              My resume
            </a>
          </li>
        </ul>
      </nav>

      <div className="sphere-container">
        <SphereAnimation />
      </div>
      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <h1>
            Hi, I'm{" "}
            <span className="highlight-box">
              <span className="highlight-word">Nikhil</span>{" "}
              <span className="highlight-word">Kumar</span>{" "}
              <span className="highlight-word">Sharma</span>
            </span>
          </h1>
          <h2>
            <TypingText
              phrases={["Web Developer", "UI Designer", "React Developer"]}
            />
          </h2>
          <p>I build modern, responsive web applications with React</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn primary-btn">
              View My Work
            </a>
            <a href="#contact" className="btn secondary-btn">
              Contact Me
            </a>
          </div>
        </div>
        {/* <CursorAnimation /> */}
      </section>
      <AboutMe />
      <section id="skills" className="skills-section">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h2>

        <div className="skills-container">
          {skillsData.map((category, catIndex) => (
            <motion.div
              key={category.category}
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <h3>{category.category}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                  >
                    <div
                      className="skill-icon"
                      style={{
                        color: skill.color,
                        borderColor: skill.color,
                      }}
                    >
                      {skill.icon}
                    </div>
                    <p>{skill.name}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="section-header">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Projects
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Each project is a unique piece of development
          </motion.p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="project-image-container">
                {/* Replace accentColor with image */}
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="project-image"
                  onError={(e) => {
                    e.target.src = "/default-project.jpg"; // Fallback image
                  }}
                />
                <div className="project-overlay">
                  <button className="view-project-btn">
                    <FiEye className="icon" />
                    Quick View
                  </button>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Skills Section */}

      {/* Contact Section */}
      <Contact />
      {/* Footer */}
      <Footer />
      <CursorAnimation />
    </div>
  );
}

export default App;
