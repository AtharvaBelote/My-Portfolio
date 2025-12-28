"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLink } from "react-icons/fa";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  isGit: boolean;
  github: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const code = () => {
  return (
    <span>View Code</span>
  )
}

const link = () => {
  return (
    <span>View Site</span>
  )
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="terminal-box overflow-hidden group rounded-lg"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-code-bg via-code-bg/50 to-transparent"></div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 font-mono text-primary">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-4 text-sm leading-relaxed whitespace-pre-line">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-primary/10 border border-primary/30 text-primary text-xs font-mono rounded hover:bg-primary/20 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4 font-mono">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors text-sm"
          >
            {project.isGit ? <FaGithub /> : <FaLink />}
            {project.isGit ? code() : link()}
          </a>
        </div>
      </div>
    </motion.div>
  );
}
