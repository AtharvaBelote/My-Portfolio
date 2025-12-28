"use client";

import { motion } from "framer-motion";

interface SkillBadgeProps {
  skill: string;
  index: number;
}

export default function SkillBadge({ skill, index }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 10px rgba(59, 130, 246, 0.3)",
      }}
      className="px-4 py-2 bg-primary/10 border border-primary/30 text-sm font-mono hover:bg-primary/20 hover:border-primary/50 transition-all cursor-pointer rounded-md text-gray-300"
    >
      {skill}
    </motion.div>
  );
}
