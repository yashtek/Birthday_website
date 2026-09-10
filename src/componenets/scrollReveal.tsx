import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "../lib/utils";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "left" | "right" | "up";
  delay?: number;
  className?: string;
}

export function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  className,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const directionClass =
    direction === "left"
      ? "-translate-x-12"
      : direction === "right"
        ? "translate-x-12"
        : "translate-y-12";

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out will-change-transform",
        visible ? "translate-x-0 translate-y-0 opacity-100" : `opacity-0 ${directionClass}`,
        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
