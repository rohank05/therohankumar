import { Briefcase, MapPin, Calendar } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: 'SENIOR SOFTWARE ENGINEER',
    company: 'TechCorp Industries',
    location: 'San Francisco, CA',
    period: '2022 - PRESENT',
    achievements: [
      'Led development of microservices architecture serving 1M+ users',
      'Reduced application load time by 60% through optimization',
      'Mentored team of 5 junior developers',
      'Implemented CI/CD pipeline reducing deployment time by 80%'
    ],
    color: '#ff00ff',
    level: 'LEVEL 5'
  },
  {
    id: 2,
    role: 'FULL STACK DEVELOPER',
    company: 'StartupXYZ',
    location: 'Remote',
    period: '2020 - 2022',
    achievements: [
      'Built and deployed 10+ client projects from scratch',
      'Integrated payment systems processing $2M+ annually',
      'Developed real-time collaboration features',
      'Achieved 99.9% uptime for production applications'
    ],
    color: '#00ffff',
    level: 'LEVEL 4'
  },
  {
    id: 3,
    role: 'JUNIOR DEVELOPER',
    company: 'Digital Solutions Inc',
    location: 'New York, NY',
    period: '2018 - 2020',
    achievements: [
      'Contributed to frontend development of e-commerce platform',
      'Wrote comprehensive unit tests achieving 90% coverage',
      'Collaborated with UX team to improve user experience',
      'Fixed 200+ bugs and implemented new features'
    ],
    color: '#00ff00',
    level: 'LEVEL 3'
  }
];

export function Experience() {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6 px-6 py-2 border-4 border-[#00ffff] bg-black/50">
            <div className="flex items-center gap-2 text-[#00ffff]">
              <Briefcase className="w-5 h-5" />
              <span className="text-xs">BATTLE_HISTORY</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl glow-text mb-4" style={{ color: '#00ffff' }}>
            EXPERIENCE_LOG
          </h2>
          <p className="text-xs" style={{ color: '#ff00ff' }}>
            {'> CAREER_PROGRESSION.LOAD()'}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#ff00ff] via-[#00ffff] to-[#00ff00]" 
            style={{ transform: 'translateX(-50%)' }}
          />

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0 ? 'md:pr-[52%]' : 'md:pl-[52%]'
              }`}
            >
              {/* Timeline dot */}
              <div className="hidden md:block absolute top-8 left-1/2 w-6 h-6 border-4 bg-black"
                style={{ 
                  borderColor: exp.color,
                  transform: 'translateX(-50%)',
                  boxShadow: `0 0 20px ${exp.color}`
                }}
              />

              {/* Experience card */}
              <div
                className="pixel-border p-6 bg-black/50 hover:bg-black/70 transition-all duration-300"
                style={{ borderColor: exp.color }}
              >
                {/* Level badge */}
                <div className="inline-block mb-4 px-3 py-1 border-2 bg-black"
                  style={{ borderColor: exp.color, color: exp.color }}>
                  <span className="text-[10px]">{exp.level}</span>
                </div>

                {/* Role and company */}
                <h3 className="text-sm mb-2" style={{ color: exp.color }}>
                  {exp.role}
                </h3>
                <div className="text-xs mb-4" style={{ color: '#ffff00' }}>
                  {exp.company}
                </div>

                {/* Location and period */}
                <div className="flex flex-wrap gap-4 mb-4 text-[10px]" style={{ color: '#00ffff' }}>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {exp.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {exp.period}
                  </div>
                </div>

                {/* Achievements */}
                <div className="text-[10px] space-y-2" style={{ color: '#00ff00' }}>
                  <div className="mb-2" style={{ color: '#ff00ff' }}>ACHIEVEMENTS:</div>
                  {exp.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex gap-2">
                      <span style={{ color: exp.color }}>▸</span>
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
