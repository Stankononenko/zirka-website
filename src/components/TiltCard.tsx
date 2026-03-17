'use client';

import { useRef, useState, ReactNode } from 'react';
import { motion, useSpring } from 'framer-motion';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
}

export default function TiltCard({ children, className = '', maxTilt = 10 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useSpring(0, { stiffness: 400, damping: 40 });
  const y = useSpring(0, { stiffness: 400, damping: 40 });

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct * maxTilt);
    y.set(yPct * -maxTilt);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        transformStyle: 'preserve-3d',
        rotateY: x,
        rotateX: y,
      }}
      className={className}
    >
      <div
        style={{
          transform: isHovered ? 'translateZ(30px)' : 'translateZ(0px)',
          transition: 'transform 0.3s ease',
          height: '100%',
          width: '100%'
        }}
      >
        {children}
      </div>
    </motion.div>
  );
}
