"use client";

import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(8px)",
  },

  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

type Props = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

export default function FadeUp({ children, delay = 0, className }: Props) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}