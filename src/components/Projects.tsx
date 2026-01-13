import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: 'OpenianDevelopment',
        desc: 'Building innovative open-source solutions and developer tools.',
        tech: ['Next.js', 'Typescript', 'Open Source'],
        link: '#',
        code: 'https://github.com/rohank05',
        color: '#ff00ff'
    },
    {
        title: 'Menhera-Chan',
        desc: 'A multi-purpose Discord bot serving thousands of servers.',
        tech: ['Node.js', 'Discord.js', 'MongoDB'],
        link: '#',
        code: 'https://github.com/rohank05',
        color: '#00ffff'
    },
    {
        title: 'Portfolio 2024',
        desc: 'This retro-themed portfolio website you are viewing right now.',
        tech: ['React', 'Vite', 'Framer Motion'],
        link: '#',
        code: '#',
        color: '#ffff00'
    },
    {
        title: 'Cloud Systems',
        desc: 'Scalable backend architectures and microservices.',
        tech: ['AWS', 'Docker', 'Kubernetes'],
        link: '#',
        code: 'https://github.com/rohank05',
        color: '#00ff00'
    }
];

export function Projects() {
    return (
        <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-retro glow-text-secondary mb-4 text-secondary">
                    SELECT LEVEL
                </h2>
                <p className="font-tech text-xl text-gray-400">CHOOSE A MISSION TO INSPECT</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="pixel-card p-6 group cursor-pointer"
                        style={{ borderColor: project.color }}
                    >
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="font-retro text-sm md:text-lg" style={{ color: project.color }}>
                                {project.title}
                            </h3>
                            <div className="flex gap-2">
                                <a href={project.code} className="hover:text-white transition-colors" style={{ color: project.color }}>
                                    <Github size={20} />
                                </a>
                                <a href={project.link} className="hover:text-white transition-colors" style={{ color: project.color }}>
                                    <ExternalLink size={20} />
                                </a>
                            </div>
                        </div>

                        <p className="font-tech text-lg mb-6 text-gray-300">
                            {project.desc}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((t) => (
                                <span
                                    key={t}
                                    className="px-2 py-1 text-xs font-retro border border-white/20 text-white/70"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>

                        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
