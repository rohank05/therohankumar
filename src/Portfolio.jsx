import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Server, Database, Menu } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const projects = [
    {
      title: "Overay (Backend)",
      description: "Full-stack e-commerce solution built with React-Native, Node.js, and MongoDB",
      tech: ["Node.js", "MongoDB", "Express", "GraphQL"],
      liveLink: "https://play.google.com/store/apps/details?id=com.Overay&hl=en_IN",
      githubLink: "https://github.com/rohank05/Overray_Backend"
    },
    {
      title: "Beat Music",
      description: "A discord music bot written in Java using JDA and Lavaplayer",
      tech: ["Java", "Audio-Filter", "JDA", "LavaPlayer"],
      githubLink: "https://github.com/OpenianDevelopment/Beat-Music"
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
      items: ["React", "Next.js", "Vue.js", "Tailwind CSS", "TypeScript"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Python", "Express", "REST APIs", "Java", ".NET C#"]
    },
    {
      category: "Database",
      items: ["MongoDB", "PostgreSQL", "Redis", "MySQL", "SQL Server", "StarRocks"]
    }
  ];

  const socialLinks = {
    github: "https://github.com/rohank05",
    linkedin: "https://in.linkedin.com/in/rohank05",
    email: "rohan.shuvam@gmail.com"
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Full Stack Developer</h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
              I am a passionate software developer with expertise across multiple platforms, My journey in the tech world has led me to work with a diverse set of languages, including JavaScript, Java, C#, Python, and Go. 💻 With a knack for problem-solving and a drive for continuous learning.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section className="py-12 md:py-16 bg-white" id="skills">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 md:mb-8 text-center md:text-left">Skills & Technologies</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {skills.map((skillSet) => (
              <div key={skillSet.category} className="bg-gray-50 p-4 md:p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  {skillSet.category === "Frontend" && <Code className="text-blue-500" />}
                  {skillSet.category === "Backend" && <Server className="text-green-500" />}
                  {skillSet.category === "Database" && <Database className="text-purple-500" />}
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
            © 2024 Rohan Kumar. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;