export default function Portfolio() {
  const skills = [
    "Java",
    "Spring Boot",
    "Spring MVC",
    "Spring Security",
    "Microservices",
    "Hibernate",
    "JPA",
    "Kafka",
    "Angular",
    "React",
    "JavaScript",
    "TypeScript",
    "REST APIs",
    "GraphQL",
    "MySQL",
    "MongoDB",
    "SQL",
    "AWS",
    "Lambda",
    "API Gateway",
    "CloudWatch",
    "Jenkins",
    "Docker",
    "Kubernetes",
    "Git",
    "CI/CD",
    "JUnit",
    "Mockito",
    "Postman",
    "Swagger",
    "Redis",
    "Linux",
    "Production Support",
    "Agile",
    "JIRA",
    "System Design",
  ];

  const projects = [
    {
      title: "AI-Based Digital Loan Origination System",
      company: "Aurionpro",
      description:
        "Developed a scalable enterprise-level Loan Origination System using Spring Boot Microservices and Angular.",
      points: [
        "Customer onboarding and KYC verification",
        "Loan processing and underwriting workflow",
        "JWT authentication and role-based access",
        "Document management and notifications",
        "REST API integrations",
        "Production deployment and support",
      ],
    },
    {
      title: "AI-Powered Loan Management System",
      company: "Aurionpro",
      description:
        "Developed intelligent loan workflow management system with automation and reporting.",
      points: [
        "EMI calculator integration",
        "Approval and rejection workflows",
        "AI-based eligibility prediction",
        "Audit tracking and reporting",
        "Document upload and management",
        "Microservice-based architecture",
      ],
    },
    {
      title: "Smart Visit Management System",
      company: "Core Team",
      description:
        "Real-time visitor tracking system using Spring Boot, gRPC, and Reactive Microservices.",
      points: [
        "Real-time visitor location tracking",
        "Field agent route planning",
        "Borrower visit management",
        "Live monitoring dashboard",
        "High-performance reactive APIs",
        "Cloud deployment support",
      ],
    },
    {
      title: "Production Support & Monitoring",
      company: "ART Housing Finance",
      description:
        "Handled critical production support, incident management, and deployment activities.",
      points: [
        "L1/L2/L3 support handling",
        "RCA preparation and issue resolution",
        "SQL debugging and optimization",
        "AWS log monitoring",
        "Jenkins deployment support",
        "24/7 incident handling",
      ],
    },
    {
      title: "E-Sign API Integration",
      company: "IFL Housing Finance",
      description:
        "Integrated secure electronic signature APIs with third-party systems.",
      points: [
        "REST API integration",
        "Secure customer data transfer",
        "Document authentication",
        "API request validation",
        "Encryption and security handling",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-cyan-400">
            Vivek Kumar
          </h1>

          <div className="hidden md:flex gap-6 text-sm">
            <a href="#about" className="hover:text-cyan-400">About</a>
            <a href="#skills" className="hover:text-cyan-400">Skills</a>
            <a href="#projects" className="hover:text-cyan-400">Projects</a>
            <a href="#experience" className="hover:text-cyan-400">Experience</a>
            <a href="#contact" className="hover:text-cyan-400">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-36 pb-24 px-6 text-center bg-gradient-to-br from-gray-950 via-gray-900 to-cyan-950">
        <img
          src="https://i.pravatar.cc/200?img=12"
          alt="profile"
          className="w-40 h-40 rounded-full mx-auto border-4 border-cyan-400 shadow-2xl"
        />

        <h2 className="text-6xl font-extrabold mt-8">
          Java Full Stack Developer
        </h2>

        <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-300 leading-8">
          Results-driven Full Stack Developer with expertise in Java,
          Spring Boot, Angular, Microservices, AWS, Production Support,
          CI/CD, REST APIs, and enterprise banking applications.
        </p>

        <div className="mt-10 flex gap-5 justify-center flex-wrap">
          <a
            href="#projects"
            className="bg-cyan-500 hover:bg-cyan-600 text-black px-8 py-4 rounded-2xl font-bold"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            className="border border-cyan-400 px-8 py-4 rounded-2xl font-bold hover:bg-cyan-500 hover:text-black"
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16">
          About Me
        </h2>

        <div className="bg-gray-900 rounded-3xl p-10 shadow-2xl border border-gray-800">
          <p className="text-lg leading-9 text-gray-300">
            I am a Java Full Stack Developer with 5+ years of experience
            building scalable enterprise applications in BFSI domain.
            Skilled in Spring Boot Microservices, Angular, AWS cloud,
            production support, REST APIs, CI/CD pipelines, and database optimization.
          </p>

          <p className="text-lg leading-9 text-gray-300 mt-6">
            Experienced in handling high-priority production incidents,
            client communication, API integrations, system monitoring,
            deployment management, and Agile development methodologies.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 px-6 bg-gray-900">
        <h2 className="text-5xl font-bold text-center mb-16">
          Technical Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-gray-950 border border-gray-800 rounded-2xl p-5 text-center hover:border-cyan-400 hover:scale-105 transition duration-300"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-900 rounded-3xl p-8 border border-gray-800 hover:border-cyan-400 transition"
            >
              <h3 className="text-2xl font-bold text-cyan-400">
                {project.title}
              </h3>

              <p className="text-sm text-gray-400 mt-2">
                {project.company}
              </p>

              <p className="mt-5 text-gray-300 leading-7">
                {project.description}
              </p>

              <ul className="mt-6 space-y-3 text-gray-300">
                {project.points.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-24 px-6 bg-gray-900">
        <h2 className="text-5xl font-bold text-center mb-16">
          Experience
        </h2>

        <div className="max-w-5xl mx-auto bg-gray-950 rounded-3xl p-10 border border-gray-800">
          <h3 className="text-3xl font-bold text-cyan-400">
            Aurionpro
          </h3>

          <p className="text-gray-400 mt-2 text-lg">
            Java Full Stack Developer
          </p>

          <ul className="mt-8 space-y-4 text-gray-300 leading-8">
            <li>• Developed scalable Microservices using Spring Boot</li>
            <li>• Built Angular frontend modules and APIs</li>
            <li>• Worked on enterprise banking and LOS systems</li>
            <li>• Managed CI/CD pipelines using Jenkins</li>
            <li>• Handled AWS cloud deployment and monitoring</li>
            <li>• Worked on Kafka-based event-driven systems</li>
            <li>• Performed RCA and production support activities</li>
            <li>• Collaborated with cross-functional Agile teams</li>
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 text-center">
        <h2 className="text-5xl font-bold mb-16">
          Contact Me
        </h2>

        <div className="max-w-3xl mx-auto bg-gray-900 rounded-3xl p-10 border border-gray-800">
          <p className="text-xl mb-5 text-gray-300">
            📧 vivek@example.com
          </p>

          <p className="text-xl mb-5 text-gray-300">
            💼 https://www.linkedin.com/in/vivekkumar3397/
          </p>

          <p className="text-xl mb-10 text-gray-300">
            💻 github.com/vivekkumartech2021
          </p>

          <a
            href="mailto:vivek.kumar.tech2021@gmail.com"
            className="bg-cyan-500 hover:bg-cyan-600 text-black px-10 py-4 rounded-2xl font-bold"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-500">
        © 2026 Vivek Kumar | Java Full Stack Developer
      </footer>
    </div>
  );
}