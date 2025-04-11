import { useEffect, useRef } from "react";
import "./CursorAnimation.css";

const CursorAnimation = () => {
  const cursorRef = useRef(null);
  const trailRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const prevPos = useRef({ x: 0, y: 0 });
  const velocity = useRef({ x: 0, y: 0 });
  const particles = useRef([]);
  const animationId = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      if (!cursorRef.current || !trailRef.current) return;

      // Calculate velocity with damping
      velocity.current = {
        x: (pos.current.x - prevPos.current.x) * 0.3,
        y: (pos.current.y - prevPos.current.y) * 0.3,
      };

      // Update cursor with physics
      cursorRef.current.style.left = `${pos.current.x}px`;
      cursorRef.current.style.top = `${pos.current.y}px`;

      // Add new particles with velocity-based positioning
      for (let i = 0; i < 3; i++) {
        particles.current.push({
          x: pos.current.x - velocity.current.x * i,
          y: pos.current.y - velocity.current.y * i,
          size: Math.random() * 6 + 4,
          life: Math.random() * 30 + 20,
          speed: Math.random() * 0.5 + 0.3,
          angle:
            Math.atan2(velocity.current.y, velocity.current.x) +
            (Math.random() - 0.5) * 0.5,
        });
      }

      // Update and render particles
      updateParticles();

      prevPos.current = { ...pos.current };
      animationId.current = requestAnimationFrame(animate);
    };

    const updateParticles = () => {
      const aliveParticles = [];
      const particleElements = [];

      particles.current.forEach((p) => {
        p.life--;
        p.x += Math.cos(p.angle) * p.speed;
        p.y += Math.sin(p.angle) * p.speed;
        p.size *= 0.97;

        if (p.life > 0 && p.size > 0.5) {
          aliveParticles.push(p);
          const opacity = Math.min(p.life / 30, 1);

          particleElements.push(
            `<div class="particle" style="
                left: ${p.x}px;
                top: ${p.y}px;
                width: ${p.size}px;
                height: ${p.size}px;
                opacity: ${opacity};
                transform: translate(-50%, -50%) rotate(${p.angle}rad);
                background: hsl(${200 + (1 - opacity) * 40}, 100%, ${
              50 + opacity * 30
            }%);
                box-shadow: 0 0 ${p.size * 2}px hsl(${
              200 + (1 - opacity) * 40
            }, 100%, 50%);
              "></div>`
          );
        }
      });

      particles.current = aliveParticles;
      trailRef.current.innerHTML = particleElements.join("");
    };

    window.addEventListener("mousemove", moveCursor);
    animationId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      cancelAnimationFrame(animationId.current);
    };
  }, []);

  return (
    <div className="cursor-container">
      <div ref={cursorRef} className="star-core">
        <div className="core-glow"></div>
        <div className="core-sparkle"></div>
      </div>
      <div ref={trailRef} className="particle-trail"></div>
    </div>
  );
};

export default CursorAnimation;
