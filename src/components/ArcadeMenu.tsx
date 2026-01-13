import { motion } from 'framer-motion';
import { X, Ghost, Radio, Crosshair } from 'lucide-react';

interface ArcadeMenuProps {
    onSelectGame: (game: 'SNAKE' | 'PONG' | 'CONTRA') => void;
    onClose: () => void;
}

const games = [
    {
        id: 'SNAKE',
        title: 'SNAKE',
        desc: 'CLASSIC RETRO ACTION',
        difficulty: 'MEDIUM',
        icon: Ghost,
        color: '#00ff00',
        type: 'PUZZLE'
    },
    {
        id: 'PONG',
        title: 'NEON PONG',
        desc: 'VS AI CHALLENGE',
        difficulty: 'HARD',
        icon: Radio,
        color: '#00ffff',
        type: 'SPORTS'
    },
    {
        id: 'CONTRA',
        title: 'CYBER GUNNER',
        desc: 'RUN & GUN SURVIVAL',
        difficulty: 'EXTREME',
        icon: Crosshair,
        color: '#ff00ff',
        type: 'ACTION'
    }
] as const;

export function ArcadeMenu({ onSelectGame, onClose }: ArcadeMenuProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
        >
            <div className="w-full max-w-4xl">
                {/* Header */}
                <div className="flex justify-between items-end mb-8 border-b-4 border-white pb-4">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-retro text-white mb-2 glow-text">ARCADE MODE</h2>
                        <p className="text-accent font-tech tracking-wider text-xl">SELECT YOUR CHALLENGE</p>
                    </div>
                    <button onClick={onClose} className="hover:scale-110 transition-transform bg-white text-black p-2">
                        <X size={32} />
                    </button>
                </div>

                {/* Game Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {games.map((game, index) => (
                        <motion.div
                            key={game.id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, y: -10 }}
                            onClick={() => onSelectGame(game.id as any)}
                            className="group cursor-pointer relative h-[400px] bg-[#111] border-4 flex flex-col overflow-hidden"
                            style={{ borderColor: game.color }}
                        >
                            {/* Card Header (Cartridge Label) */}
                            <div
                                className="p-4"
                                style={{ backgroundColor: game.color }}
                            >
                                <div className="flex justify-between items-center text-black font-retro font-bold">
                                    <span>{game.type}</span>
                                    <game.icon size={24} />
                                </div>
                            </div>

                            {/* Game Preview (Placeholder for aesthetics) */}
                            <div className="flex-1 relative flex items-center justify-center group-hover:bg-white/5 transition-colors p-6">
                                <game.icon size={80} style={{ color: game.color }} className="opacity-50 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Scanline overlay for preview */}
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 pointer-events-none" />
                            </div>

                            {/* Info Footer */}
                            <div className="p-6 border-t-2 border-[#333] bg-black">
                                <h3 className="text-2xl font-retro mb-2 text-white group-hover:text-accent transition-colors">
                                    {game.title}
                                </h3>
                                <p className="font-tech text-gray-400 mb-4">{game.desc}</p>

                                <div className="flex justify-between items-center text-xs font-retro">
                                    <span className="text-gray-600">DIFF:</span>
                                    <span style={{ color: game.color }}>{game.difficulty}</span>
                                </div>
                            </div>

                            {/* Selection Indicator */}
                            <div className="absolute inset-0 border-4 border-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        </motion.div>
                    ))}
                </div>

                <div className="mt-8 text-center font-retro text-xs text-gray-500 animate-pulse">
                    INSERT COIN TO SELECT • FREE PLAY
                </div>
            </div>
        </motion.div>
    );
}
