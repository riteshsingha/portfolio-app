import { useEffect, useRef } from 'react';
import { useScroll, useSpring } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import styles from './BackgroundSpiral.module.css';

const HEX_SCALES = [
  1.000, 0.922, 0.850, 0.784, 0.723, 0.666, 0.614, 0.566,
  0.522, 0.481, 0.444, 0.409, 0.377, 0.348, 0.321, 0.296,
  0.273, 0.251, 0.232, 0.214, 0.197, 0.182, 0.168, 0.155,
  0.143, 0.131, 0.121, 0.112, 0.103, 0.095, 0.088, 0.081,
  0.074, 0.069, 0.063, 0.058
];

export function BackgroundSpiral() {
  const { theme } = useTheme();
  const prefersReducedMotion = useReducedMotion();
  const groupRef = useRef(null);

  const { scrollY } = useScroll();
  const smoothScroll = useSpring(scrollY, {
    damping: 28,
    stiffness: 90,
    mass: 0.3
  });

  useEffect(() => {
    if (prefersReducedMotion) return;

    const updateTransform = (currentY) => {
      if (groupRef.current) {
        // 0.08 degrees per pixel scrolled
        // Scroll down -> positive degrees -> clockwise rotation
        // Scroll up -> decreasing degrees -> anti-clockwise rotation
        const angle = currentY * 0.08;
        groupRef.current.setAttribute('transform', `translate(1460, 540) rotate(${angle})`);
      }
    };

    updateTransform(smoothScroll.get());
    const unsubscribe = smoothScroll.on('change', updateTransform);

    return () => unsubscribe();
  }, [smoothScroll, prefersReducedMotion]);

  const isDark = theme === 'dark';

  return (
    <div className={styles.container} aria-hidden="true">
      <svg
        className={styles.svg}
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Ambient Background Glows for Glassmorphic Refraction */}
          <radialGradient id="ambientGlow1Dark" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.38" />
            <stop offset="60%" stopColor="#1e3a8a" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="ambientGlow2Dark" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#581c87" stopOpacity="0.34" />
            <stop offset="65%" stopColor="#3b0764" stopOpacity="0.10" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="ambientGlow3Dark" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#831843" stopOpacity="0.28" />
            <stop offset="70%" stopColor="#500724" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="ambientGlow1Light" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#c7d2fe" stopOpacity="0.60" />
            <stop offset="70%" stopColor="#e0e7ff" stopOpacity="0.20" />
            <stop offset="100%" stopColor="#FAFAFC" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="ambientGlow2Light" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#e9d5ff" stopOpacity="0.55" />
            <stop offset="70%" stopColor="#f3e8ff" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#FAFAFC" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="ambientGlow3Light" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fbcfe8" stopOpacity="0.50" />
            <stop offset="70%" stopColor="#fce7f3" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#FAFAFC" stopOpacity="0" />
          </radialGradient>

          {/* Dark Mode Gradients */}
          <linearGradient id="vortexGradDark" x1="-680" y1="580" x2="680" y2="-580" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#2B3E8C" />
            <stop offset="48%" stopColor="#562E7A" />
            <stop offset="100%" stopColor="#A82055" />
          </linearGradient>

          <radialGradient id="fadeGradDark" cx="0" cy="0" r="680" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="42%" stopColor="#FFFFFF" />
            <stop offset="72%" stopColor="#666666" />
            <stop offset="92%" stopColor="#141414" />
            <stop offset="100%" stopColor="#000000" />
          </radialGradient>

          <mask id="fadeMaskDark" maskUnits="userSpaceOnUse" x="-700" y="-700" width="1400" height="1400">
            <circle cx="0" cy="0" r="680" fill="url(#fadeGradDark)" />
          </mask>

          <polygon
            id="hexDark"
            points="680,0 340,588.9 -340,588.9 -680,0 -340,-588.9 340,-588.9"
            fill="none"
            stroke="url(#vortexGradDark)"
            strokeWidth="2"
            strokeDasharray="2.4 2.4"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />

          {/* Light Mode Gradients */}
          <linearGradient id="vortexGradLight" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#223478" />
            <stop offset="50%" stopColor="#532B73" />
            <stop offset="100%" stopColor="#991F52" />
          </linearGradient>

          <radialGradient id="fadeGradLight" cx="0" cy="0" r="680" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="55%" stopColor="#FFFFFF" />
            <stop offset="82%" stopColor="#555555" />
            <stop offset="100%" stopColor="#000000" />
          </radialGradient>

          <mask id="fadeMaskLight" maskUnits="userSpaceOnUse" x="-700" y="-700" width="1400" height="1400">
            <circle cx="0" cy="0" r="680" fill="url(#fadeGradLight)" />
          </mask>

          <polygon
            id="hexLight"
            points="680,0 340,588.9 -340,588.9 -680,0 -340,-588.9 340,-588.9"
            fill="none"
            stroke="url(#vortexGradLight)"
            strokeWidth="1.8"
            strokeDasharray="2.5 2.2"
            vectorEffect="non-scaling-stroke"
          />
        </defs>

        <rect width="1920" height="1080" fill={isDark ? '#000000' : '#FAFAFC'} />

        {/* Ambient color mesh to give glassmorphism cards rich depth & refraction */}
        <g opacity={isDark ? 0.95 : 0.8} pointerEvents="none">
          <circle cx="320" cy="320" r="540" fill={isDark ? 'url(#ambientGlow1Dark)' : 'url(#ambientGlow1Light)'} />
          <circle cx="880" cy="740" r="580" fill={isDark ? 'url(#ambientGlow2Dark)' : 'url(#ambientGlow2Light)'} />
          <circle cx="460" cy="980" r="500" fill={isDark ? 'url(#ambientGlow3Dark)' : 'url(#ambientGlow3Light)'} />
        </g>

        <g
          ref={groupRef}
          transform="translate(1460, 540)"
          mask={isDark ? 'url(#fadeMaskDark)' : 'url(#fadeMaskLight)'}
          opacity={isDark ? 1 : 0.72}
        >
          {HEX_SCALES.map((scale, i) => (
            <use
              key={i}
              href={isDark ? '#hexDark' : '#hexLight'}
              transform={`rotate(${i * 7}) scale(${scale})`}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
