import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const achievements = [
  {
    icon: '🏗️',
    title: 'Multiple Web Projects',
    desc: 'Built several production-quality web applications showcasing full-stack expertise.',
    color: '#0EA5E9',
  },
  {
    icon: '🤝',
    title: 'Dual AI Company Internships',
    desc: 'Completed two impactful internships at Inspire AI in both Data Science and Full Stack roles.',
    color: '#38BDF8',
  },
  {
    icon: '🎓',
    title: 'Strong Academic Performance',
    desc: 'Maintaining an impressive CGPA of 8.91 throughout the B.Tech program.',
    color: '#34d399',
  },
  {
    icon: '🧠',
    title: 'AI & Data Science Expertise',
    desc: 'Hands-on experience with ML models, data pipelines, and Generative AI exploration.',
    color: '#38BDF8',
  },
  {
    icon: '☁️',
    title: 'Cloud Security Certification',
    desc: 'Acquired cloud security knowledge and certifications in emerging tech domains.',
    color: '#0EA5E9',
  },
  {
    icon: '💡',
    title: 'Continuous Innovation',
    desc: 'Actively building, learning, and contributing to open-source web projects.',
    color: '#fb923c',
  },
];

export default function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="achievements" className="py-28 relative overflow-hidden">
      <div
        className="gradient-orb w-80 h-80 bg-[rgba(167,139,250,0.06)] top-1/2 left-1/2"
        style={{ position: 'absolute', transform: 'translate(-50%, -50%)' }}
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
            <span className="text-white">Key</span>
            <span className="gradient-text-blue ml-3">Achievements</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((ach, i) => (
            <motion.div
              key={ach.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="glass-card p-6 group hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300"
              style={{ borderColor: `rgba(${hexToRgb(ach.color)}, 0.2)` }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{
                    background: `rgba(${hexToRgb(ach.color)}, 0.1)`,
                    border: `1px solid rgba(${hexToRgb(ach.color)}, 0.3)`,
                  }}
                >
                  {ach.icon}
                </div>
                <div>
                  <h3
                    className="font-heading font-bold text-base mb-2"
                    style={{ color: ach.color }}
                  >
                    {ach.title}
                  </h3>
                  <p className="text-[rgba(226, 232, 240, 0.6)] text-sm leading-relaxed">
                    {ach.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
    : '255,255,255';
}
