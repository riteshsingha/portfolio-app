import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { navLinks } from '../../data/portfolio';
import styles from './Navbar.module.css';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const prefersReducedMotion = useReducedMotion();

  // Apple-style critically damped spring
  const springConfig = prefersReducedMotion 
    ? { duration: 0 } 
    : { type: 'spring', damping: 25, stiffness: 120 };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}
        initial={{ y: -48 }}
        animate={{ y: 0 }}
        transition={springConfig}
      >
        <div className={styles.container}>
          <motion.a 
            href="#home" 
            className={styles.logo}
            whileTap={{ scale: 0.97 }}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
          >
            Ritesh<span className={styles.logoDot}>.</span>
          </motion.a>

          <ul className={styles.navLinks}>
            {navLinks.map((link) => (
              <li key={link.id}>
                <motion.button
                  className={`${styles.navLink} ${activeSection === link.id ? styles.active : ''}`}
                  onClick={() => scrollToSection(link.id)}
                  whileTap={{ scale: 0.97 }}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <motion.div 
                      className={styles.activeIndicator}
                      layoutId="activeSection"
                      transition={springConfig}
                    />
                  )}
                </motion.button>
              </li>
            ))}
          </ul>

          <div className={styles.actions}>
            <motion.button
              className={styles.themeToggle}
              onClick={toggleTheme}
              whileTap={{ scale: 0.9 }}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              )}
            </motion.button>

            <motion.button
              className={styles.mobileMenuBtn}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              <span className={`${styles.hamburger} ${isMobileMenuOpen ? styles.open : ''}`} />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={springConfig}
          >
            <ul className={styles.mobileNavLinks}>
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ ...springConfig, delay: index * 0.03 }}
                >
                  <button
                    className={`${styles.mobileNavLink} ${activeSection === link.id ? styles.active : ''}`}
                    onClick={() => scrollToSection(link.id)}
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
