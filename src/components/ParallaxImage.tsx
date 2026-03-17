'use client';

import { useRef, useEffect, ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ParallaxImageProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function ParallaxImage({ children, speed = 0.5, className = '', style = {} }: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !imageRef.current) return;
    
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    tl.to(imageRef.current, {
      y: () => window.innerHeight * speed,
      ease: 'none',
    });

    return () => {
      tl.kill();
    };
  }, [speed]);

  return (
    <div ref={containerRef} className={className} style={{ overflow: 'hidden', position: 'relative', ...style }}>
      <div ref={imageRef} style={{ height: `${100 + Math.abs(speed * 100)}%`, width: '100%', position: 'absolute', top: speed < 0 ? 0 : `-${speed * 100}%`, left: 0 }}>
        {children}
      </div>
    </div>
  );
}
