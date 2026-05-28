import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaJava,
  FaReact,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiAngular,
  SiMysql,
  SiKubernetes,
  SiJenkins,
  SiMongodb,
} from "react-icons/si";

export default function App() {
  const skills = [
    { name: "Java", icon: <FaJava size={35} /> },
    { name: "Spring Boot", icon: <SiSpringboot size={35} /> },
    { name: "React", icon: <FaReact size={35} /> },
    { name: "Angular", icon: <SiAngular size={35} /> },
    { name: "AWS", icon: <FaAws size={35} /> },
    { name: "Docker", icon: <FaDocker size={35} /> },
    { name: "Kubernetes", icon: <SiKubernetes size={35} /> },
    { name: "Jenkins", icon: <SiJenkins size={35} /> },
    { name: "MySQL", icon: <SiMysql size={35} /> },
    { name: "MongoDB", icon: <SiMongodb size={35} /> },
  ];

  const projects = [
    {
      title: "AI-Based Loan Origination System",
      desc: "Enterprise-grade LOS platform built with Spring Boot Microservices, Angular, JWT Security, Kafka, and AWS.",
      tech: ["Spring Boot", "Angular", "Kafka", "AWS"],
    },
    {
      title: "Production Monitoring System",
      desc: "Real-time monitoring and incident handling platform with CI/CD automation and cloud logging.",
      tech: ["Jenkins", "Docker", "CloudWatch", "Linux"],
    },
    {
      title: "Visit Management System",
      desc: "Reactive microservice platform for borrower visit tracking and real-time field monitoring.",
      tech: ["Java", "Microservices", "React", "MongoDB"],
    },
  ];

  return (
    <div className="bg-[#050816] text-white overflow-hidden">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Vivek Kumar
          </h1>

          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>
            <a href="#skills" className="hover:text-cyan-400 transition">
              Skills
            </a>
            <a href="#projects" className="hover:text-cyan-400 transition">
              Projects
            </a>
            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center relative z-10"
        >
          <img
            src="https://i.pravatar.cc/250?img=12"
            alt="profile"
            className="w-44 h-44 rounded-full mx-auto border-4 border-cyan-400 shadow-[0_0_50px_rgba(34,211,238,0.5)]"
          />

          <h2 className="text-5xl md:text-7xl font-extrabold mt-8 leading-tight">
            Java Full Stack
            <span className="block text-cyan-400">Developer</span>
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-lg md:text-xl text-gray-300 leading-8">
            Building scalable enterprise applications using Java, Spring Boot,
            Microservices, React, Angular, AWS, Docker, Kubernetes, and CI/CD.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <a
              href="#projects"
              className="px-8 py-4 rounded-2xl bg-cyan-400 text-black font-bold hover:scale-105 transition"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              className="px-8 py-4 rounded-2xl border border-cyan-400 hover:bg-cyan-400 hover:text-black transition"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="py-28 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold mb-8">
              About <span className="text-cyan-400">Me</span>
            </h2>

            <p className="text-gray-300 leading-8 text-lg">
              I am a Full Stack Developer with 5+ years of experience in
              enterprise banking and financial applications. Specialized in
              Java, Spring Boot Microservices, Angular, React, AWS cloud,
              Production Support, and scalable backend architectures.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-6">
              Experienced in handling critical production incidents, cloud
              deployment, CI/CD pipelines, system optimization, API security,
              and client-facing support operations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl"
          >
            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <h3 className="text-4xl font-bold text-cyan-400">5+</h3>
                <p className="text-gray-400 mt-2">Years Experience</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-cyan-400">20+</h3>
                <p className="text-gray-400 mt-2">Enterprise Modules</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-cyan-400">10+</h3>
                <p className="text-gray-400 mt-2">Technologies</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-cyan-400">24/7</h3>
                <p className="text-gray-400 mt-2">Production Support</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-28 px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-20">
            Technical <span className="text-cyan-400">Skills</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.08 }}
                className="bg-[#0f172a] border border-white/10 rounded-3xl p-8 text-center hover:border-cyan-400 transition-all duration-300"
              >
                <div className="flex justify-center text-cyan-400 mb-4">
                  {skill.icon}
                </div>

                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-28 px-6 max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-20">
          Featured <span className="text-cyan-400">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-[#0f172a] rounded-3xl border border-white/10 p-8 hover:border-cyan-400 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                {project.title}
              </h3>

              <p className="text-gray-300 leading-7 mb-6">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="py-28 px-6 bg-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-20">
            Work <span className="text-cyan-400">Experience</span>
          </h2>

          <div className="relative border-l border-cyan-400 pl-10 space-y-16">
            <div>
              <div className="absolute w-5 h-5 bg-cyan-400 rounded-full -left-[11px]" />
              <h3 className="text-3xl font-bold">Aurionpro</h3>
              <p className="text-cyan-400 mt-2 text-lg">
                Java Full Stack Developer
              </p>
              <p className="text-gray-400 mt-3 leading-8">
                Worked on scalable banking applications, LOS systems,
                production support, AWS deployment, Microservices, Kafka,
                and enterprise integrations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-28 px-6 text-center">
        <h2 className="text-5xl font-bold mb-16">
          Let’s <span className="text-cyan-400">Connect</span>
        </h2>

        <div className="max-w-3xl mx-auto bg-[#0f172a] border border-white/10 rounded-3xl p-12">
          <p className="text-xl text-gray-300 mb-6">
            Open for Full Stack Development, Production Support,
            Microservices, and Cloud opportunities.
          </p>

          <div className="flex justify-center gap-8 text-4xl mb-10">
            <a
              href="https://github.com/vivekkumartech2021"
              target="_blank"
              className="hover:text-cyan-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/vivekkumar3397/"
              target="_blank"
              className="hover:text-cyan-400 transition"
            >
              <FaLinkedin />
            </a>
          </div>

          <a
            href="mailto:vivek.kumar.tech2021@gmail.com"
            className="px-10 py-4 bg-cyan-400 rounded-2xl text-black font-bold hover:scale-105 transition inline-block"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-400">
        © 2026 Vivek Kumar • Java Full Stack Developer
      </footer>
    </div>
  );
}
