import { motion, useScroll, useSpring } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import styles from './ScrollProgress.module.css';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const prefersReducedMotion = useReducedMotion();
  
  // Apple-style smooth spring for scroll progress
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <div className={styles.progressBar}>
      <motion.div
        className={styles.progress}
        style={{ scaleX }}
      />
    </div>
  );
}
