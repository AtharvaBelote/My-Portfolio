'use client'

import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-4 terminal-box mt-20 rounded-t-lg">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 font-mono">
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <FaCode className="text-primary" />
            <span>Built by</span>{' '}
            <span className="text-primary">Atharva Belote</span>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/AtharvaBelote"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors text-xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/atharva-c-belote/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors text-xl"
            >
              <FaLinkedin />
            </a>
          </div>

          <div className="text-gray-500 text-sm font-mono">
            <span className="text-gray-600">{'// '}</span>v1.0.0
          </div>
        </div>
      </div>
    </footer>
  )
}
