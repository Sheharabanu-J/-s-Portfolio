import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';
import { SiPython, SiReact } from 'react-icons/si';

const experiences = [
  {
    role: 'Data Science Intern',
    company: 'Inspire AI',
    location: 'Bangalore',
    period: 'Jun 2024 – Aug 2024',
    color: '#38BDF8',
    icon: SiPython,
    points: [
      'Worked on comprehensive data cleaning and exploratory analysis pipelines',
      'Built ML models including regression and classification algorithms',
      'Utilized Power BI & Matplotlib for advanced data visualization',
      'Created interactive dashboards for business intelligence reporting',
    ],
    tags: ['Python', 'Machine Learning', 'Power BI', 'Matplotlib', 'SQL'],
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'Inspire AI',
    location: 'Bangalore',
    period: 'Sep 2024 – Nov 2024',
    color: '#0EA5E9',
    icon: SiReact,
    points: [
      'Built fully responsive web applications from scratch',
      'Developed RESTful APIs using React, Node.js and Express.js',
      'Integrated third-party APIs and managed database operations',
      'Collaborated in agile sprints with cross-functional teams',
    ],
    tags: ['React', 'Node.js', 'Express', 'REST API', 'MongoDB'],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="py-28 relative overflow-hidden">
      <div
        className="gradient-orb w-96 h-96 bg-[rgba(244,114,182,0.05)] top-1/2 left-0"
        style={{ position: 'absolute', transform: 'translateY(-50%)' }}
      />

      <div ref={ref} className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl section-title">
            <span className="text-white">Work</span>
            <span className="gradient-text-blue ml-3">Experience</span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="glass-card p-8 group hover:scale-[1.01] transition-all duration-300 relative overflow-hidden"
            >
              {/* Left accent bar */}
              <div
                className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
                style={{ background: exp.color }}
              />

              <div className="flex flex-col md:flex-row gap-6">
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: `rgba(${hexToRgb(exp.color)}, 0.1)`,
                    border: `1px solid rgba(${hexToRgb(exp.color)}, 0.3)`,
                  }}
                >
                  <exp.icon style={{ color: exp.color, fontSize: 26 }} />
                </div>

                <div className="flex-1">
                  {/* Role & company */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-heading font-bold text-xl text-white">{exp.role}</h3>
                      <div className="flex items-center gap-4 mt-1 text-sm text-[rgba(226, 232, 240, 0.5)]">
                        <div className="flex items-center gap-1">
                          <FiBriefcase style={{ color: exp.color }} />
                          <span style={{ color: exp.color }} className="font-semibold">
                            {exp.company}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FiMapPin className="text-xs" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full glass-card text-xs font-mono">
                      <FiCalendar style={{ color: exp.color, fontSize: 11 }} />
                      <span className="text-[rgba(226, 232, 240, 0.6)]">{exp.period}</span>
                    </div>
                  </div>

                  {/* Points */}
                  <ul className="space-y-2 mb-5">
                    {exp.points.map((pt, pi) => (
                      <motion.li
                        key={pi}
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: i * 0.2 + pi * 0.08 + 0.4 }}
                        className="flex items-start gap-2 text-sm text-[rgba(226, 232, 240, 0.7)]"
                      >
                        <span style={{ color: exp.color }} className="mt-1 text-xs">▸</span>
                        {pt}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-md text-xs font-mono"
                        style={{
                          background: `rgba(${hexToRgb(exp.color)}, 0.1)`,
                          border: `1px solid rgba(${hexToRgb(exp.color)}, 0.3)`,
                          color: exp.color,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
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
