
import { Mail, Github, Twitter, Linkedin } from 'lucide-react';

export function Contact() {
    return (
        <section className="py-20 px-4 text-center">
            <div className="max-w-2xl mx-auto pixel-card p-12 border-primary">
                <h2 className="text-3xl md:text-5xl font-retro glow-text mb-8">
                    GAME OVER
                </h2>

                <p className="font-retro text-sm mb-8 text-secondary animate-pulse">
                    CONTINUE?
                </p>

                <div className="flex justify-center gap-8 mb-12">
                    <a href="https://github.com/rohank05" className="hover:scale-125 transition-transform text-gray-400 hover:text-white">
                        <Github size={32} />
                    </a>
                    <a href="#" className="hover:scale-125 transition-transform text-gray-400 hover:text-white">
                        <Linkedin size={32} />
                    </a>
                    <a href="#" className="hover:scale-125 transition-transform text-gray-400 hover:text-white">
                        <Twitter size={32} />
                    </a>
                    <a href="mailto:contact@rohankumar.com" className="hover:scale-125 transition-transform text-gray-400 hover:text-white">
                        <Mail size={32} />
                    </a>
                </div>

                <div className="font-retro text-[10px] text-gray-600">
                    © 2024 ROHAN KUMAR. ALL RIGHTS RESERVED.<br />
                    DESIGNED BY ANTIGRAVITY
                </div>
            </div>
        </section>
    );
}
