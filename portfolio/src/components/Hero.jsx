import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  SiHtml5, SiBootstrap, SiJavascript, SiReact,
  SiNodedotjs, SiExpress, SiSqlite
} from 'react-icons/si';
import { FaCss3Alt as SiCss3 } from 'react-icons/fa';
import profileImg from '../assets/Portfolio.jpeg';


const techBadges = [
  { icon: SiHtml5, label: 'HTML', color: '#38BDF8' },
  { icon: SiCss3, label: 'CSS', color: '#0EA5E9' },
  { icon: SiBootstrap, label: 'Bootstrap', color: '#94A3B8' },
  { icon: SiJavascript, label: 'JavaScript', color: '#E2E8F0' },
  { icon: SiReact, label: 'React', color: '#38BDF8' },
  { icon: SiNodedotjs, label: 'Node.js', color: '#0EA5E9' },
  { icon: SiExpress, label: 'Express', color: '#ffffff' },
  { icon: SiSqlite, label: 'SQLite', color: '#94A3B8' },
];

const floatingIcons = [
  { icon: SiReact, color: '#38BDF8', cls: 'float-1', style: { top: '10%', left: '8%', fontSize: 38 } },
  { icon: SiNodedotjs, color: '#0EA5E9', cls: 'float-2', style: { top: '20%', right: '6%', fontSize: 34 } },
  { icon: SiJavascript, color: '#E2E8F0', cls: 'float-3', style: { bottom: '25%', left: '5%', fontSize: 30 } },
  { icon: SiHtml5, color: '#38BDF8', cls: 'float-4', style: { bottom: '15%', right: '10%', fontSize: 32 } },
  { icon: SiCss3, color: '#0EA5E9', cls: 'float-1', style: { top: '55%', left: '3%', fontSize: 28 } },
];

const useTypingEffect = (texts, speed = 80, pause = 1800) => {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIndex];
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (charIndex < current.length) {
          setDisplayText(current.slice(0, charIndex + 1));
          setCharIndex(c => c + 1);
        } else {
          setTimeout(() => setDeleting(true), pause);
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(current.slice(0, charIndex - 1));
          setCharIndex(c => c - 1);
        } else {
          setDeleting(false);
          setTextIndex(i => (i + 1) % texts.length);
        }
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, textIndex, texts, speed, pause]);

  return displayText;
};

export default function Hero() {
  const heroRef = useRef(null);
  const roles = [
    'Full Stack Developer (MERN)',
    'React & Node.js Engineer',
    'Data Science Enthusiast',
    'AI Explorer',
  ];
  const typedRole = useTypingEffect(roles);

  // Mouse spotlight effect
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const handleMouseMove = (e) => {
      const rect = hero.getBoundingClientRect();
      hero.style.setProperty('--x', `${e.clientX - rect.left}px`);
      hero.style.setProperty('--y', `${e.clientY - rect.top}px`);
    };
    hero.addEventListener('mousemove', handleMouseMove);
    return () => hero.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden glow-spotlight"
      style={{
        background:
          'radial-gradient(ellipse at 20% 50%, rgba(56, 189, 248, 0.12) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(56, 189, 248, 0.06) 0%, transparent 50%), linear-gradient(135deg, #0A0F1C 0%, #0f172a 50%, #0A0F1C 100%)',
      }}
    >
      {/* Background orbs */}
      <div className="gradient-orb w-96 h-96 bg-[rgba(56, 189, 248, 0.12)] top-[-10%] left-[-5%]" style={{ position: 'absolute' }} />
      <div className="gradient-orb w-64 h-64 bg-[rgba(56, 189, 248, 0.06)] bottom-[10%] right-[5%]" style={{ position: 'absolute' }} />

      {/* Floating tech icons */}
      {floatingIcons.map((fi, i) => (
        <div
          key={i}
          className={`absolute opacity-20 pointer-events-none ${fi.cls}`}
          style={fi.style}
        >
          <fi.icon style={{ color: fi.color, fontSize: fi.style.fontSize }} />
        </div>
      ))}

      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center gap-16 pt-28 pb-20">
        {/* Left Content */}
        <motion.div
          className="flex-1 z-10"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 text-sm font-mono"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[#38BDF8]">Available for opportunities</span>
          </motion.div>

          {/* Main heading */}
          <h1 className="font-heading font-bold leading-tight mb-4">
            <span className="block text-2xl text-[rgba(226, 232, 240, 0.6)] mb-2 font-medium">
              Hi, I'm
            </span>
            <span className="block text-5xl md:text-6xl lg:text-7xl gradient-text-blue mb-2">
              Shehara Banu Jamal
            </span>
          </h1>

          {/* Typing role */}
          <div className="text-2xl md:text-3xl font-heading font-semibold text-[rgba(77,158,255,0.9)] mb-6 h-10">
            <span>{typedRole}</span>
            <span className="inline-block w-0.5 h-7 bg-[#38BDF8] ml-1 animate-pulse" />
          </div>

          {/* Tagline */}
          <p className="text-[rgba(226, 232, 240, 0.65)] text-lg leading-relaxed mb-10 max-w-xl">
            Building scalable web applications and exploring{' '}
            <span className="text-[#38BDF8]">AI</span>,{' '}
            <span className="text-[#0EA5E9]">Data Science</span>, and modern technologies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <motion.a
              href="#projects"
              className="btn-primary inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🚀 View Projects
            </motion.a>
            <motion.a
              href="#contact"
              className="btn-secondary inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ✉️ Contact Me
            </motion.a>
          </div>

          {/* Tech Badges */}
          <div>
            <p className="text-xs text-[rgba(226, 232, 240, 0.35)] font-mono mb-3 uppercase tracking-widest">Tech Stack</p>
            <div className="flex flex-wrap gap-3">
              {techBadges.map((badge) => (
                <motion.div
                  key={badge.label}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-md glass-card text-xs font-mono cursor-default"
                  whileHover={{ scale: 1.1, y: -2 }}
                  style={{ borderColor: `rgba(${hexToRgb(badge.color)}, 0.3)` }}
                >
                  <badge.icon style={{ color: badge.color, fontSize: 14 }} />
                  <span style={{ color: badge.color }}>{badge.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right: Profile Image */}
        <motion.div
          className="flex-shrink-0 z-10"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        >
          <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
            {/* Orbit ring */}
            <div
              className="absolute inset-0 rounded-full border border-[rgba(56, 189, 248, 0.2)] animate-spin-slow"
              style={{ animation: 'spin 12s linear infinite' }}
            />
            <div
              className="absolute inset-4 rounded-full border border-[rgba(56, 189, 248, 0.2)] animate-spin-slow"
              style={{ animation: 'spin 8s linear infinite reverse' }}
            />

            {/* Glow */}
            <div className="absolute inset-8 rounded-full bg-[rgba(56, 189, 248, 0.15)] blur-xl" />
            <div className="absolute inset-8 rounded-full bg-[rgba(56, 189, 248, 0.05)] blur-2xl" />

            {/* Profile circle */}
            <motion.div
              className="absolute inset-8 rounded-full overflow-hidden pulse-glow"
              style={{
                background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.3), rgba(56, 189, 248, 0.2))',
                border: '2px solid rgba(56, 189, 248, 0.5)',
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <img src={profileImg} alt="Shehara Banu" className="w-full h-full object-cover" />
            </motion.div>

            {/* Floating mini orbit badges */}
            <motion.div
              className="absolute top-2 right-2 w-10 h-10 rounded-full glass-card flex items-center justify-center float-1"
              style={{ border: '1px solid rgba(97,218,251,0.5)' }}
            >
              <SiReact style={{ color: '#38BDF8', fontSize: 20 }} />
            </motion.div>
            <motion.div
              className="absolute bottom-4 left-2 w-10 h-10 rounded-full glass-card flex items-center justify-center float-2"
              style={{ border: '1px solid rgba(51,153,51,0.5)' }}
            >
              <SiNodedotjs style={{ color: '#0EA5E9', fontSize: 20 }} />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-[rgba(226, 232, 240, 0.3)] text-xs font-mono">scroll</span>
        <div className="w-0.5 h-8 bg-gradient-to-b from-[#38BDF8] to-transparent" />
      </motion.div>
    </section>
  );
}

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
    : '255,255,255';
}
