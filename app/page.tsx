"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaTerminal } from "react-icons/fa";
import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";
import SkillBadge from "@/components/SkillBadge";

const projects = [
  {
    title: "Employee Management System",
    description:
      "A full-stack Employee Management System with Security & Access Control, Comprehensive Employee Management, user authentication and more...\nGet more info on GitHub!",
    image: "/EMS_Image.jpg",
    tags: ["Next.js", "TypeScript", "Firebase", "Material UI", "Tailwind CSS"],
    isGit: true,
    github: "https://github.com/AtharvaBelote/EMS_updated",
  },
  {
    title: "Genzopia Solutions LLP (Live)",
    description:
      "Developed a professional corporate website for Genzopia Solutions LLP to showcase the company’s services, vision, and team with a clean, responsive, and user-friendly design.",
    image: "/Genzopia.png",
    tags: ["React", "Next.js", "Firebase", "Tailwind CSS", "Vite"],
    isGit: false,
    github: "https://genzopia.xyz",
  },
  {
    title: "Multi-Level Python Project Collection (GitHub)",
    description:
      "A curated collection of projects developed across beginner, intermediate, and advanced difficulty levels, showcasing progressive skill development, problem-solving ability, and hands-on experience with real-world use cases.",
    image: "/Python.webp",
    tags: ["Python"],
    isGit: true,
    github: "https://github.com/AtharvaBelote/PythonProject",
  },
];

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "Tailwind CSS",
  "Git",
  "Figma",
  "UI/UX",
  "Basic JAVA",
  "Firebase",
  "REST APIs",
];

export default function Home() {
  return (
    <div className="relative z-20">
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 pt-20"
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Profile Image */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8 inline-block"
            >
              <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary to-secondary animate-glow-blue opacity-30"></div>
                <div className="absolute inset-1 overflow-hidden rounded-xl border border-primary/30 bg-code-bg">
                  <Image
                    src="/MyImage.jpg"
                    alt="Profile"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-4 text-gray-400 text-sm"
            >
              <FaTerminal className="inline mr-2 text-primary" />
              <span className="text-gray-500">developer@portfolio</span>
              <span className="text-gray-600">:</span>
              <span className="text-accent">~</span>
              <span className="text-gray-600">$</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-mono">
              <span className="text-gray-600">{"<"}</span>
              <span className="gradient-text">Atharva C Belote</span>
              <span className="text-gray-600">{" />"}</span>
            </h1>

            <div className="text-xl md:text-2xl mb-8 font-mono">
              <span className="text-gray-500">const</span>{" "}
              <span className="text-secondary">role</span>{" "}
              <span className="text-gray-500">=</span>{" "}
              <span className="text-primary">&quot;Full Stack Developer&quot;</span>
              <span className="text-gray-600">;</span>
            </div>

            <p className="text-base text-gray-400 mb-12 max-w-2xl mx-auto font-mono leading-relaxed">
              <span className="text-gray-600">{"/* "}</span>
              <br />
              Building scalable web applications with clean code architecture.
              <br />
              Passionate about solving complex problems through technology.
              <br />
              <span className="text-gray-600">{" */"}</span>
            </p>

            <div className="flex gap-4 justify-center mb-12">
              <motion.a
                href="#contact"
                className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
              <motion.a
                href="#projects"
                className="px-8 py-3 border border-primary/30 font-semibold rounded-lg hover:bg-primary/10 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
            </div>

            <div className="flex gap-6 justify-center">
              <a
                href="https://github.com/AtharvaBelote"
                target="_blank"
                className="text-3xl text-gray-400 hover:text-primary transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/atharva-c-belote/"
                target="_blank"
                className="text-3xl text-gray-400 hover:text-primary transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:atharvapersonal99@gmail.com"
                className="text-3xl text-gray-400 hover:text-primary transition-colors"
              >
                <FaEnvelope />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center font-mono">
              <span className="text-gray-600">{"<"}</span>
              <span className="gradient-text">About</span>
              <span className="text-gray-600">{" />"}</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="terminal-box p-8 pt-12 rounded-lg">
                <div className="mb-4 flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
                    <div className="w-3 h-3 rounded-full bg-accent/60"></div>
                  </div>
                  <span className="text-gray-500 text-sm ml-2">about.md</span>
                </div>
                <p className="text-gray-300 mb-4 font-mono text-sm leading-relaxed">
                  Passionate Python and web-developer, currently persuing
                  Bachelor of Engineering in Nutan Maharashtra Institute of
                  Engineering and technology, Talegaon Dabhade, Pune.
                </p>
                <p className="text-gray-300 mb-4 font-mono text-sm leading-relaxed">
                  When not coding, I learn about thing I have not known, such as
                  python packages, new updates of any language, look for new
                  design in Figma.
                </p>
                <p className="text-gray-300 font-mono text-sm leading-relaxed">
                  Committed to writing clean, maintainable code that makes a
                  real-world impact.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-6 text-primary font-mono">
                  Skills & Technologies
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <SkillBadge key={index} skill={skill} index={index} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center font-mono">
              <span className="text-gray-600">{"<"}</span>
              <span className="gradient-text">Projects</span>
              <span className="text-gray-600">{" />"}</span>
            </h2>
            <p className="text-center text-gray-500 mb-12 font-mono">
              <span className="text-gray-600">{"// "}</span>Featured work from
              my repository
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="terminal-box p-12 pt-16 text-center rounded-lg"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-mono">
              <span className="gradient-text">Let&apos;s Connect</span>
            </h2>
            <p className="text-lg text-gray-400 mb-8 font-mono">
              <span className="text-gray-600">{"// "}</span>
              Available for freelance projects and collaborations
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:atharvapersonal99@gmail.com"
                className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all inline-block"
              >
                Send Email
              </a>
              <a
                href="https://www.linkedin.com/in/atharva-c-belote/"
                target="_blank"
                className="px-8 py-3 border border-primary/30 font-semibold rounded-lg hover:bg-primary/10 transition-all inline-block"
              >
                {"> "} LINKEDIN
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
