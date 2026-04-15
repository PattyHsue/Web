/* ╔══════════════════════════════════════════════╗
   ║  The Trinity Showcase — Hub JS               ║
   ║  Engine: Xavier (XSS) + Ada (AAL)            ║
   ╚══════════════════════════════════════════════╝ */

(function() {
    'use strict';

    // 1. Dynamic Background Glow
    const bgGlow = document.getElementById('bg-glow');
    const cards = document.querySelectorAll('.gallery-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const color = card.getAttribute('data-color') || 'rgba(100, 150, 255, 0.2)';
            bgGlow.style.background = `radial-gradient(circle, ${color} 0%, transparent 60%)`;
        });
        
        card.addEventListener('mouseleave', () => {
            bgGlow.style.background = `radial-gradient(circle, rgba(100, 150, 255, 0.1) 0%, transparent 60%)`;
        });
    });

    // 2. FPS Monitor (Performance Metric)
    const fpsValue = document.getElementById('fps');
    let lastTime = performance.now();
    let frames = 0;

    function calcFPS() {
        requestAnimationFrame(() => {
            const now = performance.now();
            frames++;
            if (now > lastTime + 1000) {
                let fps = Math.round((frames * 1000) / (now - lastTime));
                fpsValue.textContent = fps;
                
                // Color coding based on perf
                if(fps < 30) {
                    fpsValue.style.color = '#f87171'; // Red
                } else if(fps < 50) {
                    fpsValue.style.color = '#fbbf24'; // Yellow
                } else {
                    fpsValue.style.color = '#4ade80'; // Green
                }

                frames = 0;
                lastTime = now;
            }
            calcFPS();
        });
    }
    calcFPS();

    // 3. Particle System
    const particleContainer = document.getElementById('particles');
    const PARTICLE_COUNT = 30;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
        createParticle();
    }

    function createParticle() {
        const p = document.createElement('div');
        p.className = 'particle';
        
        const size = Math.random() * 3 + 1;
        p.style.width = `${size}px`;
        p.style.height = `${size}px`;
        p.style.left = `${Math.random() * 100}vw`;
        
        const duration = Math.random() * 10 + 10;
        p.style.animationDuration = `${duration}s`;
        p.style.animationDelay = `-${Math.random() * duration}s`;
        
        particleContainer.appendChild(p);
    }
})();
