import { useEffect, useState } from "react";

// Checks if the div element ENTERS(scrolls into the element - on screen) the viewport and EXITS(keeps scrolling past element - off screen) the viewport
export default function useIsIntersecting(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    });

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}
