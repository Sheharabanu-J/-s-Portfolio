import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FiAward, FiX, FiExternalLink } from 'react-icons/fi';

const certificates = [
  {
    title: '5-Day AI Agents Intensive Course',
    issuer: 'Kaggle / Google',
    date: '2025',
    color: '#F59E0B',
    icon: '🤖',
    desc: 'Completed a 5-day intensive course focusing on AI agent architectures, tools, and implementation using Google technologies.',
    skills: ['AI Agents', 'Google Cloud', 'Python'],
    image: '/certificates/ai_agents.png?v=2',
  },
  {
    title: 'Data Science Internship',
    issuer: 'INSPIRE AI',
    date: '2025',
    color: '#34D399',
    icon: '📉',
    desc: 'Specialized internship in Data Science covering data analysis, machine learning models, and real-world implementation.',
    skills: ['Data Science', 'ML', 'Analytics'],
    image: '/certificates/ds_internship.png?v=2',
  },
  {
    title: 'Full Stack Development Internship',
    issuer: 'INSPIRE AI',
    date: '2025',
    color: '#0EA5E9',
    icon: '💻',
    desc: 'Intensive internship focused on modern full-stack web development, building scalable and responsive applications.',
    skills: ['React', 'Node.js', 'Web Dev'],
    image: '/certificates/fs_internship.png?v=2',
  },
  {
    title: 'Python Programming Certification',
    issuer: 'EduPrep',
    date: '2023',
    color: '#38BDF8',
    icon: '🐍',
    desc: 'Comprehensive Python programming certification course (Verification: KULPZ6ZL).',
    skills: ['Python', 'Problem Solving'],
    image: '/certificates/python_eduprep.png?v=2',
  },
  {
    title: 'Cloud Security Foundations',
    issuer: 'Varuvan Vadivelan Inst. of Tech.',
    date: '2025',
    color: '#F472B6',
    icon: '🛡️',
    desc: 'Participated in a specialized seminar on Cloud Security, Risk Management, and Compliance.',
    skills: ['Cloud Security', 'Compliance'],
    image: '/certificates/cloud_security.png?v=2',
  },
  {
    title: 'Paper Presentation Winner',
    issuer: 'Mahendra Engineering College',
    date: '2025',
    color: '#A78BFA',
    icon: '📜',
    desc: 'Won prize for Paper Presentation at the AINNOVAT-2K25 National Level Technical Symposium.',
    skills: ['Public Speaking', 'Research'],
    image: '/certificates/symposium.png?v=2',
  },
];

export default function Certificates() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [modal, setModal] = useState(null);

  return (
    <section id="certificates" className="py-28 relative overflow-hidden">
      <div
        className="gradient-orb w-80 h-80 bg-[rgba(56, 189, 248, 0.05)] top-10 right-[-5%]"
        style={{ position: 'absolute' }}
      />

      <div ref={ref} className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl section-title">
            <span className="text-white">Certificates</span>
            <span className="gradient-text-blue ml-3">&amp; Awards</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="flip-card h-64 cursor-pointer group"
              onClick={() => setModal(cert)}
            >
              <div className="flip-card-inner w-full h-full relative preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
                {/* Front */}
                <div
                  className="flip-card-front absolute inset-0 w-full h-full glass-card overflow-hidden backface-hidden"
                  style={{ borderColor: `rgba(${hexToRgb(cert.color)}, 0.4)` }}
                >
                  {/* Certificate Image Background */}
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      className="w-full h-full object-cover opacity-60 grayscale-[20%] group-hover:scale-110 group-hover:opacity-100 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
                  </div>

                  {/* Content Overlay */}
                  <div className="relative z-10 w-full h-full p-6 flex flex-col items-center justify-end text-center gap-2">
                    <div 
                      className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-xl glass-card backdrop-blur-md ring-1 ring-white/20"
                      style={{ background: `rgba(${hexToRgb(cert.color)}, 0.2)` }}
                    >
                      {cert.icon}
                    </div>
                    
                    <h3 className="font-heading font-bold text-lg leading-tight text-white drop-shadow-lg">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-white/60 font-medium tracking-wide">{cert.issuer}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 border border-white/10 text-white/80">
                        {cert.date}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Back */}
                <div
                  className="flip-card-back absolute inset-0 w-full h-full glass-card p-7 flex flex-col items-center justify-center text-center gap-4 backface-hidden rotate-y-180"
                  style={{ borderColor: `rgba(${hexToRgb(cert.color)}, 0.6)`, background: `rgba(${hexToRgb(cert.color)}, 0.12)` }}
                >
                  <FiAward style={{ color: cert.color, fontSize: 32 }} />
                  <p className="text-sm text-white/80 leading-relaxed font-light">
                    {cert.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5 justify-center mt-2">
                    {cert.skills.map((s) => (
                      <span
                        key={s}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md border border-white/10 bg-white/5 text-white/70"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={(e) => { e.stopPropagation(); setModal(cert); }}
                    className="text-xs mt-2 px-4 py-2 rounded-full glass-card hover:bg-white/10 transition-colors flex items-center gap-2"
                    style={{ color: cert.color, borderColor: `rgba(${hexToRgb(cert.color)}, 0.3)` }}
                  >
                    <FiExternalLink size={12} /> Full Certificate
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModal(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 40 }}
              className="glass-card p-8 max-w-2xl w-full relative overflow-y-auto max-h-[90vh]"
              style={{ borderColor: `rgba(${hexToRgb(modal.color)}, 0.4)` }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setModal(null)}
                className="absolute top-4 right-4 text-[rgba(226, 232, 240, 0.5)] hover:text-white"
              >
                <FiX size={20} />
              </button>
              <div className="text-center mb-6">
                {modal.image ? (
                  <div className="relative rounded-lg overflow-hidden border border-[rgba(255,255,255,0.15)] shadow-2xl mb-4 group ring-1 ring-white/10">
                    <img
                      src={modal.image}
                      alt={modal.title}
                      className="w-full h-auto max-h-[65vh] object-contain bg-[#111] transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                  </div>
                ) : (
                  <span className="text-5xl">{modal.icon}</span>
                )}
              </div>
              <h3
                className="font-heading font-bold text-2xl text-center mb-2"
                style={{ color: modal.color }}
              >
                {modal.title}
              </h3>
              <p className="text-center text-sm text-[rgba(226, 232, 240, 0.5)] mb-6">
                {modal.issuer} · {modal.date}
              </p>
              <p className="text-[rgba(226, 232, 240, 0.75)] leading-relaxed text-sm mb-6">
                {modal.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {modal.skills.map((s) => (
                  <span
                    key={s}
                    className="text-sm font-mono px-3 py-1 rounded-md"
                    style={{
                      background: `rgba(${hexToRgb(modal.color)}, 0.12)`,
                      border: `1px solid rgba(${hexToRgb(modal.color)}, 0.3)`,
                      color: modal.color,
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
    : '255,255,255';
}
