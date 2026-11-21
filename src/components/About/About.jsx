import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { aboutContent, certifications, awards } from '../../data/portfolio';
import styles from './About.module.css';

export function About() {
  const prefersReducedMotion = useReducedMotion();

  const springConfig = prefersReducedMotion
    ? { duration: 0 }
    : { type: 'spring', damping: 25, stiffness: 120 };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: springConfig
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.08
      }
    }
  };

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
        >
          <span className={styles.sectionLabel}>About</span>
          <h2 className={styles.sectionTitle}>Background</h2>
        </motion.div>

        <motion.div
          className={styles.content}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
        >
          <motion.p className={styles.summary} variants={fadeInUp}>
            {aboutContent.summary}
          </motion.p>

          <motion.div className={styles.highlights} variants={staggerContainer}>
            {aboutContent.highlights.map((highlight, index) => (
              <motion.div
                key={index}
                className={styles.highlightItem}
                variants={fadeInUp}
                whileHover={{ x: 8 }}
                transition={springConfig}
              >
                <span className={styles.checkIcon}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20,6 9,17 4,12" />
                  </svg>
                </span>
                <span>{highlight}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Certifications & Awards */}
        <motion.div
          className={styles.credentialsGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
        >
          {/* Certifications */}
          <motion.div className={styles.credentialSection} variants={fadeInUp}>
            <h3 className={styles.credentialTitle}>Certifications</h3>
            <div className={styles.credentialList}>
              {certifications.map((cert, index) => {
                const ItemComponent = cert.url ? motion.a : motion.div;
                const linkProps = cert.url ? {
                  href: cert.url,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  title: `Verify ${cert.name} Credential`
                } : {};

                return (
                  <ItemComponent 
                    key={index} 
                    className={styles.credentialItem}
                    whileHover={{ scale: 1.02, x: 4 }}
                    transition={springConfig}
                    {...linkProps}
                  >
                    <div className={styles.credentialIcon}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="8" r="6" />
                        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                      </svg>
                    </div>
                    <div className={styles.credentialContent}>
                      <span className={styles.credentialName}>
                        {cert.name}
                        {cert.url && (
                          <svg 
                            style={{ marginLeft: '6px', verticalAlign: 'middle', opacity: 0.6 }} 
                            width="12" 
                            height="12" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2"
                          >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                          </svg>
                        )}
                      </span>
                      <span className={styles.credentialDetail}>{cert.detail}</span>
                      <span className={styles.credentialYear}>{cert.year}</span>
                    </div>
                  </ItemComponent>
                );
              })}
            </div>
          </motion.div>

          {/* Awards */}
          <motion.div className={styles.credentialSection} variants={fadeInUp}>
            <h3 className={styles.credentialTitle}>Awards</h3>
            <div className={styles.credentialList}>
              {awards.map((award, index) => (
                <motion.div 
                  key={index} 
                  className={styles.credentialItem}
                  whileHover={{ scale: 1.02, x: 4 }}
                  transition={springConfig}
                >
                  <div className={styles.credentialIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26 12,2" />
                    </svg>
                  </div>
                  <div className={styles.credentialContent}>
                    <span className={styles.credentialName}>{award.title}</span>
                    <span className={styles.credentialDetail}>{award.summary}</span>
                    <span className={styles.credentialYear}>{award.year}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
