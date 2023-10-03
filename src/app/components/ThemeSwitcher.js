"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

// REFERENCE next-themes npm package - https://www.npmjs.com/package/next-themes
const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme("dark");

  console.log("theme is: ", theme);
  // Using this to ensure our client and server has the same code to prevent errors when rendering. When our component is mounted, this will be set to true
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      The current theme is: {theme}
      <br />
      <button onClick={() => setTheme("light")} className="bg-slate-800">
        Light Mode
      </button>
      <br />
      <button onClick={() => setTheme("dark")} className="bg-slate-800">
        Dark Mode
      </button>
    </div>
  );
};

export default ThemeSwitcher;
