import React, { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const lastFrameTime = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle configuration
    const config = {
      particleCount: 120,
      particleSpread: 15,
      speed: 0.2,
      particleColors: ['#DAA520', '#ffd700', '#b8860b', '#ffdf00', '#ffffff'],
      moveParticlesOnHover: true,
      particleHoverFactor: 2,
      alphaParticles: true,
      particleBaseSize: 3,
      sizeRandomness: 2,
      cameraDistance: 20,
      disableRotation: false
    };

    // Create particles
    const createParticles = () => {
      const particles = [];
      for (let i = 0; i < config.particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * config.cameraDistance,
          vx: (Math.random() - 0.5) * config.speed,
          vy: (Math.random() - 0.5) * config.speed,
          vz: (Math.random() - 0.5) * config.speed * 0.1,
          size: config.particleBaseSize + Math.random() * config.sizeRandomness,
          color: config.particleColors[Math.floor(Math.random() * config.particleColors.length)],
          alpha: config.alphaParticles ? Math.random() * 0.6 + 0.4 : 1,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.02
        });
      }
      return particles;
    };

    particlesRef.current = createParticles();

    // Mouse tracking
    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    // Animation loop with frame rate limiting
    const animate = (currentTime) => {
      // Limit to ~30 FPS for better performance
      if (currentTime - lastFrameTime.current < 33) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      lastFrameTime.current = currentTime;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesRef.current.forEach(particle => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.z += particle.vz;
        
        // Update rotation
        if (!config.disableRotation) {
          particle.rotation += particle.rotationSpeed;
        }
        
        // Optimized mouse interaction
        if (config.moveParticlesOnHover) {
          const dx = mouseRef.current.x - particle.x;
          const dy = mouseRef.current.y - particle.y;
          const distanceSquared = dx * dx + dy * dy;
          
          if (distanceSquared < 10000) { // 100px radius squared
            const distance = Math.sqrt(distanceSquared);
            const force = (100 - distance) / 100;
            particle.x -= dx * force * 0.005 * config.particleHoverFactor;
            particle.y -= dy * force * 0.005 * config.particleHoverFactor;
          }
        }
        
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        // Z-axis boundaries
        if (particle.z < 0) particle.z = config.cameraDistance;
        if (particle.z > config.cameraDistance) particle.z = 0;
        
        // Calculate size based on z-position (perspective)
        const perspective = 1 - (particle.z / config.cameraDistance);
        const size = particle.size * perspective;
        
        // Draw particle with optimized glow
        ctx.save();
        ctx.globalAlpha = particle.alpha * perspective;
        ctx.fillStyle = particle.color;
        
        // Simple glow effect
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = size;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none'
      }}
    />
  );
};

export default ParticleBackground;