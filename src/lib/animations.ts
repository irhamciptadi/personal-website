// Animation constants for consistent and optimized animations
export const animations = {
  // Durations (in seconds)
  duration: {
    fast: 0.2,
    normal: 0.4,
    slow: 0.6,
    verySlow: 0.8,
  },

  // Easing functions
  easing: {
    easeOut: [0.0, 0.0, 0.2, 1],
    easeIn: [0.4, 0.0, 1, 1],
    easeInOut: [0.4, 0.0, 0.2, 1],
    spring: { type: "spring", stiffness: 100, damping: 15 },
    bouncy: { type: "spring", stiffness: 400, damping: 10 },
  },

  // Common delay patterns
  delay: {
    staggerChildren: 0.1,
    staggerItems: 0.05,
  },

  // Viewport settings for performance
  viewport: {
    once: true,
    margin: "0px 0px -100px 0px", // Trigger animation earlier
  },

  // Common animation variants
  variants: {
    fadeInUp: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: [0.0, 0.0, 0.2, 1] },
      },
    },
    fadeInLeft: {
      hidden: { opacity: 0, x: -50 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: [0.0, 0.0, 0.2, 1] },
      },
    },
    fadeInRight: {
      hidden: { opacity: 0, x: 50 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: [0.0, 0.0, 0.2, 1] },
      },
    },
    scaleIn: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.4, ease: [0.0, 0.0, 0.2, 1] },
      },
    },
    staggerContainer: {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.1,
        },
      },
    },
  },

  // Hover animations
  hover: {
    lift: { y: -2, transition: { duration: 0.2 } },
    scale: { scale: 1.05, transition: { duration: 0.2 } },
    glow: {
      boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)",
      transition: { duration: 0.2 },
    },
  },

  // Tap animations
  tap: {
    scale: { scale: 0.95 },
  },
};
