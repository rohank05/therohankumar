import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { X, Trophy, Crosshair } from 'lucide-react';

interface ContraGameProps {
    onClose: () => void;
}

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 400;
const GRAVITY = 0.6;
const JUMP_FORCE = -12;
const GROUND_Y = 350;

export function ContraGame({ onClose }: ContraGameProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);

    // Game State
    const gameState = useRef({
        player: { x: 50, y: GROUND_Y, dy: 0, width: 30, height: 50, isGrounded: true },
        bullets: [] as { x: number; y: number; width: number; height: number }[],
        enemies: [] as { x: number; y: number; width: number; height: number; speed: number }[],
        particles: [] as { x: number; y: number; dx: number; dy: number; life: number; color: string }[],
        keys: { space: false },
        lastShot: 0,
        spawnTimer: 0
    });

    const spawnEnemy = () => {
        gameState.current.enemies.push({
            x: CANVAS_WIDTH,
            y: Math.random() > 0.5 ? GROUND_Y - 40 : GROUND_Y - 120, // Ground or Air
            width: 40,
            height: 40,
            speed: 3 + Math.random() * 2
        });
    };

    const createExplosion = (x: number, y: number, color: string) => {
        for (let i = 0; i < 10; i++) {
            gameState.current.particles.push({
                x, y,
                dx: (Math.random() - 0.5) * 10,
                dy: (Math.random() - 0.5) * 10,
                life: 1.0,
                color
            });
        }
    };

    const gameLoop = useCallback(() => {
        if (!isPlaying || gameOver) return;
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const state = gameState.current;

        // --- UPDATES ---

        // Player Physics
        if (state.keys.space && state.player.isGrounded) {
            state.player.dy = JUMP_FORCE;
            state.player.isGrounded = false;
        }

        state.player.dy += GRAVITY;
        state.player.y += state.player.dy;

        if (state.player.y > GROUND_Y - state.player.height) {
            state.player.y = GROUND_Y - state.player.height;
            state.player.dy = 0;
            state.player.isGrounded = true;
        }

        // Bullets (Auto-fire when playing)
        if (Date.now() - state.lastShot > 300) {
            state.bullets.push({
                x: state.player.x + state.player.width,
                y: state.player.y + 15, // Gun height
                width: 10,
                height: 4
            });
            state.lastShot = Date.now();
        }

        state.bullets.forEach(b => b.x += 10);
        state.bullets = state.bullets.filter(b => b.x < CANVAS_WIDTH);

        // Enemies
        state.spawnTimer++;
        if (state.spawnTimer > 100) { // Spawn rate
            spawnEnemy();
            state.spawnTimer = 0;
        }

        state.enemies.forEach(e => e.x -= e.speed);

        // Collisions
        // Bullet hit Enemy
        state.bullets.forEach((b, bIdx) => {
            state.enemies.forEach((e, eIdx) => {
                if (
                    b.x < e.x + e.width &&
                    b.x + b.width > e.x &&
                    b.y < e.y + e.height &&
                    b.y + b.height > e.y
                ) {
                    // Hit!
                    state.bullets.splice(bIdx, 1);
                    state.enemies.splice(eIdx, 1);
                    createExplosion(e.x + e.width / 2, e.y + e.height / 2, '#ff00ff');
                    setScore(s => s + 100);
                }
            });
        });

        // Enemy hit Player
        for (const e of state.enemies) {
            if (
                state.player.x < e.x + e.width &&
                state.player.x + state.player.width > e.x &&
                state.player.y < e.y + e.height &&
                state.player.y + state.player.height > e.y
            ) {
                setGameOver(true);
                createExplosion(state.player.x, state.player.y, '#00ffff');
            }
        }

        // Clean up off-screen enemies
        state.enemies = state.enemies.filter(e => e.x > -50);

        // Particles
        state.particles.forEach(p => {
            p.x += p.dx;
            p.y += p.dy;
            p.life -= 0.05;
        });
        state.particles = state.particles.filter(p => p.life > 0);


        // --- DRAW ---
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

        // Background (Simple scrolling effect simulation)
        ctx.fillStyle = '#111';
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        // Ground
        ctx.fillStyle = '#222';
        ctx.fillRect(0, GROUND_Y, CANVAS_WIDTH, CANVAS_HEIGHT - GROUND_Y);
        ctx.strokeStyle = '#00ff00';
        ctx.beginPath();
        ctx.moveTo(0, GROUND_Y);
        ctx.lineTo(CANVAS_WIDTH, GROUND_Y);
        ctx.stroke();

        // Player (Green Commando)
        ctx.fillStyle = '#00ffff';
        ctx.fillRect(state.player.x, state.player.y, state.player.width, state.player.height);
        // Gun
        ctx.fillStyle = '#fff';
        ctx.fillRect(state.player.x + 20, state.player.y + 15, 20, 5);

        // Enemies (Red Drones)
        ctx.fillStyle = '#ff00ff';
        state.enemies.forEach(e => {
            ctx.fillRect(e.x, e.y, e.width, e.height);
            // Eye
            ctx.fillStyle = '#ffff00';
            ctx.fillRect(e.x + 5, e.y + 10, 10, 10);
            ctx.fillStyle = '#ff00ff';
        });

        // Bullets
        ctx.fillStyle = '#ffff00';
        state.bullets.forEach(b => ctx.fillRect(b.x, b.y, b.width, b.height));

        // Particles
        state.particles.forEach(p => {
            ctx.globalAlpha = p.life;
            ctx.fillStyle = p.color;
            ctx.fillRect(p.x, p.y, 4, 4);
            ctx.globalAlpha = 1;
        });

        requestAnimationFrame(gameLoop);
    }, [isPlaying, gameOver]);

    // Controls
    useEffect(() => {
        const handleDown = (e: KeyboardEvent) => {
            if ((e.code === 'Space' || e.code === 'ArrowUp') && !e.repeat) {
                gameState.current.keys.space = true;
            }
        };
        const handleUp = (e: KeyboardEvent) => {
            if (e.code === 'Space' || e.code === 'ArrowUp') {
                gameState.current.keys.space = false;
            }
        };

        window.addEventListener('keydown', handleDown);
        window.addEventListener('keyup', handleUp);

        // Start Loop
        let animId: number;
        if (isPlaying && !gameOver) {
            animId = requestAnimationFrame(gameLoop);
        }
        return () => {
            window.removeEventListener('keydown', handleDown);
            window.removeEventListener('keyup', handleUp);
            cancelAnimationFrame(animId);
        };
    }, [isPlaying, gameOver, gameLoop]);

    const restart = () => {
        gameState.current = {
            player: { x: 50, y: GROUND_Y, dy: 0, width: 30, height: 50, isGrounded: true },
            bullets: [],
            enemies: [],
            particles: [],
            keys: { space: false },
            lastShot: 0,
            spawnTimer: 0
        };
        setScore(0);
        setGameOver(false);
        setIsPlaying(true);
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
        >
            <div className="relative w-full max-w-[800px]">
                {/* Header */}
                <div className="flex justify-between items-center mb-4 font-retro text-secondary">
                    <div className="flex items-center gap-2">
                        <Trophy size={20} className="text-accent" />
                        SCORE: {score}
                    </div>
                    <div className="text-xs text-gray-500 animate-pulse">
                        MISSION: SURVIVE
                    </div>
                    <button onClick={onClose} className="hover:text-primary transition-colors">
                        <X size={24} />
                    </button>
                </div>

                {/* Game Canvas */}
                <div className="relative border-4 border-t-primary border-b-secondary border-l-primary border-r-secondary shadow-[0_0_20px_rgba(0,255,255,0.3)] bg-black">
                    <canvas
                        ref={canvasRef}
                        width={CANVAS_WIDTH}
                        height={CANVAS_HEIGHT}
                        className="w-full h-full block"
                    />

                    {/* Start Screen */}
                    {!isPlaying && !gameOver && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 backdrop-blur-sm z-10">
                            <h1 className="text-5xl font-retro glow-text text-primary mb-2">CYBER GUNNER</h1>
                            <p className="text-secondary font-tech tracking-widest mb-8">INFINITE RUN & GUN</p>
                            <button onClick={() => setIsPlaying(true)} className="btn-retro">
                                DEPLOY
                            </button>
                            <p className="mt-4 text-xs font-retro text-gray-500">PRESS SPACE / UP TO JUMP</p>
                        </div>
                    )}

                    {/* Game Over Screen */}
                    {gameOver && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-red-900/40 backdrop-blur-sm z-10">
                            <h2 className="text-6xl font-retro text-red-500 mb-4 glow-text">M.I.A.</h2>
                            <p className="text-2xl font-retro text-white mb-8">FINAL SCORE: {score}</p>
                            <div className="flex gap-4">
                                <button onClick={restart} className="btn-retro border-white text-white hover:bg-white hover:text-black">
                                    RETRY MISSION
                                </button>
                                <button onClick={onClose} className="px-6 py-3 font-retro text-xs border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors">
                                    ABORT
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                <div className="mt-4 flex justify-between font-tech text-gray-500 text-sm">
                    <span><span className="text-accent">CONTROLS:</span> SPACE TO JUMP • AUTO-FIRE ENABLED</span>
                    <span className="flex items-center gap-1"><Crosshair size={14} /> TARGETS DESTROYED: {Math.floor(score / 100)}</span>
                </div>
            </div>
        </motion.div>
    );
}
