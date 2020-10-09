import { useState, useCallback } from 'react';

import { light, dark } from '../themes';

function useColorScheme() {
  const [colorScheme, setColorScheme] = useState(() => {
    if (typeof window === 'undefined') {
      return 'light';
    }

    const root = window.document.documentElement;
    const initialColorScheme = root.style.getPropertyValue(
      '--initial-color-scheme'
    );
    return initialColorScheme ?? 'light';
  });

  const colorSchemeToggler = useCallback(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const theme = colorScheme === 'dark' ? light : dark;
    const value = colorScheme === 'dark' ? 'light' : 'dark';
    window.localStorage.setItem('color-scheme', value);

    const root = window.document.documentElement;

    Object.entries(theme).forEach(([name, color]) => {
      const varName = `--color-${name}`;
      root.style.setProperty(varName, color);
    });

    setColorScheme(value);
  }, [colorScheme, setColorScheme]);

  return [colorScheme, colorSchemeToggler];
}

export default useColorScheme;
