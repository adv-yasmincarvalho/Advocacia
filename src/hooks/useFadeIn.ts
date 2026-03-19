import { useEffect, useRef, useState } from "react";

export function useFadeIn() {
  const ref = useRef<HTMLDivElement | null>(null);
  const hasAnimated = useRef(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (hasAnimated.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}
