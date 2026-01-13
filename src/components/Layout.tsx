import React from 'react';

interface LayoutProps {
    readonly children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
    return (
        <div className="min-h-screen scanlines relative bg-[url('https://media.giphy.com/media/uQu9C9wAWEJyw/giphy.gif')]?">
            {/* Background Grid - CSS Pattern */}
            <div
                style={{
                    position: 'fixed',
                    inset: 0,
                    backgroundSize: '40px 40px',
                    backgroundImage: 'linear-gradient(to right, rgba(0, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 0, 255, 0.05) 1px, transparent 1px)',
                    zIndex: -1,
                    transform: 'perspective(500px) rotateX(60deg) translateY(-100px) scale(2)',
                    transformOrigin: 'top center',
                    animation: 'gridScroll 20s linear infinite',
                }}
            />
            <style>{`
        @keyframes gridScroll {
          0% { background-position: 0 0; }
          100% { background-position: 0 40px; }
        }
      `}</style>

            <main className="relative z-10">
                {children}
            </main>
        </div>
    );
}
