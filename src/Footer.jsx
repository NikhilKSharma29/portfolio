import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <motion.div
          className="footer-main"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="footer-logo">
            <span>Nikhil Kumar Sharma</span>
          </div>

          <div className="footer-social">
            <motion.a
              href="#"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiGithub />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiLinkedin />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiTwitter />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiMail />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
