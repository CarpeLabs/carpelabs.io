// ========================================
// Carpe Labs - Minimal Interactions
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    initGlowTracking();
});

// Subtle glow follows mouse
function initGlowTracking() {
    const glow1 = document.querySelector('.glow-1');
    if (!glow1) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        targetX = (x - 0.5) * 50;
        targetY = (y - 0.5) * 50;
    });

    function animate() {
        currentX += (targetX - currentX) * 0.05;
        currentY += (targetY - currentY) * 0.05;

        glow1.style.transform = `translate(${currentX}px, ${currentY}px)`;
        requestAnimationFrame(animate);
    }

    animate();
}
