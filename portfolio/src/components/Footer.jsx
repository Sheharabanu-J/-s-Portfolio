import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { SiReact } from 'react-icons/si';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-[rgba(56, 189, 248, 0.08)] overflow-hidden">
      <div
        className="gradient-orb w-64 h-64 bg-[rgba(56, 189, 248, 0.05)] bottom-0 left-1/2"
        style={{ position: 'absolute', transform: 'translateX(-50%)' }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="font-heading font-bold text-xl mb-1">
              <span className="gradient-text-blue">Shehara's Portfolio</span>
            </div>
            <p className="text-xs text-[rgba(226, 232, 240, 0.35)] font-mono">
              © {year} Shehara Banu J · All rights reserved
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {[
              { icon: FiGithub, href: 'https://github.com/Sheharabanu-J', label: 'GitHub' },
              { icon: FiLinkedin, href: 'https://linkedin.com/', label: 'LinkedIn' },
              { icon: FiMail, href: 'mailto:jamaljamal6330@gmail.com', label: 'Email' },
            ].map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target={s.label !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-[rgba(226, 232, 240, 0.5)] hover:text-[#38BDF8] transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <s.icon size={16} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
