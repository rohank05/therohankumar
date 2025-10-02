import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Server, Database, Menu, Download, Briefcase, Calendar, MapPin } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const projects = [
    {
      title: "CoolR - IoT Retail Management Platform",
      description: "Contributed to BackStorage replenishment algorithm for automated inventory management. Implemented Redis caching and built Self-Serve Import feature for streamlined client onboarding.",
      tech: ["Node.js", "Redis", "Apache Flink", "StarRocks", "Real-time Analytics"],
      githubLink: ""
    },
    {
      title: "Beat Music – Discord Bot",
      description: "Built a Discord music bot deployed to 200+ servers. Implemented audio filters including Echo and Reverb using Kotlin. Designed architecture to handle concurrent music streaming across multiple servers.",
      tech: ["Kotlin", "Discord API", "Audio Processing"],
      githubLink: "https://github.com/OpenianDevelopment/Beat-Music"
    },
    {
      title: "jikan-api.js",
      description: "Created a TypeScript wrapper for the Jikan API covering most endpoints, with type-safe interfaces and error handling. Published as an NPM package with active community usage.",
      tech: ["TypeScript", "Node.js", "NPM Publishing"],
      githubLink: "https://github.com/rohank05/jikan-api.js"
    },
    {
      title: "Overay – Node.js Backend",
      description: "Secure e-commerce backend with multi-method authentication, ShipRocket integration, and REST/GraphQL APIs for scalable operations.",
      tech: ["Node.js", "Express.js", "MongoDB", "Twilio", "ShipRocket", "GraphQL"],
      liveLink: "https://play.google.com/store/apps/details?id=com.Overay&hl=en_IN",
      githubLink: "https://github.com/rohank05/Overray_Backend"
    },
    {
      title: "Sales MCP Server",
      description: "MySQL integration for AI systems enabling secure database queries through Model Context Protocol for seamless AI-powered sales analytics.",
      tech: ["Node.js", "TypeScript", "MySQL", "Claude Integration"],
      githubLink: "https://github.com/rohank05/sales-mcp-server"
    },
    {
      title: "Want to see more?",
      description: "Head to my GitHub Profile",
      tech: [],
      liveLink: "https://github.com/rohank05",
      githubLink: ""
    }
  ];

  const skills = [
    {
      category: "Frontend",
      items: ["React", "Vue.js", "Material-UI", "Tailwind CSS", "TypeScript", "JavaScript"]
    },
    {
      category: "Backend",
      items: ["Node.js", ".NET Core", "Java", "Python", "C#", "REST API", "GraphQL", "Spring Boot"]
    },
    {
      category: "Database & Tools",
      items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Apache Flink", "StarRocks"]
    },
    {
      category: "Cloud & DevOps",
      items: ["Azure", "Docker", "Git", "CI/CD Pipelines", "Nginx", "MQTT"]
    }
  ];

  const socialLinks = {
    github: "https://github.com/rohank05",
    linkedin: "https://in.linkedin.com/in/rohank05",
    email: "mail@therohankumar.com"
  };

  const experience = {
    current: {
      title: "Jr Software Engineer",
      company: "Spraxa Solutions Pvt. Ltd.",
      location: "Noida Sector 62",
      duration: "March 2023 – Present",
      description: "Developing and maintaining full-stack applications with focus on backend optimization and cloud integration",
      responsibilities: [
        "Built Excel data import feature for Project CoolR to support faster client onboarding and easier data migration",
        "Improved API performance by refining SQL queries and database interactions",
        "Contributed to development of BackStorage replenishment algorithm for inventory management",
        "Integrated Azure AD authentication to enhance security and enable SSO capabilities",
        "Assisted in setting up Apache Flink pipeline to sync data with StarRocks for near real-time analytics",
        "Debugged and resolved production issues, contributing to improved application stability"
      ],
      projects: [
        {
          name: "CoolR – IoT Retail Management Platform",
          highlights: [
            "Contributed to BackStorage replenishment algorithm for automated inventory management",
            "Implemented Redis caching to improve application performance",
            "Built Self-Serve Import feature to streamline client onboarding process",
            "Assisted in configuring Apache Flink pipeline for real-time data synchronization"
          ]
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Hero Section */}
      <header className="bg-white shadow-sm relative">
        <nav className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-gray-800">Rohan Kumar</h1>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu size={24} />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-4">
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Github size={20} />
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href={`mailto:${socialLinks.email}`} className="text-gray-600 hover:text-gray-900 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 py-4 px-4 flex justify-center gap-6 shadow-lg z-50">
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                <Github size={24} />
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                <Linkedin size={24} />
              </a>
              <a href={`mailto:${socialLinks.email}`} className="text-gray-600 hover:text-gray-900">
                <Mail size={24} />
              </a>
            </div>
          )}
        </nav>
        
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Profile Picture */}
            <div className="relative">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <a href='http://www.google.com/search?q=rohank05'>
                  <img 
                  src="/profile.jpeg" 
                  alt="Rohan Kumar"
                  className="w-full h-full object-cover"
                />
                </a>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-2 rounded-full shadow-lg">
                <Code size={20} className="md:w-6 md:h-6" />
              </div>
            </div>
            
            {/* Hero Text */}
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Software Engineer</h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-6">
                Software Engineer with 2+ years of experience developing and maintaining full-stack applications. Skilled in backend development (Node.js, .NET C#, Java) and frontend frameworks (React, Vue.js). Experienced in building APIs, integrating cloud services, and collaborating in agile teams to deliver reliable features and improve performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center md:items-start">
                <a 
                  href="/Rohan_Kumar_Resume.pdf"
                  download="Rohan_Kumar_Resume.pdf"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Download size={20} />
                  Download Resume
                </a>
                <a 
                  href={`mailto:${socialLinks.email}`}
                  className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <Mail size={20} />
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section className="py-12 md:py-16 bg-white" id="skills">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 md:mb-8 text-center md:text-left">Skills & Technologies</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {skills.map((skillSet) => (
              <div key={skillSet.category} className="bg-gray-50 p-4 md:p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  {skillSet.category === "Frontend" && <Code className="text-blue-500" />}
                  {skillSet.category === "Backend" && <Server className="text-green-500" />}
                  {(skillSet.category === "Database & Tools" || skillSet.category === "Cloud & DevOps") && <Database className="text-purple-500" />}
                  {skillSet.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillSet.items.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 border">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-12 md:py-16" id="experience">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 md:mb-8 text-center md:text-left">Work Experience</h3>
          
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
            <div className="flex flex-col md:flex-row md:items-start gap-4 mb-6">
              <div className="flex-shrink-0">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Briefcase className="text-blue-600" size={24} />
                </div>
              </div>
              
              <div className="flex-grow">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{experience.current.title}</h4>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                  <span className="text-lg font-medium text-blue-600">{experience.current.company}</span>
                  <div className="flex items-center gap-4 text-gray-600">
                    <span className="flex items-center gap-1">
                      <MapPin size={16} />
                      {experience.current.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={16} />
                      {experience.current.duration}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{experience.current.description}</p>
                
                <div className="mb-6">
                  <h5 className="font-semibold text-gray-900 mb-3">Key Responsibilities:</h5>
                  <ul className="space-y-2">
                    {experience.current.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-semibold text-gray-900 mb-3">Major Projects:</h5>
                  <div className="grid gap-4">
                    {experience.current.projects.map((project, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <h6 className="font-medium text-gray-900 mb-2">{project.name}</h6>
                        <ul className="space-y-1">
                          {project.highlights.map((highlight, highlightIndex) => (
                            <li key={highlightIndex} className="text-sm text-gray-600 flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 flex-shrink-0"></div>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12 md:py-16" id="projects">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 md:mb-8 text-center md:text-left">Featured Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project) => (
              <div key={project.title} className="group bg-white p-4 md:p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                <div className="mb-4">
                  <h4 className="text-lg font-semibold mb-2 flex items-center justify-between">
                    {project.title}
                    <div className="flex gap-2">
                      {project.githubLink && <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-900 transition-colors"
                        aria-label="View source code"
                      >
                        <Github size={18} />
                      </a>}
                      {project.liveLink && <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-900 transition-colors"
                        aria-label="View live demo"
                      >
                        <ExternalLink size={18} />
                      </a>}
                    </div>
                  </h4>
                  <p className="text-gray-600">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-gray-100 rounded-md text-xs text-gray-600">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-16 bg-white" id="contact">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Let's Work Together</h3>
          <p className="text-gray-600 mb-6 md:mb-8">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <a 
            href={`mailto:${socialLinks.email}`}
            className="inline-block w-full md:w-auto bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t">
        <div className="max-w-6xl mx-auto px-4 py-6 md:py-8">
          <p className="text-center text-gray-600 text-sm md:text-base">
            © 2025 Rohan Kumar. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;