import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { skills } from '../../data/portfolio';
import styles from './Skills.module.css';

export function Skills() {
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
        staggerChildren: prefersReducedMotion ? 0 : 0.02
      }
    }
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: springConfig
    }
  };

  const cmsAndLanguages = [
    ...(skills.cmsPlatform || []),
    ...(skills.languages || [])
  ];

  const frameworksAndApis = [
    ...(skills.aemFrameworks || []),
    ...(skills.apisAndHeadless || []),
    ...(skills.buildAndDevOps || [])
  ];

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
        >
          <span className={styles.sectionLabel}>Skills</span>
          <h2 className={styles.sectionTitle}>Technologies</h2>
        </motion.div>

        {cmsAndLanguages.length > 0 && (
          <motion.div
            className={styles.skillSection}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
          >
            <motion.h3 className={styles.skillGroupTitle} variants={fadeInUp}>
              CMS Platform & Languages
            </motion.h3>
            
            <motion.div className={styles.tagCloud} variants={staggerContainer}>
              {cmsAndLanguages.map((skill) => (
                <motion.span
                  key={skill}
                  className={styles.skillTag}
                  variants={tagVariants}
                  whileHover={{ scale: 1.08, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  transition={springConfig}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        )}

        {frameworksAndApis.length > 0 && (
          <motion.div
            className={styles.skillSection}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
          >
            <motion.h3 className={styles.skillGroupTitle} variants={fadeInUp}>
              Frameworks, APIs & DevOps
            </motion.h3>
            
            <motion.div className={styles.tagCloud} variants={staggerContainer}>
              {frameworksAndApis.map((skill) => (
                <motion.span
                  key={skill}
                  className={styles.skillTag}
                  variants={tagVariants}
                  whileHover={{ scale: 1.08, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  transition={springConfig}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        )}

        {skills.tools && skills.tools.length > 0 && (
          <motion.div
            className={styles.skillSection}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
          >
            <motion.h3 className={styles.skillGroupTitle} variants={fadeInUp}>
              Development Tools
            </motion.h3>
            
            <motion.div className={styles.tagCloud} variants={staggerContainer}>
              {skills.tools.map((tool) => (
                <motion.span
                  key={tool}
                  className={styles.skillTag}
                  variants={tagVariants}
                  whileHover={{ scale: 1.08, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  transition={springConfig}
                >
                  {tool}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
