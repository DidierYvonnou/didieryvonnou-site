"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type PageTransitionProps = {
  children: ReactNode;
};

export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}