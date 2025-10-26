"use client";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

// Dynamically import motion to prevent SSR issues
const DynamicMotion = {
  div: dynamic(() => import("framer-motion").then((mod) => mod.motion.div), {
    ssr: false,
    loading: () => <div />,
  }),
  nav: dynamic(() => import("framer-motion").then((mod) => mod.motion.nav), {
    ssr: false,
    loading: () => <nav />,
  }),
  p: dynamic(() => import("framer-motion").then((mod) => mod.motion.p), {
    ssr: false,
    loading: () => <p />,
  }),
  h1: dynamic(() => import("framer-motion").then((mod) => mod.motion.h1), {
    ssr: false,
    loading: () => <h1 />,
  }),
  h2: dynamic(() => import("framer-motion").then((mod) => mod.motion.h2), {
    ssr: false,
    loading: () => <h2 />,
  }),
  a: dynamic(() => import("framer-motion").then((mod) => mod.motion.a), {
    ssr: false,
    loading: () => <a />,
  }),
  button: dynamic(
    () => import("framer-motion").then((mod) => mod.motion.button),
    {
      ssr: false,
      loading: () => <button />,
    }
  ),
  span: dynamic(() => import("framer-motion").then((mod) => mod.motion.span), {
    ssr: false,
    loading: () => <span />,
  }),
};

// Export safe motion components
export const MotionDiv = DynamicMotion.div;
export const MotionNav = DynamicMotion.nav;
export const MotionP = DynamicMotion.p;
export const MotionH1 = DynamicMotion.h1;
export const MotionH2 = DynamicMotion.h2;
export const MotionA = DynamicMotion.a;
export const MotionButton = DynamicMotion.button;
export const MotionSpan = DynamicMotion.span;

// For backward compatibility, also export original motion
export { motion };
