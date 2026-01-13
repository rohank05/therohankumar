import { motion } from 'framer-motion';

const skills = [
    { category: 'Weapons (Front)', items: ['React', 'Next.js', 'Typescript', 'Tailwind', 'Three.js'] },
    { category: 'Magic (Back)', items: ['Node.js', 'Python', 'Go', 'PostgreSQL', 'GraphQL'] },
    { category: 'Items (Tools)', items: ['Docker', 'AWS', 'Git', 'Linux', 'Vim'] }
];

export function Skills() {
    return (
        <section className="py-20 px-4 max-w-5xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-retro glow-text text-primary mb-4">
                    INVENTORY
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {skills.map((skillGroup, idx) => (
                    <motion.div
                        key={skillGroup.category}
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.2 }}
                        className="border-4 border-[#333] bg-[#111] p-4 relative"
                    >
                        <div className="absolute top-[-12px] left-4 bg-[#111] px-2 text-accent font-retro text-xs border border-accent">
                            {skillGroup.category}
                        </div>

                        <ul className="mt-4 space-y-3">
                            {skillGroup.items.map((item) => (
                                <li key={item} className="flex items-center justify-between font-tech text-lg text-gray-400 border-b border-gray-800 pb-1">
                                    <span>{item}</span>
                                    <span className="text-primary text-xs">LVL 99</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
