import { Code, Database, Wrench, Zap } from 'lucide-react';

const skillCategories = [
  {
    id: 1,
    category: 'FRONTEND',
    icon: Code,
    color: '#ff00ff',
    skills: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Vue.js', level: 75 }
    ]
  },
  {
    id: 2,
    category: 'BACKEND',
    icon: Database,
    color: '#00ffff',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'MongoDB', level: 85 },
      { name: 'GraphQL', level: 75 }
    ]
  },
  {
    id: 3,
    category: 'DEVOPS',
    icon: Wrench,
    color: '#00ff00',
    skills: [
      { name: 'Docker', level: 85 },
      { name: 'AWS', level: 80 },
      { name: 'CI/CD', level: 85 },
      { name: 'Kubernetes', level: 70 },
      { name: 'Git', level: 95 }
    ]
  },
  {
    id: 4,
    category: 'TOOLS',
    icon: Zap,
    color: '#ffff00',
    skills: [
      { name: 'VS Code', level: 95 },
      { name: 'Figma', level: 85 },
      { name: 'Postman', level: 90 },
      { name: 'Jira', level: 80 },
      { name: 'Webpack', level: 75 }
    ]
  }
];

export function Skills() {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6 px-6 py-2 border-4 border-[#00ff00] bg-black/50">
            <div className="flex items-center gap-2 text-[#00ff00]">
              <Zap className="w-5 h-5" />
              <span className="text-xs">SKILL_TREE</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl glow-text mb-4" style={{ color: '#00ff00' }}>
            ABILITIES_&_POWERS
          </h2>
          <p className="text-xs" style={{ color: '#ff00ff' }}>
            {'> DISPLAYING ACQUIRED SKILLS'}
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className="pixel-border p-6 bg-black/50"
                style={{ borderColor: category.color }}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="p-2 border-2"
                    style={{ borderColor: category.color, color: category.color }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-sm" style={{ color: category.color }}>
                    {category.category}
                  </h3>
                </div>

                {/* Skills list */}
                <div className="space-y-4">
                  {category.skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2 text-[10px]">
                        <span style={{ color: '#00ffff' }}>{skill.name}</span>
                        <span style={{ color: category.color }}>
                          {skill.level}%
                        </span>
                      </div>
                      {/* Progress bar container */}
                      <div className="relative h-4 border-2 border-white/30 bg-black/50">
                        {/* Progress fill */}
                        <div
                          className="absolute top-0 left-0 h-full transition-all duration-1000"
                          style={{
                            width: `${skill.level}%`,
                            backgroundColor: category.color,
                            boxShadow: `0 0 10px ${category.color}`
                          }}
                        />
                        {/* Pixel grid overlay */}
                        <div
                          className="absolute inset-0 opacity-20"
                          style={{
                            backgroundImage: `repeating-linear-gradient(
                              0deg,
                              transparent,
                              transparent 2px,
                              rgba(255, 255, 255, 0.1) 2px,
                              rgba(255, 255, 255, 0.1) 4px
                            ),
                            repeating-linear-gradient(
                              90deg,
                              transparent,
                              transparent 2px,
                              rgba(255, 255, 255, 0.1) 2px,
                              rgba(255, 255, 255, 0.1) 4px
                            )`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Category stats */}
                <div className="mt-6 pt-4 border-t-2 border-white/20 flex justify-between text-[10px]">
                  <span style={{ color: '#ffff00' }}>
                    MASTERY: {Math.round(category.skills.reduce((acc, s) => acc + s.level, 0) / category.skills.length)}%
                  </span>
                  <span style={{ color: category.color }}>
                    {category.skills.length} SKILLS
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional skills footer */}
        <div className="mt-12 text-center">
          <div className="inline-block px-6 py-3 border-4 border-[#ffff00] bg-black/50">
            <p className="text-[10px]" style={{ color: '#ffff00' }}>
              ⚡ CONTINUOUS_LEARNING_MODE: ACTIVE ⚡
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
