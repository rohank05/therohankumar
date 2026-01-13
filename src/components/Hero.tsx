import { motion } from 'framer-motion';
import { Terminal, Gamepad2, Code2 } from 'lucide-react';

interface HeroProps {
    readonly onStartGame: () => void;
}

export function Hero({ onStartGame }: HeroProps) {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center p-4 pt-20 text-center">

            <motion.button
                onClick={onStartGame}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
                className="text-accent font-retro text-xs md:text-sm mb-8 tracking-widest hover:scale-110 transition-transform cursor-pointer bg-transparent border-none"
                whileHover={{ textShadow: "0 0 8px #ffff00" }}
            >
                INSERT COIN TO START
            </motion.button>

            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative mb-6"
            >
                <h1 className="text-4xl md:text-7xl font-bold font-retro glow-text text-primary mb-2">
                    ROHAN<br />KUMAR
                </h1>
                <div className="h-1 bg-secondary w-full box-shadow-glow"></div>
            </motion.div>

            <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-xl md:text-3xl text-secondary font-tech tracking-[0.5em] mb-12 uppercase"
            >
                Full Stack Developer
            </motion.h2>

            {/* Stats Container */}
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl"
            >
                <div className="pixel-card p-6 flex flex-col items-center hover:scale-105 transition-transform">
                    <Terminal size={32} className="text-primary mb-4" />
                    <h3 className="font-retro text-xs text-accent mb-2">CLASS</h3>
                    <p className="text-xl">Technomancer</p>
                </div>

                <div className="pixel-card p-6 flex flex-col items-center hover:scale-105 transition-transform">
                    <Code2 size={32} className="text-secondary mb-4" />
                    <h3 className="font-retro text-xs text-accent mb-2">LEVEL</h3>
                    <p className="text-xl">MAX (5Y+ EXP)</p>
                </div>

                <div className="pixel-card p-6 flex flex-col items-center hover:scale-105 transition-transform">
                    <Gamepad2 size={32} className="text-success mb-4" />
                    <h3 className="font-retro text-xs text-accent mb-2">GUILD</h3>
                    <p className="text-xl">Openian Dev</p>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="mt-16"
            >
                <button onClick={onStartGame} className="btn-retro">
                    START GAME
                </button>
            </motion.div>
        </section>
    );
}
