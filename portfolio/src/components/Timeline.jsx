import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const milestones = [
  {
    year: '2022',
    title: 'Started IT Journey',
    desc: 'Enrolled in B.Tech Information Technology, began learning programming fundamentals.',
    color: '#0EA5E9',
    icon: '🎓',
    align: 'right',
  },
  {
    year: '2024',
    title: 'Full Stack Learning',
    desc: 'Mastered the MERN stack — MongoDB, Express, React, Node.js. Built first web applications.',
    color: '#38BDF8',
    icon: '💻',
    align: 'left',
  },
  {
    year: '2025',
    title: 'Internships + Data Science',
    desc: 'Completed two internships at Inspire AI. Explored Data Science, ML, and Generative AI.',
    color: '#38BDF8',
    icon: '🚀',
    align: 'right',
  },
  {
    year: '2026',
    title: 'Placement Ready',
    desc: 'Polished skills, built portfolio, and ready for full-time tech roles in the industry.',
    color: '#34d399',
    icon: '🏆',
    align: 'left',
  },
];

export default function Timeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="timeline" className="py-28 relative overflow-hidden">
      <div
        className="gradient-orb w-72 h-72 bg-[rgba(52,211,153,0.05)] bottom-20 left-[-5%]"
        style={{ position: 'absolute' }}
      />

      <div ref={ref} className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-14 text-center"
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl">
            <span className="text-white">Growth</span>
            <span className="gradient-text-blue ml-3">Timeline</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[rgba(56, 189, 248, 0.5)] to-transparent -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: m.align === 'right' ? -60 : 60 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className={`relative flex flex-col md:flex-row items-center gap-6 ${
                  m.align === 'left' ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Card */}
                <div className="flex-1">
                  <div
                    className="glass-card p-6 group hover:scale-[1.02] transition-all duration-300"
                    style={{ borderColor: `rgba(${hexToRgb(m.color)}, 0.3)` }}
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-3xl">{m.icon}</span>
                      <div>
                        <div
                          className="font-mono text-xs font-bold mb-1 tracking-wider"
                          style={{ color: m.color }}
                        >
                          {m.year}
                        </div>
                        <h3 className="font-heading font-bold text-lg text-white mb-2">
                          {m.title}
                        </h3>
                        <p className="text-[rgba(226, 232, 240, 0.6)] text-sm leading-relaxed">
                          {m.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex flex-shrink-0 w-12 h-12 rounded-full items-center justify-center z-10"
                  style={{
                    background: `rgba(${hexToRgb(m.color)}, 0.1)`,
                    border: `2px solid ${m.color}`,
                    boxShadow: `0 0 20px rgba(${hexToRgb(m.color)}, 0.4)`,
                  }}
                >
                  <span className="text-lg">{m.icon}</span>
                </div>

                {/* Empty side */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
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
