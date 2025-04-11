import React, { useState, useEffect } from "react";
import "./About.css";

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState("skills");
  const [isVisible, setIsVisible] = useState(false);
  const [animatedItems, setAnimatedItems] = useState([]);

  // Simulate intersection observer for animation triggers
  useEffect(() => {
    setIsVisible(true);

    // Stagger animations for list items
    const timer = setTimeout(() => {
      const items = [];
      const totalItems = 5;

      const interval = setInterval(() => {
        if (items.length < totalItems) {
          items.push(items.length);
          setAnimatedItems([...items]);
        } else {
          clearInterval(interval);
        }
      }, 200);

      return () => clearInterval(interval);
    }, 500);

    return () => clearTimeout(timer);
  }, [activeTab]);

  const handleTabChange = (tab) => {
    setIsVisible(false);
    setAnimatedItems([]);
    setTimeout(() => {
      setActiveTab(tab);
      setIsVisible(true);
    }, 300);
  };

  return (
    <section id="about" className="aboutme-section">
      <div
        className={`aboutme-container ${
          isVisible ? "aboutme-visible" : "aboutme-hidden"
        }`}
      >
        {/* Animated Header */}
        <div className="aboutme-header">
          <h2
            className={`aboutme-heading ${
              isVisible ? "aboutme-visible" : "aboutme-hidden"
            }`}
          >
            <span className="aboutme-gradient-text">Who I Am</span>
            <span
              className={`aboutme-underline ${
                isVisible ? "aboutme-scale-in" : ""
              }`}
            ></span>
          </h2>
          <p
            className={`aboutme-intro ${
              isVisible ? "aboutme-visible" : "aboutme-hidden"
            }`}
          >
            I'm a frontend developer with strong skills in{" "}
            <strong>React.js</strong>, <strong>JavaScript</strong>, and modern
            web tech. I focus on building <strong>responsive</strong>,{" "}
            <strong>accessible</strong>, and <strong>interactive UIs</strong>{" "}
            that offer seamless user experiences.
          </p>
        </div>

        {/* Animated Tab Navigation */}
        <div
          className={`aboutme-tab-navigation ${
            isVisible ? "aboutme-visible" : "aboutme-hidden"
          }`}
        >
          <div className="aboutme-tabs">
            {["skills", "education", "personal"].map((tab, index) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`aboutme-tab ${
                  activeTab === tab ? "aboutme-active" : ""
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Animated Content Card */}
        <div
          className={`aboutme-content-card ${
            isVisible ? "aboutme-visible" : "aboutme-hidden"
          }`}
        >
          {activeTab === "skills" && (
            <div className="aboutme-tab-content">
              <h3 className="aboutme-section-title">
                <span className="aboutme-title-indicator"></span>
                <span className="aboutme-gradient-text">
                  Professional Skills
                </span>
              </h3>

              <div className="aboutme-skills-grid">
                {[
                  { skill: "React.js Architecture", level: 90 },
                  { skill: "UI/UX Implementation", level: 85 },
                  { skill: "Responsive Design", level: 95 },
                  { skill: "Agile Development", level: 80 },
                  { skill: "Cloud Deployment", level: 75 },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`aboutme-skill-item ${
                      animatedItems.includes(index)
                        ? "aboutme-visible"
                        : "aboutme-hidden"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="aboutme-skill-header">
                      <span className="aboutme-skill-name">{item.skill}</span>
                      <span className="aboutme-skill-level">{item.level}%</span>
                    </div>
                    <div className="aboutme-progress-bar">
                      <div
                        className="aboutme-progress-fill"
                        style={{
                          width: animatedItems.includes(index)
                            ? `${item.level}%`
                            : "0%",
                          transitionDelay: `${index * 100 + 300}ms`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="aboutme-expertise-section">
                <h4 className="aboutme-subsection-title">Primary Expertise</h4>
                <div className="aboutme-tags-container">
                  {[
                    "React",
                    "JavaScript",
                    "TypeScript",
                    "HTML5/CSS3",
                    "Tailwind CSS",
                    "Git",
                    "Node.js",
                    "Next.js",
                  ].map((tag, index) => (
                    <span
                      key={index}
                      className={`aboutme-tag ${
                        isVisible ? "aboutme-visible" : "aboutme-hidden"
                      }`}
                      style={{ transitionDelay: `${index * 80 + 600}ms` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "education" && (
            <div className="aboutme-tab-content">
              <h3 className="aboutme-section-title">
                <span className="aboutme-title-indicator"></span>
                <span className="aboutme-gradient-text">
                  Academic Qualifications
                </span>
              </h3>

              <div className="aboutme-timeline">
                <div className="aboutme-timeline-track"></div>

                <div
                  className={`aboutme-timeline-item ${
                    isVisible ? "aboutme-visible" : "aboutme-hidden"
                  }`}
                >
                  <div
                    className={`aboutme-timeline-dot ${
                      isVisible ? "aboutme-scale-in" : ""
                    }`}
                  ></div>

                  <div className="aboutme-timeline-content">
                    <div className="aboutme-education-header">
                      <div>
                        <h4 className="aboutme-degree">
                          Bachelor of Computer Applications
                        </h4>
                        <p className="aboutme-institution">
                          Medi-caps University, Indore, MP
                        </p>
                      </div>
                      <span className="aboutme-year-badge">2020-2023</span>
                    </div>
                    <p className="aboutme-education-description">
                      Specialized in Web Technologies and Application
                      Development with coursework in Data Structures,
                      Algorithms, and Database Management Systems.
                    </p>
                  </div>
                </div>

                <div
                  className={`aboutme-timeline-item ${
                    isVisible
                      ? "aboutme-visible aboutme-delay-300"
                      : "aboutme-hidden"
                  }`}
                >
                  <div
                    className={`aboutme-timeline-dot aboutme-secondary ${
                      isVisible ? "aboutme-scale-in aboutme-delay-300" : ""
                    }`}
                  ></div>

                  <div className="aboutme-timeline-content">
                    <div className="aboutme-education-header">
                      <div>
                        <h4 className="aboutme-degree">
                          Professional Certifications
                        </h4>
                        <p className="aboutme-institution">Various Platforms</p>
                      </div>
                      <span className="aboutme-year-badge aboutme-secondary">
                        Ongoing
                      </span>
                    </div>
                    <p className="aboutme-education-description">
                      Continuously enhancing skills through certifications in
                      React, JavaScript, and modern web development practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "personal" && (
            <div className="aboutme-tab-content">
              <h3 className="aboutme-section-title">
                <span className="aboutme-title-indicator"></span>
                <span className="aboutme-gradient-text">About My Approach</span>
              </h3>

              <div
                className={`aboutme-quote-box ${
                  isVisible ? "aboutme-visible" : "aboutme-hidden"
                }`}
              >
                <p className="aboutme-quote">
                  <span className="aboutme-quote-mark aboutme-open">"</span>
                  The best code is not just functional but elegant, readable,
                  and maintainable.
                  <span className="aboutme-quote-mark aboutme-close">"</span>
                </p>
                <p className="aboutme-quote-author">
                  — My Development Philosophy
                </p>
              </div>

              <h4 className="aboutme-subsection-title">Personal Facts</h4>
              <div className="aboutme-facts-grid">
                {[
                  {
                    icon: "🎨",
                    fact: "I sketch UIs in Figma before I write code",
                  },
                  { icon: "💻", fact: "My second language? JavaScript 😄" },
                  {
                    icon: "🧩",
                    fact: "I turn complex problems into clean, readable solutions",
                  },
                  {
                    icon: "🚀",
                    fact: "Long-term goal: Launch my own SaaS product",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`aboutme-fact-card ${
                      animatedItems.includes(index)
                        ? "aboutme-visible"
                        : "aboutme-hidden"
                    }`}
                    style={{ transitionDelay: `${index * 150 + 300}ms` }}
                  >
                    <div className="aboutme-fact-icon">
                      <span>{item.icon}</span>
                    </div>
                    <p className="aboutme-fact-text">{item.fact}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
