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

  // Snappy critically damped spring for instant indicator response
  const springConfig = prefersReducedMotion 
    ? { duration: 0 } 
    : { type: 'spring', damping: 28, stiffness: 350, mass: 0.5 };

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;
          setIsScrolled(currentY > 20);
          
          if (currentY < 80) {
            setActiveSection('home');
          } else if (window.innerHeight + currentY >= document.documentElement.scrollHeight - 50) {
            setActiveSection('contact');
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Zero-reflow section tracking using IntersectionObserver
    const sectionElements = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        if (window.scrollY < 80 || window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
          return;
        }
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          visible.sort((a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top));
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: '-20% 0px -50% 0px',
        threshold: [0, 0.2]
      }
    );

    sectionElements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
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
