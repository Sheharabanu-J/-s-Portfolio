import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BsTerminalFill } from 'react-icons/bs';
import { FiUser, FiBook, FiMapPin, FiAward } from 'react-icons/fi';

const details = [
  { icon: FiUser, label: 'Name', value: 'Shehara Banu Jamal', color: '#38BDF8' },
  { icon: FiBook, label: 'Degree', value: 'B.Tech Information Technology', color: '#0EA5E9' },
  { icon: FiMapPin, label: 'College', value: 'Varuvan Vadivelan Institute of Technology', color: '#0EA5E9' },
  { icon: FiAward, label: 'CGPA', value: '8.91 / 10.0', color: '#38BDF8' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-28 relative overflow-hidden">
      {/* Background orb */}
      <div
        className="gradient-orb w-80 h-80 bg-[rgba(56, 189, 248, 0.05)] top-1/2 left-0"
        style={{ position: 'absolute', transform: 'translateY(-50%)' }}
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
            <span className="text-white">About</span>
            <span className="gradient-text-blue ml-3"></span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Terminal panel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card overflow-hidden"
          >
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-5 py-4 border-b border-[rgba(56, 189, 248, 0.1)] bg-[rgba(0,0,0,0.3)]">
              <div className="w-3 h-3 rounded-full bg-slate-700 opacity-80" />
              <div className="w-3 h-3 rounded-full bg-[#38BDF8] opacity-80" />
              <div className="w-3 h-3 rounded-full bg-slate-500 opacity-80" />
              <div className="flex items-center gap-2 ml-3">
                <BsTerminalFill className="text-[rgba(56, 189, 248, 0.6)] text-sm" />
                <span className="text-xs font-mono text-[rgba(226, 232, 240, 0.4)]">
                  shehara@portfolio:~/about
                </span>
              </div>
            </div>

            {/* Terminal content */}
            <div className="p-6 font-mono text-sm space-y-3">
              {details.map((d, i) => (
                <motion.div
                  key={d.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex flex-col sm:flex-row gap-1"
                >
                  <div className="flex items-center gap-2 min-w-[160px]">
                    <d.icon style={{ color: d.color, fontSize: 13 }} />
                    <span className="text-[rgba(56, 189, 248, 0.8)]">{d.label}</span>
                    <span className="text-[rgba(226, 232, 240, 0.3)]">:</span>
                  </div>
                  <span style={{ color: d.color }} className="font-medium">
                    "{d.value}"
                  </span>
                </motion.div>
              ))}

              {/* Separator */}
              <div className="border-t border-[rgba(255,255,255,0.05)] pt-3 mt-2">
                <span className="text-[rgba(56, 189, 248, 0.6)]">{'>'}</span>
                <span className="text-[#38BDF8] ml-2">status</span>
                <span className="text-[rgba(226, 232, 240, 0.4)]">:</span>
                <span className="text-[#38BDF8] ml-2">"Ready for opportunities ✓"</span>
              </div>
              <div>
                <span className="text-[rgba(56, 189, 248, 0.6)]">{'>'}</span>
                <span className="text-[#0EA5E9] ml-2">passion</span>
                <span className="text-[rgba(226, 232, 240, 0.4)]">:</span>
                <span className="text-[rgba(226, 232, 240, 0.7)] ml-2">"Full Stack + AI + Data Science"</span>
              </div>
            </div>
          </motion.div>

          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col justify-center gap-6"
          >
            <p className="text-[rgba(226, 232, 240, 0.75)] text-lg leading-relaxed">
              <span className="gradient-text-blue font-semibold">Shehara Banu Jamal</span> is a passionate{' '}
              <span className="text-[#0EA5E9] font-medium">Full Stack Developer</span> currently
              pursuing B.Tech in Information Technology. She specializes in building responsive and
              scalable web applications using the{' '}
              <span className="text-[#38BDF8] font-medium">MERN stack</span>.
            </p>
            <p className="text-[rgba(226, 232, 240, 0.65)] leading-relaxed">
              She also has hands-on experience in{' '}
              <span className="text-[#0EA5E9] font-medium">Data Science</span>, working with Python,
              SQL, and machine learning models. She is continuously exploring emerging technologies
              like{' '}
              <span className="text-[#0EA5E9] font-medium">Generative AI</span> and{' '}
              <span className="text-[#38BDF8] font-medium">Cloud Security</span>.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mt-4">
              {[
                { value: '8.91', label: 'CGPA' },
                { value: '2+', label: 'Internships' },
                { value: '5+', label: 'Projects' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card p-4 text-center"
                  style={{ border: '1px solid rgba(56, 189, 248, 0.2)' }}
                >
                  <div className="gradient-text-blue font-heading font-bold text-2xl">{stat.value}</div>
                  <div className="text-[rgba(226, 232, 240, 0.5)] text-xs mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
