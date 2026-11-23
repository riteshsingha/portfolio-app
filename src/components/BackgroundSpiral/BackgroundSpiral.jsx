import { useTheme } from '../../context/ThemeContext';
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
          {/* Dark Mode Gradient & Outer Helix Fade Mask */}
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

          <mask id="fadeMaskDark" maskUnits="userSpaceOnUse" x="-750" y="-750" width="1500" height="1500">
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

          {/* Light Mode Gradient & Outer Helix Fade Mask */}
          <linearGradient id="vortexGradLight" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#223478" />
            <stop offset="50%" stopColor="#532B73" />
            <stop offset="100%" stopColor="#991F52" />
          </linearGradient>

          <radialGradient id="fadeGradLight" cx="0" cy="0" r="680" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="48%" stopColor="#FFFFFF" />
            <stop offset="78%" stopColor="#666666" />
            <stop offset="94%" stopColor="#141414" />
            <stop offset="100%" stopColor="#000000" />
          </radialGradient>

          <mask id="fadeMaskLight" maskUnits="userSpaceOnUse" x="-750" y="-750" width="1500" height="1500">
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

        <g 
          transform="translate(1460, 540)"
          mask={isDark ? 'url(#fadeMaskDark)' : 'url(#fadeMaskLight)'}
        >
          <g
            className={styles.spiralGroup}
            opacity={isDark ? 1 : 0.78}
          >
            {HEX_SCALES.map((scale, i) => (
              <use
                key={i}
                href={isDark ? '#hexDark' : '#hexLight'}
                transform={`rotate(${i * 7}) scale(${scale})`}
              />
            ))}
          </g>
        </g>
      </svg>
    </div>
  );
}
