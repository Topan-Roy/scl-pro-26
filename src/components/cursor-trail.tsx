"use client";

import { useEffect, useMemo, useRef } from "react";

const DOT_COUNT = 14;

type Point = {
  x: number;
  y: number;
};

export function CursorTrail() {
  const dotRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const trail = useRef<Point[]>(Array.from({ length: DOT_COUNT }, () => ({ x: 0, y: 0 })));
  const pointer = useRef<Point>({ x: 0, y: 0 });
  const isActive = useRef(false);
  const frameRef = useRef<number | null>(null);

  const dots = useMemo(() => Array.from({ length: DOT_COUNT }, (_, index) => index), []);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const handleMove = (event: MouseEvent) => {
      pointer.current = { x: event.clientX, y: event.clientY };
      isActive.current = true;
    };

    const handleLeave = () => {
      isActive.current = false;
    };

    const animate = () => {
      const lead = pointer.current;

      trail.current.forEach((point, index) => {
        const target = index === 0 ? lead : trail.current[index - 1];
        point.x += (target.x - point.x) * (index === 0 ? 0.35 : 0.28);
        point.y += (target.y - point.y) * (index === 0 ? 0.35 : 0.28);

        const dot = dotRefs.current[index];
        if (!dot) return;

        const scale = 1 - index / (DOT_COUNT + 4);
        const opacity = isActive.current ? 0.9 - index / (DOT_COUNT * 1.15) : 0;

        dot.style.transform = `translate3d(${point.x - 6}px, ${point.y - 6}px, 0) scale(${scale})`;
        dot.style.opacity = String(Math.max(opacity, 0));
      });

      frameRef.current = window.requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("mouseout", handleLeave);
    frameRef.current = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseout", handleLeave);
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <div aria-hidden="true" className="cursor-trail-layer">
      {dots.map((dot) => (
        <span
          className="cursor-trail-dot"
          key={dot}
          ref={(element) => {
            dotRefs.current[dot] = element;
          }}
        />
      ))}
    </div>
  );
}
