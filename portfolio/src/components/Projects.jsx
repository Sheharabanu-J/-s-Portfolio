import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const projects = [
  {
    title: 'Reall Creation',
    image: '/REALLLOGO.png',
    description:
      'A comprehensive content and growth agency website specialized in performance marketing, high-converting web development, and professional content production.',
    tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    color: '#F59E0B',
    github: 'https://github.com/Sheharabanu-J',
    live: 'https://reallcreation.com/',
    badge: 'Featured',
  },
  {
    title: 'Personal Portfolio',
    image: '/portfolio_hero.png',
    description:
      'A fully responsive personal portfolio website showcasing skills, projects, and experience with modern animations and sleek UI.',
    tech: ['React', 'HTML', 'CSS', 'JavaScript'],
    color: '#0EA5E9',
    github: 'https://github.com/Sheharabanu-J',
    live: '#',
  },
  {
    title: 'Tourism Website',
    image: '/tourism_tn.png',
    description:
      'Explore the beauty of Tamil Nadu through an immersive tourism website featuring locations, culture, food, and travel videos.',
    tech: ['HTML', 'CSS', 'Bootstrap'],
    color: '#38BDF8',
    github: 'https://github.com/Sheharabanu-J',
    live: '#',
  },
  {
    title: 'Task Manager App',
    image: '/task_manager.png',
    description:
      'A full CRUD task management application with add, edit, delete functionality and persistent local storage — stay organized effortlessly.',
    tech: ['React', 'JavaScript', 'Local Storage', 'CSS'],
    color: '#34d399',
    github: 'https://github.com/Sheharabanu-J',
    live: '#',
    badge: 'Featured',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" className="py-28 relative overflow-hidden">
      <div
        className="gradient-orb w-80 h-80 bg-[rgba(56, 189, 248, 0.08)] bottom-10 right-[-5%]"
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
            <span className="text-white">Projects</span>
            <span className="gradient-text-blue ml-3"></span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="premium-project-card group relative bg-[rgba(15,23,42,0.6)] rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.08)] transition-all duration-500"
              style={{
                boxShadow: hovered === i 
                  ? `0 20px 40px -15px rgba(${hexToRgb(proj.color)}, 0.3)` 
                  : '0 10px 30px -15px rgba(0,0,0,0.5)'
              }}
            >
              {/* Image Section */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <motion.img
                  src={proj.image}
                  alt={proj.title}
                  animate={{ scale: hovered === i ? 1.05 : 1 }}
                  transition={{ duration: 0.8 }}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-90" />
                
                {/* Badge */}
                {proj.badge && (
                  <div
                    className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase backdrop-blur-md border"
                    style={{
                      background: `rgba(${hexToRgb(proj.color)}, 0.2)`,
                      borderColor: `rgba(${hexToRgb(proj.color)}, 0.5)`,
                      color: '#FFFFFF',
                    }}
                  >
                    {proj.badge}
                  </div>
                )}

                {/* Tech Floating on Image */}
                <div className="absolute bottom-4 left-6 flex flex-wrap gap-2">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2 py-1 rounded-md backdrop-blur-md border border-white/10 bg-black/20 text-white/90"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-7 relative z-10">
                <h3
                  className="font-heading font-bold text-2xl mb-3 transition-all duration-300 group-hover:translate-x-1"
                  style={{ color: hovered === i ? proj.color : 'white' }}
                >
                  {proj.title}
                </h3>
                <p className="text-[rgba(226, 232, 240, 0.6)] text-sm leading-relaxed mb-6 line-clamp-3">
                  {proj.description}
                </p>

                {/* Action Links */}
                <div className="flex items-center justify-between pt-5 border-t border-white/5">
                  <div className="flex gap-4">
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/40 hover:text-white transition-colors"
                      title="View Code"
                    >
                      <FiGithub size={20} />
                    </a>
                  </div>
                  <a
                    href={proj.live}
                    className="flex items-center gap-2 text-sm font-bold tracking-wide group/link"
                    style={{ color: proj.color }}
                  >
                    Explore Case Study
                    <FiExternalLink className="transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                  </a>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ 
                  background: `radial-gradient(600px circle at var(--x) var(--y), rgba(${hexToRgb(proj.color)}, 0.08), transparent 40%)` 
                }}
              />
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
