import { ExternalLink, Github, Gamepad2 } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-COMMERCE PLATFORM',
    description: 'Built a full-stack e-commerce solution with React, Node.js, and MongoDB. Features include real-time inventory, payment integration, and admin dashboard.',
    tech: ['REACT', 'NODE.JS', 'MONGODB', 'STRIPE'],
    level: 'LEGENDARY',
    color: '#ff00ff',
    image: 'https://images.unsplash.com/photo-1706466615917-e44750d177d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwcmV0cm8lMjB0ZWNofGVufDF8fHx8MTc2NjkwMjI1N3ww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 2,
    title: 'AI CHAT APPLICATION',
    description: 'Real-time chat app with AI-powered responses. Integrated OpenAI API with WebSocket for instant messaging.',
    tech: ['NEXT.JS', 'OPENAI', 'WEBSOCKET', 'TAILWIND'],
    level: 'EPIC',
    color: '#00ffff',
    image: 'https://images.unsplash.com/photo-1758043323593-d4511bcf82a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXhlbCUyMGFydCUyMGNvZGluZ3xlbnwxfHx8fDE3NjY5MDIyNTd8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 3,
    title: 'TASK MANAGEMENT SaaS',
    description: 'Project management tool with drag-and-drop interface, team collaboration features, and analytics dashboard.',
    tech: ['TYPESCRIPT', 'REACT', 'GRAPHQL', 'POSTGRESQL'],
    level: 'RARE',
    color: '#00ff00',
    image: 'https://images.unsplash.com/photo-1698273300787-f698a50bb250?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRybyUyMGdhbWluZyUyMGFyY2FkZXxlbnwxfHx8fDE3NjY4Mzg4MTh8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 4,
    title: 'MOBILE FITNESS TRACKER',
    description: 'Cross-platform mobile app for tracking workouts, nutrition, and progress with social features.',
    tech: ['REACT NATIVE', 'FIREBASE', 'REDUX', 'CHARTS'],
    level: 'RARE',
    color: '#ffff00',
    image: 'https://images.unsplash.com/photo-1706466615917-e44750d177d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwcmV0cm8lMjB0ZWNofGVufDF8fHx8MTc2NjkwMjI1N3ww&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

export function Projects() {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6 px-6 py-2 border-4 border-[#ff00ff] bg-black/50">
            <div className="flex items-center gap-2 text-[#ff00ff]">
              <Gamepad2 className="w-5 h-5" />
              <span className="text-xs">QUEST_LOG</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl glow-text mb-4" style={{ color: '#ff00ff' }}>
            COMPLETED_QUESTS
          </h2>
          <p className="text-xs" style={{ color: '#00ffff' }}>
            {'> SELECT A PROJECT TO VIEW DETAILS'}
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="pixel-border p-6 bg-black/50 hover:bg-black/70 transition-all duration-300 group cursor-pointer"
              style={{ borderColor: project.color }}
            >
              {/* Project image */}
              <div className="relative overflow-hidden mb-4 border-4 border-white/20">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  style={{ imageRendering: 'pixelated' }}
                />
                <div className="absolute top-2 right-2 px-3 py-1 bg-black/80 border-2"
                  style={{ borderColor: project.color, color: project.color }}>
                  <span className="text-[10px]">{project.level}</span>
                </div>
              </div>

              {/* Project title */}
              <h3 className="text-sm mb-3" style={{ color: project.color }}>
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-[10px] mb-4 leading-relaxed" style={{ color: '#00ffff' }}>
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="text-[8px] px-2 py-1 border-2 border-white/30"
                    style={{ color: '#00ff00' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex gap-3 text-[10px]">
                <button
                  className="flex items-center gap-1 px-3 py-2 border-2 hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform"
                  style={{ color: project.color, borderColor: project.color }}
                >
                  <ExternalLink className="w-3 h-3" />
                  DEMO
                </button>
                <button
                  className="flex items-center gap-1 px-3 py-2 border-2 hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform"
                  style={{ color: project.color, borderColor: project.color }}
                >
                  <Github className="w-3 h-3" />
                  CODE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
