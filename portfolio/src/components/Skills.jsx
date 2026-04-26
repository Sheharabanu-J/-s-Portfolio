import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const skillCategories = [
  {
    label: 'Frontend',
    color: '#0EA5E9',
    icon: '🎨',
    skills: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'React'],
  },
  {
    label: 'Backend',
    color: '#0EA5E9',
    icon: '⚙️',
    skills: ['Node.js', 'Express', 'Python'],
  },
  {
    label: 'Database',
    color: '#38BDF8',
    icon: '🗄️',
    skills: ['SQLite', 'MongoDB'],
  },
  {
    label: 'AI / Data Science',
    color: '#38BDF8',
    icon: '🧠',
    skills: ['Generative AI', 'Machine Learning', 'Data Science', 'Power BI', 'Matplotlib'],
  },
  {
    label: 'Tools',
    color: '#34d399',
    icon: '🛠️',
    skills: ['Git', 'GitHub', 'VS Code'],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="py-28 relative overflow-hidden">
      {/* BG orb */}
      <div
        className="gradient-orb w-72 h-72 bg-[rgba(167,139,250,0.07)] top-1/4 right-[-5%]"
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
            <span className="text-white">Skills</span>
            <span className="gradient-text-blue ml-3"></span>
          </h2>
        </motion.div>

        {/* Skill categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: ci * 0.1 }}
              className="glass-card p-6 group hover:scale-[1.02] transition-all duration-300"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{cat.icon}</span>
                <div>
                  <h3
                    className="font-heading font-semibold text-base"
                    style={{ color: cat.color }}
                  >
                    {cat.label}
                  </h3>
                  <div
                    className="h-0.5 w-12 rounded-full mt-1"
                    style={{ background: cat.color }}
                  />
                </div>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    className="skill-tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: ci * 0.1 + si * 0.06 + 0.3 }}
                    style={{
                      borderColor: `rgba(${hexToRgb(cat.color)}, 0.35)`,
                      color: cat.color,
                      background: `rgba(${hexToRgb(cat.color)}, 0.05)`,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Proficiency bars */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 glass-card p-8"
        >
          <h3 className="font-heading font-semibold text-lg text-white mb-6">
            Proficiency Overview
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { label: 'React / Frontend', pct: 88, color: '#0EA5E9' },
              { label: 'Node.js / Express', pct: 82, color: '#0EA5E9' },
              { label: 'Python / Data Science', pct: 75, color: '#38BDF8' },
              { label: 'MongoDB / SQLite', pct: 78, color: '#38BDF8' },
            ].map((bar, i) => (
              <div key={bar.label}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-[rgba(226, 232, 240, 0.7)]">{bar.label}</span>
                  <span style={{ color: bar.color }} className="font-mono">{bar.pct}%</span>
                </div>
                <div className="h-1.5 bg-[rgba(255,255,255,0.06)] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: bar.color }}
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${bar.pct}%` } : {}}
                    transition={{ duration: 1.2, delay: 0.6 + i * 0.1, ease: 'easeOut' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
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
