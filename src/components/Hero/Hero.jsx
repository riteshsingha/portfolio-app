import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { personalInfo } from '../../data/portfolio';
import styles from './Hero.module.css';

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  
  const springConfig = prefersReducedMotion 
    ? { duration: 0 } 
    : { type: 'spring', damping: 25, stiffness: 120 };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: springConfig
    }
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Photo with hover effect */}
          <motion.div 
            className={styles.photoWrapper} 
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={springConfig}
          >
            <img 
              src={personalInfo.profileImage || `${import.meta.env.BASE_URL}images/dispaly_picture.png`} 
              alt={personalInfo.name}
              className={styles.photo}
            />
          </motion.div>

          <motion.a 
            href={personalInfo.certificationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.badge} 
            variants={itemVariants}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            transition={springConfig}
            title="Verify Adobe Certified Expert Credential"
          >
            <span className={styles.badgeDot} />
            <span>{personalInfo.certificationHighlight}</span>
            <svg 
              className={styles.badgeArrow} 
              width="12" 
              height="12" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </motion.a>

          <motion.h1 className={styles.title} variants={itemVariants}>
            {personalInfo.name}
          </motion.h1>

          <motion.h2 className={styles.subtitle} variants={itemVariants}>
            {personalInfo.title}
          </motion.h2>

          <motion.p className={styles.tagline} variants={itemVariants}>
            {personalInfo.tagline}
          </motion.p>

          <motion.div className={styles.actions} variants={itemVariants}>
            <motion.a
              href="#contact"
              className={styles.primaryBtn}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={springConfig}
            >
              Get in Touch
              <motion.svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </motion.svg>
            </motion.a>

            <motion.a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryBtn}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={springConfig}
            >
              Download Resume
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div className={styles.socialLinks} variants={itemVariants}>
            {personalInfo.social.github && (
              <motion.a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={springConfig}
                aria-label="GitHub"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </motion.a>
            )}

            {personalInfo.social.linkedin && (
              <motion.a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={springConfig}
                aria-label="LinkedIn"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </motion.a>
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        whileHover={{ y: 5 }}
      >
        <span>Scroll</span>
        <motion.div 
          className={styles.scrollLine}
          animate={prefersReducedMotion ? {} : { 
            scaleY: [0, 1, 0],
            originY: 0
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      </motion.div>
    </section>
  );
}
