"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { Github, Linkedin, Mail, Phone, ExternalLink, Code, Briefcase, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")
  const [activeSection, setActiveSection] = useState("hero")

  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const backgroundY = useTransform(smoothProgress, [0, 1], ["0%", "100%"])
  const heroY = useTransform(smoothProgress, [0, 0.3], ["0%", "50%"])

  useEffect(() => {
    let animationFrameId: number

    const updateMousePosition = (e: MouseEvent) => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }

      animationFrameId = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY })
      })
    }

    const handleScroll = () => {
      const sections = ["hero", "about", "projects", "certifications", "experience", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("mousemove", updateMousePosition)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      window.removeEventListener("scroll", handleScroll)
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [])

  const programmingLanguages = [
    { name: "Python", level: 90, icon: "🐍" },
    { name: "JavaScript", level: 80, icon: "⚡" },
    { name: "SQL", level: 75, icon: "🗄️" },
  ]

  const webTechnologies = [
    { name: "React.js", level: 75, icon: "⚛️" },
    { name: "Node.js", level: 70, icon: "🟢" },
    { name: "HTML5/CSS3", level: 85, icon: "🌐" },
    { name: "FastAPI", level: 80, icon: "🚀" },
  ]

  const aiMlFrameworks = [
    { name: "TensorFlow", level: 85, icon: "🧠" },
    { name: "PyTorch", level: 82, icon: "🔥" },
    { name: "Scikit-learn", level: 78, icon: "📊" },
    { name: "OpenCV", level: 80, icon: "👁️" },
  ]

  const toolsAndDatabases = [
    { name: "Git", level: 85, icon: "📝" },
    { name: "MySQL", level: 75, icon: "🗄️" },
    { name: "PineconeDB", level: 70, icon: "🌲" },
    { name: "Firebase", level: 72, icon: "🔥" },
  ]

  const projects = [
    {
      title: "Portfolio Website",
      description:
        "Exceptional responsive portfolio website with fluid animations and advanced mouse interactions. Built with Next.js, Framer Motion, and Tailwind CSS for optimal performance.",
      tech: ["Next.js", "React", "Framer Motion", "Tailwind CSS", "TypeScript"],
      status: "2025",
      gradient: "from-sky-500 to-blue-600",
      githubUrl: "https://github.com/BandaAkshith/my-portfolio",
      liveUrl: window.location.origin,
    },
    {
      title: "Vision 3D – Multi-View 2D to 3D Reconstruction",
      description:
        "Full-stack AI web app converting multi-view 2D images into interactive 3D models using NVIDIA's Instant-NGP for accelerated volumetric rendering.",
      tech: ["Python", "Instant-NGP (NeRF)", "FastAPI", "WebGL"],
      status: "Ongoing – 2025",
      gradient: "from-blue-500 to-cyan-500",
      githubUrl: "https://github.com/BandaAkshith/Vision3D-NeRF",
    },
    {
      title: "Retrieval-Augmented Generation (RAG) QA Bot",
      description:
        "Domain-adaptive QA system using OpenAI and PineconeDB for real-time vector-based retrieval, trained on SQuAD dataset.",
      tech: ["OpenAI API", "PineconeDB", "FastAPI", "React"],
      status: "2024",
      gradient: "from-cyan-500 to-sky-500",
      githubUrl: "https://github.com/BandaAkshith/RAG-QA-Bot",
    },
    {
      title: "Mental Health Chatbot",
      description:
        "AI-powered chatbot for real-time emotional support using GPT and NLP techniques with memory-based response refinement.",
      tech: ["OpenAI API", "Flask", "Firebase"],
      status: "2024",
      gradient: "from-blue-600 to-teal-500",
      githubUrl: "https://github.com/BandaAkshith/Mental-Health-Chatbot",
    },
  ]

  const certifications = [
    "Introduction to Artificial Intelligence – Coursera (2023)",
    "Data Structures – Coursera (2023)",
    "Introduction to Deep Learning with Keras – Coursera (2023)",
    "Databases & SQL for Data Science with Python – Coursera (2023)",
    "Introduction to TensorFlow for AI, ML, and DL – Coursera (2023)",
  ]

  return (
    <div ref={containerRef} className="relative min-h-screen bg-black text-white overflow-x-hidden global-cursor-none">
      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 bg-blue-500 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: cursorVariant === "hover" ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 25,
          mass: 0.5,
        }}
        style={{
          willChange: "transform",
        }}
      />

      {/* Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 40,
          mass: 0.05,
        }}
        style={{
          willChange: "transform",
        }}
      />

      {/* Animated Background */}
      <motion.div className="fixed inset-0 opacity-30 will-change-transform" style={{ y: backgroundY }}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-cyan-900/20 to-sky-900/20" />
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-white/10"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.button
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onMouseEnter={() => setCursorVariant("hover")}
              onMouseLeave={() => setCursorVariant("default")}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              AKB
            </motion.button>
            <div className="hidden md:flex space-x-8">
              {["About", "Projects", "Certifications", "Experience", "Connect"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item === "Connect" ? "contact" : item.toLowerCase()}`}
                  className={`relative px-3 py-2 transition-colors ${
                    activeSection === (item === "Connect" ? "contact" : item.toLowerCase())
                      ? "text-blue-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  onMouseEnter={() => setCursorVariant("hover")}
                  onMouseLeave={() => setCursorVariant("default")}
                  onClick={(e) => {
                    e.preventDefault()
                    const sectionId = item === "Connect" ? "contact" : item.toLowerCase()
                    const element = document.getElementById(sectionId)
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth", block: "start" })
                    }
                  }}
                >
                  {item}
                  {activeSection === (item === "Connect" ? "contact" : item.toLowerCase()) && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400"
                      layoutId="activeSection"
                    />
                  )}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section
        id="hero"
        className="relative min-h-screen flex items-center justify-center px-6"
        style={{ y: heroY, willChange: "transform" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.h1
              className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
            >
              AKSHITH KRISHNA
            </motion.h1>
            <motion.h2
              className="text-2xl md:text-4xl font-light mb-8 text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              ASPIRING AI DEVELOPER
            </motion.h2>
          </motion.div>

          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <p className="text-xl md:text-2xl text-gray-400 mb-6 max-w-3xl mx-auto leading-relaxed">
              Building end-to-end ML solutions with TensorFlow, PyTorch, and Transformers. Passionate about deep
              learning, computer vision, and NLP.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button
                size="lg"
                variant="outline"
                className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 bg-transparent"
                onMouseEnter={() => setCursorVariant("hover")}
                onMouseLeave={() => setCursorVariant("default")}
                onClick={() =>
                  window.open("https://drive.google.com/file/d/1zMDmBpNa8jr_1TbCHwC1x05xOSdvyZ_D/view", "_blank")
                }
              >
                <Eye className="w-5 h-5 mr-2" />
                Resume
              </Button>
              <div className="flex space-x-3">
                {[
                  { icon: Github, href: "https://github.com/BandaAkshith", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/akshithkrishnabanda", label: "LinkedIn" },
                  { icon: Code, href: "https://leetcode.com/u/AkshithKrishnaBanda/", label: "LeetCode" },
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    onMouseEnter={() => setCursorVariant("hover")}
                    onMouseLeave={() => setCursorVariant("default")}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="py-20 px-6 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-semibold mb-6 text-white">Professional Summary</h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Aspiring AI Developer with hands-on experience designing and implementing end-to-end machine
                    learning solutions using TensorFlow, PyTorch, and Transformer architectures. Skilled in developing
                    and deploying full-stack AI applications leveraging FastAPI for backend services and React for
                    dynamic user interfaces. Strong passion for deep learning, natural language processing, and computer
                    vision, with a focus on building innovative, real-world AI solutions.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-semibold mb-12 text-white text-center">Technical Skills</h3>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Programming Languages */}
                <div className="space-y-6">
                  <h4 className="text-xl font-medium text-blue-400 mb-4">Programming Languages</h4>
                  {programmingLanguages.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="flex items-center text-white font-medium">
                          <span className="mr-2 text-lg">{skill.icon}</span>
                          {skill.name}
                        </span>
                        <span className="text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Web Technologies */}
                <div className="space-y-6">
                  <h4 className="text-xl font-medium text-cyan-400 mb-4">Web Technologies</h4>
                  {webTechnologies.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="flex items-center text-white font-medium">
                          <span className="mr-2 text-lg">{skill.icon}</span>
                          {skill.name}
                        </span>
                        <span className="text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* AI/ML Frameworks */}
                <div className="space-y-6">
                  <h4 className="text-xl font-medium text-teal-400 mb-4">AI/ML Frameworks</h4>
                  {aiMlFrameworks.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="flex items-center text-white font-medium">
                          <span className="mr-2 text-lg">{skill.icon}</span>
                          {skill.name}
                        </span>
                        <span className="text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Tools & Databases */}
                <div className="space-y-6">
                  <h4 className="text-xl font-medium text-sky-400 mb-4">Tools & Databases</h4>
                  {toolsAndDatabases.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="flex items-center text-white font-medium">
                          <span className="mr-2 text-lg">{skill.icon}</span>
                          {skill.name}
                        </span>
                        <span className="text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-sky-500 to-blue-500 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="py-20 px-6 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Key Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                onMouseEnter={() => setCursorVariant("hover")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 h-full overflow-hidden group">
                  <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">{project.status}</span>
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span key={tech} className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-white/5 border-white/20 text-white hover:bg-white/10 transition-all duration-300 flex-1"
                        onClick={() => window.open(project.githubUrl, "_blank")}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </Button>
                      {project.liveUrl && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="bg-blue-500/20 border-blue-400/30 text-blue-300 hover:bg-blue-500/30 transition-all duration-300 flex-1"
                          onClick={() => window.open(project.liveUrl, "_blank")}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Certifications Section */}
      <motion.section
        id="certifications"
        className="py-20 px-6 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Certifications
          </motion.h2>

          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
                onMouseEnter={() => setCursorVariant("hover")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                <div className="w-2 h-2 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mr-4 flex-shrink-0" />
                <span className="text-gray-300">{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        id="experience"
        className="py-20 px-6 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Experience
          </motion.h2>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="max-w-2xl mx-auto bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl p-12 border border-blue-500/20"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <motion.div
                className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  scale: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                }}
              >
                <Briefcase className="w-10 h-10 text-white" />
              </motion.div>

              <h3 className="text-2xl font-bold text-white mb-4">Professional Journey Awaits</h3>
              <p className="text-gray-400 text-lg mb-6">
                Currently focused on building innovative AI solutions and expanding technical expertise. Open to
                exciting opportunities in AI/ML research and engineering.
              </p>

              <motion.div
                className="flex justify-center space-x-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <motion.div
                  className="px-4 py-2 bg-blue-500/20 rounded-full text-blue-400 text-sm border border-blue-500/30"
                  whileHover={{ scale: 1.05 }}
                >
                  Seeking Opportunities
                </motion.div>
                <motion.div
                  className="px-4 py-2 bg-cyan-500/20 rounded-full text-cyan-400 text-sm border border-cyan-500/30"
                  whileHover={{ scale: 1.05 }}
                >
                  AI/ML Focus
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-20 px-6 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Let's Connect
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Seeking opportunities in AI/ML research and engineering. Let's build something amazing together!
          </motion.p>

          <motion.div
            className="grid md:grid-cols-2 gap-8 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6">
              <CardContent className="p-0 text-center">
                <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <a
                  href="mailto:bakshith1806@gmail.com"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                  onMouseEnter={() => setCursorVariant("hover")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  bakshith1806@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6">
              <CardContent className="p-0 text-center">
                <Phone className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <a
                  href="tel:+918639865220"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                  onMouseEnter={() => setCursorVariant("hover")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  +91 8639865220
                </a>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="flex justify-center space-x-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center gap-6">
              <Button
                size="lg"
                variant="outline"
                className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 bg-transparent"
                onMouseEnter={() => setCursorVariant("hover")}
                onMouseLeave={() => setCursorVariant("default")}
                onClick={() =>
                  window.open("https://drive.google.com/file/d/1zMDmBpNa8jr_1TbCHwC1x05xOSdvyZ_D/view", "_blank")
                }
              >
                <Eye className="w-5 h-5 mr-2" />
                Resume
              </Button>
              <div className="flex space-x-4">
                {[
                  { icon: Github, href: "https://github.com/BandaAkshith", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/akshithkrishnabanda", label: "LinkedIn" },
                  { icon: Code, href: "https://leetcode.com/u/AkshithKrishnaBanda/", label: "LeetCode" },
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    onMouseEnter={() => setCursorVariant("hover")}
                    onMouseLeave={() => setCursorVariant("default")}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">© 2025 Akshith Krishna Banda. Crafted with passion and code.</p>
        </div>
      </footer>
    </div>
  )
}
