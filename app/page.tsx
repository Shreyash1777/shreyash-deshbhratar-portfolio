"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, ExternalLink, Mail, ChevronDown } from "lucide-react"
import { motion } from "framer-motion"
import Typed from "typed.js"
import { ParticleBackground } from "@/components/particle-background"
import { GlowingBorderButton } from "../components/glowing-border-button"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")
  const [showAllProjects, setShowAllProjects] = useState(false)
  const typedElementRef = useRef(null)
  const homeRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const educationRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  // Typed.js initialization
  useEffect(() => {
    if (typedElementRef.current) {
      const typed = new Typed(typedElementRef.current, {
        strings: ["Software Developer", "Web Developer", "Backend Engineer", "API Tester", "Django & Python Developer"],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1500,
        loop: true,
        showCursor: true,
        cursorChar: "|",
      })

      return () => {
        typed.destroy()
      }
    }
  }, [])

  // Scroll tracking for active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200

      const sections = [
        { id: "home", ref: homeRef },
        { id: "about", ref: aboutRef },
        { id: "projects", ref: projectsRef },
        { id: "skills", ref: skillsRef },
        { id: "education", ref: educationRef },
        { id: "contact", ref: contactRef },
      ]

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section.ref.current && section.ref.current.offsetTop <= scrollPosition) {
          setActiveSection(section.id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Project data
  const projects = [
    {
      title: "Fluera Livre",
      description: "Flower classification using CNN.",
      image: "/Fluer-Livre.jpg?height=300&width=400",
      tech: ["Python", "CNN", "TensorFlow"],
      demo: "https://drive.google.com/drive/folders/1Li8in7RvpzqduPJFpGw0BLQ8fcIWwUsA?usp=sharing",
      github: "#",
    },
    {
      title: "Django Soft Delete Library",
      description: "Custom Django library for soft delete functionality",
      image: "/django.svg",
      tech: ["Python", "Django", "MySQL"],
      demo: "https://drive.google.com/drive/folders/1_ZcmT73mabLG-PgLLpms5E-oys90iTG9?usp=sharing",
      github: "#",
    },
    {
      title: "Scholarship Application Tracker",
      description: "Web application for tracking scholarship applications",
      image: "/sat.png?height=300&width=400",
      tech: ["Python", "Django", "MySQL", "Postman"],
      demo: "https://drive.google.com/drive/folders/1x7qyLWlnfiBvltnP9yjP3ltRYx_Bi9yn?usp=sharing",
      github: "#",
    },
    {
      title: "Industrial Document Generator",
      description: "Automated document generation for industrial use cases",
      image: "/doc-gen.png?height=300&width=400",
      tech: ["Python", "Django", "MySQL", "Postman", "React"],
      demo: "https://drive.google.com/drive/folders/18sggOKF4fOcrz3_Wa2o5XnmrXOTFgV0J?usp=sharing",
      github: "#",
    },
    {
      title: "Django Models Sanity Check Test Script",
      description: "Automated testing script for Django models",
      image: "/django.svg?height=300&width=400",
      tech: ["Python", "Django", "Unittest", "MySQL"],
      demo: "https://drive.google.com/drive/folders/1IwtmlkNldhxb7xIUon59B-Z7gRvl5Pwn?usp=sharing",
      github: "#",
    },
    {
      title: "ATM Simulator",
      description: "Java-based ATM simulation application",
      image: "/atm-simu.jpg?height=300&width=400",
      tech: ["Java", "JWT", "MySQL", "JDBC"],
      demo: "https://drive.google.com/drive/folders/1ZJ6xql28UgUZ4TbxS_vpz5Fm91PW4nBA?usp=sharing",
      github: "#",
    },
  ]

  // Display limited projects or all based on state
  const displayedProjects = showAllProjects ? projects : projects.slice(0, 3)

  const scrollToNextSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Portfolio Button */}
      <div className="fixed top-6 right-6 z-50">
        <GlowingBorderButton
          href="#"
          className="bg-[#38bdf8]/20 text-[#38bdf8] px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 backdrop-blur-sm border border-[#38bdf8]/30"
        >
          <span>Open to Work</span>
        </GlowingBorderButton>
      </div>

      {/* Particle Background */}
      <ParticleBackground />

      {/* Hero Section */}
      <section
        ref={homeRef}
        id="home"
        className="h-screen flex flex-col items-center justify-center px-4 text-center relative"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto z-10 px-4 w-full"
        >
          {/* Header */}
          <h1 className="text-xl sm:text-2xl md:text-3xl text-gray-400 font-light mb-4 text-center">Hi I'm</h1>

          {/* Name with stylized font */}
          <div className="relative w-full mb-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="w-full flex items-center justify-center"
            >
              <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight text-center">
                Shreyash Deshbhratar
              </h1>
            </motion.div>
          </div>

          {/* Typed.js element */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[#38bdf8] text-xl mb-8 h-8"
          >
            <span ref={typedElementRef}></span>
          </motion.div>

          {/* Resume Button */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }}>
            <GlowingBorderButton
              href="https://drive.google.com/drive/folders/1Q_M5BfiuLGtVPqJhxKLbFh5l6aAk78th?usp=sharing"
              className="inline-block bg-[#38bdf8] text-[#0f172a] px-8 py-2 rounded-full text-sm font-medium mb-8"
            >
              Resume
            </GlowingBorderButton>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center gap-6 mb-24"
          >
            <GlowingBorderButton
              href="#"
              className="bg-[#1e293b] p-3 rounded-full hover:bg-[#38bdf8]/20 transition-all duration-300 border border-[#38bdf8]/30"
            >
              <Github className="w-5 h-5 text-[#38bdf8]" />
            </GlowingBorderButton>
            <GlowingBorderButton
              href="mailto:shreyashdeshbhratar@gmail.com"
              className="bg-[#1e293b] p-3 rounded-full hover:bg-[#38bdf8]/20 transition-all duration-300 border border-[#38bdf8]/30"
            >
              <Mail className="w-5 h-5 text-[#38bdf8]" />
            </GlowingBorderButton>
            <GlowingBorderButton
              href="https://www.linkedin.com/in/shreyash-deshbhratar-baa514303/"
              className="bg-[#1e293b] p-3 rounded-full hover:bg-[#38bdf8]/20 transition-all duration-300 border border-[#38bdf8]/30"
            >
              <Linkedin className="w-5 h-5 text-[#38bdf8]" />
            </GlowingBorderButton>
          </motion.div>
        </motion.div>
        {/* Next Section Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-10 left-0 right-0 text-center cursor-pointer"
          onClick={() => scrollToNextSection(aboutRef)}
        >
          <h3 className="text-xl font-semibold text-[#38bdf8] mb-2">About Me</h3>
          <ChevronDown className="w-6 h-6 text-[#38bdf8] mx-auto animate-bounce" />
        </motion.div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} id="about" className="py-20 px-4 min-h-screen flex items-center bg-black">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-16 text-white relative inline-block"
          >
            About
            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-[#38bdf8]"></span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden border-2 border-[#38bdf8]/20">
                <Image
                  src="/Resume-img.jpg"
                  alt="Shreyash Deshbhratar"
                  fill
                  className="object-cover"
                  style={{ filter: "none", mixBlendMode: "normal" }}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <p className="text-gray-300 leading-relaxed">
                I'm Shreyash Deshbhratar, a final-year MCA student at RCOEM, Nagpur, and a passionate software developer
                with experience in web development, API testing, and backend engineering. I enjoy creating efficient,
                scalable applications and thrive in collaborative environments that encourage innovation.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My strengths lie in full-stack development using Python, Django, Java, and MySQL, with hands-on
                experience in unit testing, technical documentation, and Agile methodologies. I’ve developed and
                optimized real-world projects like a Scholarship Tracker Application, and even built a custom Django
                soft delete library. I constantly explore new technologies.
              </p>

              <p className="text-gray-300 leading-relaxed">
                I'm currently seeking opportunities to apply my technical and problem-solving skills to impactful
                projects. I’m driven by curiosity, a strong desire to improve systems, and a commitment to continuous
                learning. Let’s connect and build solutions that make a difference.
              </p>

              <div className="pt-4">
                <Link
                  href="#contact"
                  className="inline-block bg-[#38bdf8]/20 text-[#38bdf8] px-6 py-2 rounded-full text-sm font-medium hover:bg-[#38bdf8]/30 transition-all duration-300 border border-[#38bdf8]/30"
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Next Section Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 text-center cursor-pointer"
            onClick={() => scrollToNextSection(projectsRef)}
          >
            <h3 className="text-xl font-semibold text-[#38bdf8] mb-2">Projects</h3>
            <ChevronDown className="w-6 h-6 text-[#38bdf8] mx-auto animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} id="projects" className="py-20 px-4 min-h-screen flex items-center bg-black">
        <div className="max-w-5xl mx-auto w-full">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-16 text-white relative inline-block"
          >
            Projects
            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-[#38bdf8]"></span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-[#1e293b] rounded-lg overflow-hidden border border-[#38bdf8]/20 group"
              >
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent opacity-60"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-[#38bdf8]">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-xs bg-[#38bdf8]/10 text-[#38bdf8] px-2 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Link
                      href={project.demo}
                      className="text-xs flex items-center gap-1 text-gray-300 hover:text-[#38bdf8] transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </Link>
                    <Link
                      href={project.github}
                      className="text-xs flex items-center gap-1 text-gray-300 hover:text-[#38bdf8] transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="inline-block bg-[#38bdf8]/20 text-[#38bdf8] px-6 py-2 rounded-full text-sm font-medium hover:bg-[#38bdf8]/30 transition-all duration-300 border border-[#38bdf8]/30"
            >
              {showAllProjects ? "Show Less" : "View All Projects"}
            </button>
          </div>

          {/* Next Section Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 text-center cursor-pointer"
            onClick={() => scrollToNextSection(skillsRef)}
          >
            <h3 className="text-xl font-semibold text-[#38bdf8] mb-2">Skills</h3>
            <ChevronDown className="w-6 h-6 text-[#38bdf8] mx-auto animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} id="skills" className="py-20 px-4 min-h-screen flex items-center bg-black">
        <div className="max-w-6xl mx-auto w-full">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className="text-5xl font-bold text-white relative inline-block"
            >
              My
              <br />
              Skills
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-[#38bdf8]"></span>
            </motion.h2>
          </div>

          {/* Languages & Frameworks */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-semibold mb-8 text-center text-white">Languages & Frameworks</h3>
            <div className="bg-[#0a0a0a] border border-[#333] rounded-xl p-6">
              <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9 gap-6 justify-items-center">
                {[
                  { name: "Java", icon: "/java.svg", color: "#f89820" },
                  { name: "Python", icon: "/python.svg", color: "#3776ab" },
                  { name: "Django", icon: "/django.svg", color: "#3776ab" },
                  { name: "C", icon: "/c.svg", color: "#5c6bc0" },
                  { name: "C++", icon: "/cpp.svg", color: "#00599c" },
                  { name: "JavaScript", icon: "/javascript.svg", color: "#f7df1e" },
                  { name: "HTML5", icon: "/html.svg", color: "#e34f26" },
                  { name: "CSS3", icon: "/css3.svg", color: "#1572b6" },
                  { name: "React", icon: "/react.svg", color: "#61dafb" },
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.4, delay: 0.05 * index }}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="flex flex-col items-center"
                  >
                    <div className="w-12 h-12 flex items-center justify-center bg-[#111] rounded-md p-2 mb-2 border border-[#333] shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                      <div className="w-8 h-8 relative">
                        <Image src={skill.icon || "/placeholder.svg"} alt={skill.name} width={32} height={32} />
                      </div>
                    </div>
                    <span className="text-xs text-gray-300 text-center">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Databases & Tools */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-center text-white">Databases & Tools</h3>
            <div className="bg-[#0a0a0a] border border-[#333] rounded-xl p-6">
              <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9 gap-6 justify-items-center">
                {[
                  { name: "MySQL", icon: "/mysql.svg", color: "#4479a1" },
                  { name: "Postgres", icon: "/postgresql.svg", color: "#336791" },
                  { name: "Git", icon: "/git.svg", color: "#f05032" },
                  { name: "GitHub", icon: "/github.png", color: "#ffffff" },
                  { name: "Postman", icon: "/postman.svg", color: "#ff6c37" },
                  { name: "NPM", icon: "/npm.svg", color: "#cb3837" },
                  { name: "Vercel", icon: "/vercel.svg", color: "#ffffff" },
                  { name: "OpenAI", icon: "/openai.svg", color: "#412991" },
                  { name: "Tensor FLow", icon: "/tensor-flow.svg", color: "#f2c811" },
                  { name: "VSCode", icon: "/vs-code.svg", color: "#007acc" },
                  { name: "IntelliJ IDEA", icon: "/intellij.svg", color: "#000000" },
                  { name: "Pycharm", icon: "/pycharm.svg", color: "#f9ab00" },
                  { name: "Figma", icon: "/figma.svg", color: "#f24e1e" },
                  { name: "Docker", icon: "/docker.svg", color: "#3ecf8e" },
                  { name: "AWS", icon: "/aws.svg", color: "#2d3748" },
                  { name: "Jira", icon: "/jira.svg", color: "#0052cc" },
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.4, delay: 0.05 * index }}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="flex flex-col items-center"
                  >
                    <div className="w-12 h-12 flex items-center justify-center bg-[#111] rounded-md p-2 mb-2 border border-[#333] shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                      <div className="w-8 h-8 relative">
                        <Image src={skill.icon || "/placeholder.svg"} alt={skill.name} width={32} height={32} />
                      </div>
                    </div>
                    <span className="text-xs text-gray-300 text-center">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Next Section Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 text-center cursor-pointer"
            onClick={() => scrollToNextSection(educationRef)}
          >
            <h3 className="text-xl font-semibold text-[#38bdf8] mb-2">Education</h3>
            <ChevronDown className="w-6 h-6 text-[#38bdf8] mx-auto animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section ref={educationRef} id="education" className="py-20 px-4 min-h-screen flex items-center bg-black">
        <div className="max-w-5xl mx-auto w-full">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-16 text-white relative inline-block"
          >
            Education
            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-[#38bdf8]"></span>
          </motion.h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#38bdf8] to-[#0ea5e9] transform md:translate-x-px"></div>

            <div className="space-y-12">
              {[
                {
                  degree: "Master of Computer Applications (MCA)",
                  institution: "RCOEM, Nagpur",
                  duration: "2023 - 2025",
                  gpa: "9.11/10",
                  description: "Specialized in Problem Solving and Application developemnt.",
                },
                {
                  degree: "Bachelors in computer science (B.sc.)",
                  institution: "DACN, Nagpur",
                  duration: "2020 - 2023",
                  gpa: "72%",
                  description: "Focused on Computer Science and SQL.",
                },
              ].map((edu, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-5 h-5 bg-[#38bdf8] rounded-full shadow-[0_0_10px_rgba(56,189,248,0.5)] transform -translate-x-1/2 z-10"></div>

                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className={`md:w-1/2 ml-8 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12 md:ml-auto"}`}
                  >
                    <div className="bg-[#1e293b] p-6 rounded-lg border border-[#38bdf8]/20">
                      <h3 className="text-xl font-semibold text-[#38bdf8]">{edu.degree}</h3>
                      <div className="flex justify-between items-center mt-2 mb-4">
                        <span className="text-gray-300">{edu.institution}</span>
                        <span className="text-gray-400 text-sm">{edu.duration}</span>
                      </div>
                      <div className="inline-block bg-[#38bdf8]/10 text-[#38bdf8] px-3 py-1 rounded-full text-sm mb-4">
                        GPA: {edu.gpa}
                      </div>
                      <p className="text-gray-300 text-sm">{edu.description}</p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Section Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 text-center cursor-pointer"
            onClick={() => scrollToNextSection(contactRef)}
          >
            <h3 className="text-xl font-semibold text-[#38bdf8] mb-2">Contact</h3>
            <ChevronDown className="w-6 h-6 text-[#38bdf8] mx-auto animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} id="contact" className="py-20 px-4 min-h-screen flex items-center bg-black">
        <div className="max-w-5xl mx-auto w-full">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-16 text-white relative inline-block"
          >
            Contact
            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-[#38bdf8]"></span>
          </motion.h2>

          <div className="grid md:grid-cols-1 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className="space-y-6 max-w-2xl mx-auto"
            >
              <h3 className="text-xl font-semibold text-[#38bdf8]">Get In Touch</h3>
              <p className="text-gray-300">
                Feel free to reach out to me for any inquiries, collaboration opportunities, or just to say hello!
              </p>

              <div className="space-y-4 mt-8">
                <div className="flex items-center gap-4">
                  <div className="bg-[#1e293b] p-3 rounded-full border border-[#38bdf8]/20">
                    <Mail className="w-5 h-5 text-[#38bdf8]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-400">Email</h4>
                    <p className="text-gray-300">shreyashdeshbhratar@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href="https://shorturl.at/LbRQs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#1e293b] p-3 rounded-full border border-[#38bdf8]/20"
                  >
                    <Linkedin className="w-5 h-5 text-[#38bdf8]" />
                  </a>
                  <div>
                    <h4 className="text-sm font-medium text-gray-400">LinkedIn</h4>
                    <p className="text-gray-300 break-all">linkedin.com/in/shreyash-deshbhratar-baa514303</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-[#1e293b] p-3 rounded-full border border-[#38bdf8]/20">
                    <Github className="w-5 h-5 text-[#38bdf8]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-400">GitHub</h4>
                    <p className="text-gray-300">github.com/username</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-8 justify-center">
                <GlowingBorderButton
                  href="#"
                  className="bg-[#1e293b] p-3 rounded-full hover:bg-[#38bdf8]/20 transition-all duration-300 border border-[#38bdf8]/30"
                >
                  <Github className="w-5 h-5 text-[#38bdf8]" />
                </GlowingBorderButton>
                <GlowingBorderButton
                  href="#"
                  className="bg-[#1e293b] p-3 rounded-full hover:bg-[#38bdf8]/20 transition-all duration-300 border border-[#38bdf8]/30"
                >
                  <Mail className="w-5 h-5 text-[#38bdf8]" />
                </GlowingBorderButton>
                <GlowingBorderButton
                  href="#"
                  className="bg-[#1e293b] p-3 rounded-full hover:bg-[#38bdf8]/20 transition-all duration-300 border border-[#38bdf8]/30"
                >
                  <Linkedin className="w-5 h-5 text-[#38bdf8]" />
                </GlowingBorderButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-gray-400 text-sm border-t border-[#38bdf8]/10 bg-black">
        <p>© {new Date().getFullYear()} Shreyash Deshbhratar. All rights reserved.</p>
      </footer>
    </main>
  )
}
