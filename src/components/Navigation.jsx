// src/components/Navigation.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import "./navigation.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Website Name */}
        <Link to="/" className="logo">
          <h1>MørkFremtid</h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              <span>OM</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/benefits" className="nav-link">
              <span>FORDELE</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/risks" className="nav-link">
            <span>RISICI</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/discover" className="nav-link">
              <span>OPTAG MERE</span>
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="menu-button" onClick={toggleMenu}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mobile-menu"
          >
            <ul className="mobile-menu-list">
              <li className="mobile-menu-item" onClick={toggleMenu}>
                <Link to="/">Hjem</Link>
              </li>
              <li className="mobile-menu-item" onClick={toggleMenu}>
                <Link to="/about">Om</Link>
              </li>
              <li className="mobile-menu-item" onClick={toggleMenu}>
                <Link to="/benefits">Fordele</Link>
              </li>
              <li className="mobile-menu-item" onClick={toggleMenu}>
                <Link to="/risks">Risici</Link>
              </li>
              <li className="mobile-menu-item" onClick={toggleMenu}>
                <Link to="/discover">Optag Mere</Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
