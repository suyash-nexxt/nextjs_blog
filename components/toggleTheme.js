import React, { useState, useEffect } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useTheme } from 'next-themes';

export default function ToggleTheme() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggleDarkMode = (checked) => {
    const isDarkMode = checked;

    if (isDarkMode) setTheme('dark');
    else setTheme('light');
  };

  const isDarkMode = resolvedTheme === 'dark';

  return (
    <>
      {mounted && (
        <DarkModeSwitch checked={isDarkMode} onChange={toggleDarkMode} />
      )}
    </>
  );
}
