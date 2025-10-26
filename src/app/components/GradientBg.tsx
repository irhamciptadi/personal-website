"use client";
import { motion } from "framer-motion";

export default function GradientBg() {
  // Optimized animations with better performance
  const createBlobAnimation = (index: number) => ({
    x: [0, 50 + index * 20, 0],
    y: [0, -50 - index * 15, 0],
    scale: [1, 1.1 + index * 0.05, 1],
  });

  const createBlobTransition = (index: number) => ({
    duration: 15 + index * 3,
    repeat: Infinity,
    ease: "easeInOut" as const,
    repeatType: "reverse" as const,
  });

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden will-change-transform">
      <motion.div
        className="absolute -top-4 -left-4 w-72 h-72 bg-linear-to-br from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={createBlobAnimation(0)}
        transition={createBlobTransition(0)}
      />
      <motion.div
        className="absolute -top-4 -right-4 w-72 h-72 bg-linear-to-br from-yellow-400 to-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={createBlobAnimation(1)}
        transition={createBlobTransition(1)}
      />
      <motion.div
        className="absolute -bottom-8 left-20 w-72 h-72 bg-linear-to-br from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={createBlobAnimation(2)}
        transition={createBlobTransition(2)}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-72 h-72 bg-linear-to-br from-green-400 to-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={createBlobAnimation(3)}
        transition={createBlobTransition(3)}
      />
    </div>
  );
}
