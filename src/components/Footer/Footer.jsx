import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { personalInfo } from '../../data/portfolio';
import styles from './Footer.module.css';

export function Footer() {
  const prefersReducedMotion = useReducedMotion();
  
  const springConfig = prefersReducedMotion
    ? { duration: 0 }
    : { type: 'spring', damping: 25, stiffness: 350, mass: 0.5 };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>
          Designed & Built by {personalInfo.name} - © {new Date().getFullYear()}
        </p>
        
        <motion.button
          className={styles.backToTop}
          onClick={() => scrollToSection('home')}
          whileHover={{ y: -5, scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={springConfig}
          aria-label="Back to top"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="12" y1="19" x2="12" y2="5" />
            <polyline points="5,12 12,5 19,12" />
          </svg>
        </motion.button>
      </div>
    </footer>
  );
}
