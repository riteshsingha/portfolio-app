# Ritesh Singha - Portfolio

A modern, fluid portfolio built with **React + Framer Motion**, implementing Apple's design principles from WWDC "Designing Fluid Interfaces".

## ✨ Design Principles Implemented

This portfolio implements Apple's fluid interface design language:

### 1. Spring Physics
- All animations use physics-based springs (damping + stiffness)
- No fixed-duration animations — springs settle naturally
- Velocity-aware transitions that feel physical

### 2. Interruptibility  
- Every animation can be interrupted and redirected mid-flight
- Framer Motion's spring system handles re-targeting automatically
- No "locked out" states during transitions

### 3. Instant Feedback
- Buttons respond on `pointerdown`, not on click release
- Scale animations provide immediate tactile feedback
- Hover states hint at interactivity

### 4. Translucent Materials
- Navbar uses `backdrop-filter: blur()` with content scrolling underneath
- Floating action buttons feature frosted glass effect
- Mobile menu uses translucent overlay

### 5. Typography (Optical Sizing)
- Size-specific letter-spacing (tighter on large text, normal on body)
- Size-specific line-height (tighter on headlines, looser on body)
- System font stack respects platform defaults

### 6. Accessibility
- `prefers-reduced-motion` — springs become instant cross-fades
- `prefers-reduced-transparency` — materials become solid
- `prefers-contrast: more` — stronger borders and contrast
- Full keyboard navigation support
- ARIA labels on all interactive elements

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Button/          # Fluid button with tap feedback
│   ├── Card/            # Elevated cards with hover depth
│   ├── Navbar/          # Translucent sticky navigation
│   ├── Hero/            # Parallax hero with staggered entrance
│   ├── About/           # Image with hover effect
│   ├── Skills/          # Animated skill bars (spring-based)
│   ├── Contact/         # Form with focus states
│   ├── Footer/          # Simple footer
│   └── FloatingActions/ # Theme toggle + scroll-to-top FABs
├── hooks/
│   ├── useReducedMotion.js  # Detect reduced motion preference
│   ├── useTheme.js          # Dark/light mode with persistence
│   └── useScrollProgress.js # Track scroll position
├── utils/
│   └── spring.js        # Apple's spring configurations
├── styles/
│   └── index.css        # CSS variables & global styles
├── App.jsx              # Main app component
└── main.jsx             # Entry point
```

## 🎨 Spring Configurations

Based on Apple's WWDC talk, the app uses these spring presets:

| Use Case | Damping | Stiffness | When to Use |
|----------|---------|-----------|-------------|
| Default UI | 30 | 300 | Most interactions |
| Snappy | 35 | 400 | Quick responses, button taps |
| Bouncy | 20 | 300 | After momentum gestures |
| Slow | 30 | 200 | Large movements, sheets |
| Gentle | 40 | 200 | Subtle hovers |

## 🔧 Customization

### Theme Colors
Edit CSS variables in `src/styles/index.css`:

```css
:root {
  --color-accent: #0071e3;        /* Apple blue */
  --color-bg-primary: #ffffff;
  --color-text-primary: #1d1d1f;
  /* ... */
}

[data-theme="dark"] {
  --color-accent: #2997ff;
  --color-bg-primary: #000000;
  /* ... */
}
```

### Personal Information
Update your info in:
- `src/components/Hero/Hero.jsx` — Name, tagline
- `src/components/About/About.jsx` — Bio, experience
- `src/components/Skills/Skills.jsx` — Skill list
- `src/components/Contact/Contact.jsx` — Contact details

### Images
Place your images in `public/images/`:
- `dev.jpg` — Your profile photo

## 📱 Responsive Breakpoints

- **Desktop**: 1024px+
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

## 🛠 Tech Stack

- **React 18** — UI framework
- **Framer Motion 11** — Physics-based animations
- **Vite** — Build tool
- **CSS Modules** — Scoped styling

## 📖 Resources

- [Designing Fluid Interfaces (WWDC 2018)](https://developer.apple.com/videos/play/wwdc2018/803/)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)

## 📄 License

MIT License — feel free to use this as a template for your own portfolio.

---

Built with ❤️ following Apple's design principles.
