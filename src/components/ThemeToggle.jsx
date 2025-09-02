import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === null) return true;
    return storedTheme === 'dark';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <button
      className="fixed bottom-4 right-4 bg-[#65c88c] text-white p-3 rounded-full shadow-lg z-50"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? <Sun /> : <Moon />}
    </button>
  );
};

export default ThemeToggle;
