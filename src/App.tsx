import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  Moon, 
  Sun, 
  ExternalLink, 
  Download, 
  ChevronRight,
  ChevronLeft,
  Code2,
  Briefcase,
  GraduationCap,
  Award,
  BookOpen,
  Quote
} from 'lucide-react';
import { RESUME_DATA } from './constants';
import { Tooltip } from './components/Tooltip';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const nextTestimonial = useCallback(() => {
    setTestimonialIndex((prev) => (prev + 1) % RESUME_DATA.testimonials.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setTestimonialIndex((prev) => (prev - 1 + RESUME_DATA.testimonials.length) % RESUME_DATA.testimonials.length);
  }, []);

  return (
    <div className="min-h-screen bg-[#fdfdfc] text-[#1a1a1a] dark:bg-[#0a0a0a] dark:text-[#f5f5f5] selection:bg-accent selection:text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-4 md:px-6 py-4 flex justify-between items-center glass">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-serif italic text-xl font-bold text-neutral-900 dark:text-neutral-50"
        >
          YM.
        </motion.div>
        
        <div className="flex items-center gap-4 md:gap-6">
          <div className="hidden md:flex gap-8 text-sm font-medium text-neutral-700 dark:text-neutral-400">
            <a href="#experience" className="hover:text-black dark:hover:text-neutral-50 transition-colors duration-300">Experience</a>
            <a href="#projects" className="hover:text-black dark:hover:text-neutral-50 transition-colors duration-300">Projects</a>
            <a href="#skills" className="hover:text-black dark:hover:text-neutral-50 transition-colors duration-300">Skills</a>
          </div>
          <a 
            href={RESUME_DATA.resumeUrl}
            download="Yatharth_Mehandiratta_Resume.pdf"
            className="hidden sm:flex items-center gap-2 px-4 py-2 bg-black dark:bg-white text-white dark:text-black text-xs font-bold rounded-full hover:scale-105 transition-all duration-300"
          >
            Resume <Download size={14} />
          </a>
          <button 
            onClick={toggleDarkMode}
            aria-label="Toggle Dark Mode"
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 flex items-center justify-center text-neutral-700 dark:text-neutral-300 transition-all duration-300"
          >
            {isDarkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <span className="mono-label mb-4 block">Software Developer</span>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif font-bold leading-[0.9] mb-6 tracking-tighter text-neutral-900 dark:text-neutral-50">
              {RESUME_DATA.name.split(' ').map((word, i) => (
                <span key={i} className="block">{word}</span>
              ))}
            </h1>
            <p className="text-base md:text-xl text-neutral-700 dark:text-neutral-400 max-w-md mb-8 leading-relaxed">
              Crafting sophisticated digital experiences with a focus on performance, 
              scalability, and elegant design.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href={`mailto:${RESUME_DATA.email}`}
                className="w-full sm:w-auto px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
              >
                Get in touch <Mail size={18} />
              </a>
              <a 
                href={RESUME_DATA.resumeUrl}
                download="Yatharth_Mehandiratta_Resume.pdf"
                className="w-full sm:w-auto px-8 py-4 border-2 border-black/10 dark:border-white/20 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-300"
              >
                Download Resume <Download size={18} />
              </a>
              <div className="flex gap-2 w-full sm:w-auto justify-center sm:justify-start">
                <a href={RESUME_DATA.github} target="_blank" rel="noreferrer" className="p-4 border border-black/10 dark:border-white/20 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-neutral-700 dark:text-neutral-300 transition-all duration-300">
                  <Github size={20} />
                </a>
                <a href={RESUME_DATA.linkedin} target="_blank" rel="noreferrer" className="p-4 border border-black/10 dark:border-white/20 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-neutral-700 dark:text-neutral-300 transition-all duration-300">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            className="relative aspect-square md:aspect-[4/5] overflow-hidden rounded-3xl bg-neutral-100 dark:bg-neutral-900 shadow-2xl border border-black/5 dark:border-white/10"
          >
            <img 
              src="/input_file_0.png" 
              alt="Yatharth Mehandiratta" 
              className="object-cover w-full h-full sharpen"
              referrerPolicy="no-referrer"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://picsum.photos/seed/yatharth/800/1000";
              }}
            />
            <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 p-4 md:p-6 glass rounded-2xl border border-black/5 dark:border-white/10">
              <div className="flex justify-between items-end">
                <div>
                  <p className="mono-label mb-1">Based in</p>
                  <p className="font-medium text-sm md:text-base text-neutral-900 dark:text-neutral-50">Uttar Pradesh, India</p>
                </div>
                <div className="text-right">
                  <p className="mono-label mb-1">Status</p>
                  <p className="font-medium text-sm md:text-base text-neutral-900 dark:text-neutral-50">Open to roles</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 md:py-20 px-4 md:px-6 bg-neutral-100 dark:bg-neutral-900/80">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <h2 className="section-title mb-0">Professional Journey</h2>
            <p className="mono-label">01 / Experience</p>
          </div>

          <div className="space-y-12">
            {RESUME_DATA.experience.map((exp, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="grid md:grid-cols-[1fr_2fr] gap-6 md:gap-8 border-t border-black/10 dark:border-white/10 pt-12 group transition-all duration-500"
              >
                <div>
                  <p className="font-mono text-sm opacity-50 mb-2">{exp.period}</p>
                  <h3 className="text-xl md:text-2xl font-bold mb-1 group-hover:text-accent">{exp.company}</h3>
                  <p className="opacity-70 italic text-sm md:text-base">{exp.role}</p>
                </div>
                <ul className="space-y-4">
                  {exp.description.map((item, j) => (
                    <li key={j} className="flex gap-3 opacity-80 leading-relaxed text-sm md:text-base">
                      <ChevronRight size={18} className="shrink-0 mt-1 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-20 px-4 md:px-6 bg-white dark:bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <h2 className="section-title mb-0">Selected Works</h2>
            <p className="mono-label">02 / Projects</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {RESUME_DATA.projects.map((project, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="p-6 md:p-8 rounded-3xl border border-black/5 dark:border-white/10 bg-neutral-50 dark:bg-neutral-900 flex flex-col h-full shadow-sm hover:shadow-2xl dark:hover:shadow-white/5 group transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-2xl bg-white dark:bg-neutral-800 text-accent shadow-sm">
                    <Code2 size={24} />
                  </div>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="opacity-30 hover:opacity-100 p-2">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2">{project.title}</h3>
                <p className="font-mono text-[10px] opacity-50 mb-4">{project.period}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, j) => (
                    <span key={j} className="px-2 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-[10px] font-mono opacity-70">
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="space-y-2 mb-8 flex-grow">
                  {project.description.map((desc, j) => (
                    <li key={j} className="text-xs md:text-sm opacity-70 leading-relaxed">• {desc}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications & Research */}
      {RESUME_DATA.publications.length > 0 && (
        <section className="py-16 md:py-20 px-4 md:px-6 bg-neutral-100 dark:bg-neutral-900/80">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <h2 className="section-title mb-0">Publications</h2>
              <p className="mono-label">03 / Research</p>
            </div>
            <div className="space-y-6 md:space-y-8">
              {RESUME_DATA.publications.map((pub, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="p-6 md:p-8 rounded-3xl border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900 shadow-sm hover:shadow-2xl dark:hover:shadow-white/5 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <BookOpen className="text-accent shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="text-lg md:text-xl font-bold mb-2">{pub.title}</h3>
                      <p className="opacity-70 mb-4 text-sm md:text-base">{pub.conference}</p>
                      <a href={pub.link} className="inline-flex items-center gap-2 text-accent font-medium hover:underline text-sm md:text-base">
                        View Publication <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Slider */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-white dark:bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <h2 className="section-title mb-0">Kind Words</h2>
            <p className="mono-label">04 / Testimonials</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonialIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-center px-4 md:px-12"
              >
                <Quote size={48} className="mx-auto mb-8 text-accent opacity-20" />
                <p className="text-xl md:text-3xl font-serif italic mb-8 leading-relaxed">
                  "{RESUME_DATA.testimonials[testimonialIndex].content}"
                </p>
                <div className="space-y-1">
                  <h4 className="text-lg font-bold">{RESUME_DATA.testimonials[testimonialIndex].name}</h4>
                  <p className="opacity-50 text-sm">
                    {RESUME_DATA.testimonials[testimonialIndex].title} @ {RESUME_DATA.testimonials[testimonialIndex].company}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-4 mt-12">
              <button 
                onClick={prevTestimonial}
                className="p-3 rounded-full border border-black/10 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/10"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextTestimonial}
                className="p-3 rounded-full border border-black/10 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/10"
                aria-label="Next Testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteering & Leadership */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-neutral-100 dark:bg-neutral-900/80">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <h2 className="section-title mb-0">Leadership & Impact</h2>
            <p className="mono-label">05 / Community</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="p-6 md:p-8 rounded-3xl bg-white dark:bg-neutral-900 border border-black/5 dark:border-white/10 shadow-sm hover:shadow-2xl dark:hover:shadow-white/5 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-accent/10 text-accent">
                  <Award size={20} />
                </div>
                <h3 className="font-bold">Lead Volunteer</h3>
              </div>
              <p className="text-sm opacity-50 mb-2">Oct 2023</p>
              <h4 className="text-lg font-medium mb-2">Indian Mobile Congress 2023</h4>
              <p className="text-sm opacity-70 leading-relaxed">
                Facilitated smooth collaboration between organizers, exhibitors and visitors, 
                gaining insights into 5G Advancements and digital transformation.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="p-6 md:p-8 rounded-3xl bg-white dark:bg-neutral-900 border border-black/5 dark:border-white/10 shadow-sm hover:shadow-2xl dark:hover:shadow-white/5 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-accent/10 text-accent">
                  <Award size={20} />
                </div>
                <h3 className="font-bold">Head Organizer</h3>
              </div>
              <p className="text-sm opacity-50 mb-2">Oct 2023 & 2024</p>
              <h4 className="text-lg font-medium mb-2">CyberCup 2023 & 2024</h4>
              <p className="text-sm opacity-70 leading-relaxed">
                Ensured seamless operations, technical logistics, and real-time problem-solving, 
                fostering innovation and collaborative coding culture.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills & Education */}
      <section id="skills" className="py-16 md:py-20 px-4 md:px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-title text-white mb-12"
            >
              Technical Expertise
            </motion.h2>
            <div className="space-y-10">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: { transition: { staggerChildren: 0.05 } }
                }}
              >
                <p className="mono-label text-white/40 mb-4">Languages</p>
                <div className="flex flex-wrap gap-2">
                  {RESUME_DATA.skills.languages.map((s, i) => (
                    <Tooltip key={i} text={s.description}>
                      <motion.span 
                        variants={{
                          hidden: { opacity: 0, scale: 0.8 },
                          visible: { opacity: 1, scale: 1 }
                        }}
                        className="px-4 py-2 rounded-full border border-white/10 text-sm hover:bg-white hover:text-black cursor-default transition-all duration-300 hover:scale-105"
                      >
                        {s.name}
                      </motion.span>
                    </Tooltip>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: { transition: { staggerChildren: 0.05 } }
                }}
              >
                <p className="mono-label text-white/40 mb-4">Frameworks & Libraries</p>
                <div className="flex flex-wrap gap-2">
                  {RESUME_DATA.skills.frameworks.map((s, i) => (
                    <Tooltip key={i} text={s.description}>
                      <motion.span 
                        variants={{
                          hidden: { opacity: 0, scale: 0.8 },
                          visible: { opacity: 1, scale: 1 }
                        }}
                        className="px-4 py-2 rounded-full border border-white/10 text-sm hover:bg-white hover:text-black cursor-default transition-all duration-300 hover:scale-105"
                      >
                        {s.name}
                      </motion.span>
                    </Tooltip>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: { transition: { staggerChildren: 0.05 } }
                }}
              >
                <p className="mono-label text-white/40 mb-4">Tools & Platforms</p>
                <div className="flex flex-wrap gap-2">
                  {RESUME_DATA.skills.tools.map((s, i) => (
                    <Tooltip key={i} text={s.description}>
                      <motion.span 
                        variants={{
                          hidden: { opacity: 0, scale: 0.8 },
                          visible: { opacity: 1, scale: 1 }
                        }}
                        className="px-4 py-2 rounded-full border border-white/10 text-sm hover:bg-white hover:text-black cursor-default transition-all duration-300 hover:scale-105"
                      >
                        {s.name}
                      </motion.span>
                    </Tooltip>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: { transition: { staggerChildren: 0.05 } }
                }}
              >
                <p className="mono-label text-white/40 mb-4">Financial & Business</p>
                <div className="flex flex-wrap gap-2">
                  {RESUME_DATA.skills.financial.map((s, i) => (
                    <Tooltip key={i} text={s.description}>
                      <motion.span 
                        variants={{
                          hidden: { opacity: 0, scale: 0.8 },
                          visible: { opacity: 1, scale: 1 }
                        }}
                        className="px-4 py-2 rounded-full border border-white/10 text-sm hover:bg-white hover:text-black cursor-default transition-all duration-300 hover:scale-105"
                      >
                        {s.name}
                      </motion.span>
                    </Tooltip>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-title text-white mb-12"
            >
              Education
            </motion.h2>
            <div className="space-y-12">
              {RESUME_DATA.education.map((edu, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-8 border-l border-white/10"
                >
                  <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-accent" />
                  <p className="font-mono text-xs opacity-40 mb-2">{edu.period}</p>
                  <h3 className="text-lg md:text-xl font-bold mb-1">{edu.degree}</h3>
                  <p className="opacity-70 mb-2 text-sm md:text-base">{edu.institution}</p>
                  <p className="text-sm font-medium text-accent">CGPA: {edu.gpa}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 md:mt-20">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="section-title text-white mb-8"
              >
                Certifications
              </motion.h2>
              <ul className="space-y-4">
                {RESUME_DATA.certifications.map((cert, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 opacity-70 hover:opacity-100 text-sm md:text-base"
                  >
                    <Award size={18} className="text-accent" />
                    <span>{cert}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 md:py-20 px-4 md:px-6 border-t border-black/5 dark:border-white/10 bg-white dark:bg-neutral-950">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 italic">Let's build something <br/> remarkable together.</h2>
            <p className="opacity-60 text-sm md:text-base">Currently available for new opportunities.</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex gap-4">
              <a href={RESUME_DATA.github} target="_blank" rel="noreferrer" className="p-4 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-black/5 dark:border-white/10 hover:scale-110 text-black dark:text-white"><Github size={24}/></a>
              <a href={RESUME_DATA.linkedin} target="_blank" rel="noreferrer" className="p-4 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-black/5 dark:border-white/10 hover:scale-110 text-black dark:text-white"><Linkedin size={24}/></a>
              <a href={`mailto:${RESUME_DATA.email}`} className="p-4 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-black/5 dark:border-white/10 hover:scale-110 text-black dark:text-white"><Mail size={24}/></a>
            </div>
            <p className="mono-label">© 2026 Yatharth Mehandiratta</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
