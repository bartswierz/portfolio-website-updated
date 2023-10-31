import { useEffect } from "react";
// import "../styles/globals.css";
import "/src/app/globals.css";
//src/app
function MyApp({ Component, pageProps }) {
  // ... inside MyApp function:

  useEffect(() => {
    window.addEventListener("load", setInitialHeight);
    window.addEventListener("resize", setInitialHeight);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("load", setInitialHeight);
      window.removeEventListener("resize", setInitialHeight);
    };
  }, []);
  // This function sets the initial viewport height
  const setInitialHeight = () => {
    const vh = window.innerHeight;
    document.documentElement.style.setProperty("--initial-vh", `${vh}px`);
  };

  // Run the function on load and on resize
  if (typeof window !== "undefined") {
    window.addEventListener("load", setInitialHeight);
    window.addEventListener("resize", setInitialHeight);
  }

  return <Component {...pageProps} />;
}

export default MyApp;
