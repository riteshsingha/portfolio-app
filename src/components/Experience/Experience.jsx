import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { experience } from '../../data/portfolio';
import styles from './Experience.module.css';

export function Experience() {
  const prefersReducedMotion = useReducedMotion();

  const easeConfig = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.45, ease: [0.16, 1, 0.3, 1] };

  const snappySpring = prefersReducedMotion
    ? { duration: 0 }
    : { type: 'spring', damping: 25, stiffness: 350, mass: 0.5 };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: easeConfig
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
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUp}
        >
          <span className={styles.sectionLabel}>Experience</span>
          <h2 className={styles.sectionTitle}>Work History</h2>
        </motion.div>

        <motion.div
          className={styles.timeline}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {experience.map((item) => (
            <motion.div
              key={item.id}
              className={styles.timelineItem}
              variants={fadeInUp}
              whileHover={{ x: 4 }}
              transition={snappySpring}
            >
              <div className={styles.timelineHeader}>
                <div className={styles.roleInfo}>
                  <h3 className={styles.role}>{item.role}</h3>
                  <motion.p 
                    className={styles.company}
                    whileHover={{ color: 'var(--color-accent-hover)' }}
                  >
                    {item.company}
                  </motion.p>
                </div>
                <span className={styles.period}>{item.period}</span>
              </div>

              <p className={styles.description}>{item.description}</p>

              {/* Projects */}
              {item.projects && item.projects.map((project, projectIndex) => (
                <div key={projectIndex} className={styles.project}>
                  <h4 className={styles.projectName}>{project.name}</h4>
                  <ul className={styles.achievements}>
                    {project.achievements.map((achievement, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ ...easeConfig, delay: index * 0.03 }}
                      >
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className={styles.technologies}>
                {item.technologies.map((tech) => (
                  <motion.span 
                    key={tech} 
                    className={styles.tech}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={snappySpring}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
