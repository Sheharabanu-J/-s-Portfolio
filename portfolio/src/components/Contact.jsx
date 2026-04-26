import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiSend, FiMapPin } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const socials = [
    {
      icon: FiGithub,
      label: 'GitHub',
      value: 'Sheharabanu-J',
      href: 'https://github.com/Sheharabanu-J',
      color: '#fff',
    },
    {
      icon: FiLinkedin,
      label: 'LinkedIn',
      value: 'Shehara Banu',
      href: 'https://linkedin.com/',
      color: '#0EA5E9',
    },
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      value: '+91 78451 24247',
      href: 'https://wa.me/917845124247',
      color: '#38BDF8',
    },
    {
      icon: FiMail,
      label: 'Email',
      value: 'jamaljamal6330@gmail.com',
      href: 'mailto:jamaljamal6330@gmail.com',
      color: '#38BDF8',
    },
  ];

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      <div
        className="gradient-orb w-96 h-96 bg-[rgba(56, 189, 248, 0.07)] bottom-0 right-[-10%]"
        style={{ position: 'absolute' }}
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
            <span className="text-white">Contact</span>
            <span className="gradient-text-blue ml-3"></span>
          </h2>
          <p className="text-[rgba(226, 232, 240, 0.5)] mt-6 max-w-xl">
            Have a project in mind or want to collaborate? Feel free to reach out — I'd love to connect!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-card p-8">
              <h3 className="font-heading font-semibold text-xl text-white mb-6">
                Send a Message
              </h3>
              <form action="https://formsubmit.co/jamaljamal6330@gmail.com" method="POST" className="space-y-5">
                {/* FormSubmit Configuration */}
                <input type="hidden" name="_subject" value="New Portfolio Message!" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value="http://localhost:5173/#contact" />
                
                <div>
                  <label className="block text-xs font-mono text-[rgba(226, 232, 240, 0.5)] mb-2 uppercase tracking-widest">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    required
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-[rgba(226, 232, 240, 0.5)] mb-2 uppercase tracking-widest">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-[rgba(226, 232, 240, 0.5)] mb-2 uppercase tracking-widest">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    name="message"
                    placeholder="Tell me about your project or idea..."
                    required
                    className="form-input resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FiSend />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col justify-center gap-5"
          >
            <div>
              <h3 className="font-heading font-semibold text-xl text-white mb-2">Let's Connect</h3>
              <p className="text-[rgba(226, 232, 240, 0.5)] text-sm">
                I'm currently open to exciting opportunities. My inbox is always open!
              </p>
            </div>

            {socials.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target={s.label !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="glass-card p-5 flex items-center gap-4 group hover:scale-[1.02] transition-all duration-300"
                style={{ textDecoration: 'none' }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: `rgba(${hexToRgb(s.color)}, 0.1)`,
                    border: `1px solid rgba(${hexToRgb(s.color)}, 0.3)`,
                  }}
                >
                  <s.icon style={{ color: s.color, fontSize: 20 }} />
                </div>
                <div>
                  <div className="text-xs font-mono text-[rgba(226, 232, 240, 0.4)] mb-0.5">
                    {s.label}
                  </div>
                  <div
                    className="font-medium text-sm group-hover:underline"
                    style={{ color: s.color }}
                  >
                    {s.value}
                  </div>
                </div>
              </motion.a>
            ))}

            {/* Location */}
            <div className="glass-card p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-[rgba(56, 189, 248, 0.1)] border border-[rgba(56, 189, 248, 0.3)]">
                <FiMapPin style={{ color: '#38BDF8', fontSize: 20 }} />
              </div>
              <div>
                <div className="text-xs font-mono text-[rgba(226, 232, 240, 0.4)] mb-0.5">Location</div>
                <div className="text-[rgba(226, 232, 240, 0.8)] text-sm font-medium">Tamil Nadu, India</div>
              </div>
            </div>
          </motion.div>
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
