import { useEffect, useState } from "react";

// observer will check if the element has crossed the threshold, if it has, it will mark it as intersecting and stop observing it for the remainder of the application. This is intended to be used ONCE without removing it off the screen.
export default function hasIntersected(ref, threshold) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Element has crossed the threshold, mark it as intersecting and stop observing
          setIntersecting(true);
          observer.unobserve(ref.current);
        }
      },
      {
        threshold, // Set the threshold of element required to be visible to 0.5
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref, threshold]);

  return isIntersecting;
}
