import { useState, useEffect, useRef } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const navRef = useRef(null);

  // Navigation structure with logical grouping
  const navItems = [
    { id: "home", label: "Home" },
    {
      id: "work",
      label: "My Work",
      subItems: [
        { id: "projects", label: "Projects" },
        { id: "case-studies", label: "Case Studies" },
      ],
    },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setDropdownOpen(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Track scroll position for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section.id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (id) => {
    setDropdownOpen(dropdownOpen === id ? null : id);
  };

  return (
    <nav className="navbar" ref={navRef}>
      <div className="nav-container">
        {/* Logo with semantic link */}
        <a
          href="#home"
          className="logo"
          onClick={() => setActiveSection("home")}
        >
          <motion.span className="logo-text" whileHover={{ scale: 1.05 }}>
            Portfolio
          </motion.span>
        </a>

        {/* Desktop Navigation */}
        <ul className="nav-menu">
          {navItems.map((item) => (
            <li key={item.id} className="nav-item">
              {item.subItems ? (
                <div className="dropdown-container">
                  <button
                    className={`nav-link ${
                      activeSection.startsWith(item.id) ? "active" : ""
                    }`}
                    onClick={() => toggleDropdown(item.id)}
                    aria-expanded={dropdownOpen === item.id}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <FiChevronDown
                      className={`dropdown-icon ${
                        dropdownOpen === item.id ? "open" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {dropdownOpen === item.id && (
                      <motion.ul
                        className="dropdown-menu"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.subItems.map((subItem) => (
                          <li key={subItem.id}>
                            <a
                              href={`#${subItem.id}`}
                              className={`dropdown-link ${
                                activeSection === subItem.id ? "active" : ""
                              }`}
                              onClick={() => {
                                setActiveSection(subItem.id);
                                setDropdownOpen(null);
                              }}
                            >
                              {subItem.label}
                            </a>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <a
                  href={`#${item.id}`}
                  className={`nav-link ${
                    activeSection === item.id ? "active" : ""
                  }`}
                  onClick={() => setActiveSection(item.id)}
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Navigation Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <ul className="mobile-nav-list">
              {navItems.map((item) => (
                <li key={item.id} className="mobile-nav-item">
                  {item.subItems ? (
                    <>
                      <button
                        className="mobile-nav-link"
                        onClick={() => toggleDropdown(`mobile-${item.id}`)}
                      >
                        {item.label}
                        <FiChevronDown
                          className={`dropdown-icon ${
                            dropdownOpen === `mobile-${item.id}` ? "open" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {dropdownOpen === `mobile-${item.id}` && (
                          <motion.ul
                            className="mobile-dropdown"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                          >
                            {item.subItems.map((subItem) => (
                              <li key={subItem.id}>
                                <a
                                  href={`#${subItem.id}`}
                                  className={`mobile-dropdown-link ${
                                    activeSection === subItem.id ? "active" : ""
                                  }`}
                                  onClick={() => {
                                    setActiveSection(subItem.id);
                                    setMobileOpen(false);
                                  }}
                                >
                                  {subItem.label}
                                </a>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <a
                      href={`#${item.id}`}
                      className={`mobile-nav-link ${
                        activeSection === item.id ? "active" : ""
                      }`}
                      onClick={() => {
                        setActiveSection(item.id);
                        setMobileOpen(false);
                      }}
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
