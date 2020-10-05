import { useState } from 'react';

function useLocalStorage(key, initial) {
  const [value, setValue] = useState(() => {
    try {
      const item =
        typeof window !== 'undefined'
          ? window.localStorage.getItem(key)
          : undefined;
      return item ? item : initial;
    } catch (e) {
      return initial;
    }
  });

  const store = (val) => {
    try {
      setValue(val);
      typeof window !== 'undefined' && window.localStorage.setItem(key, val);
    } catch (e) {}
  };

  return [value, store];
}

const defaultColorScheme = 'light';

function checkUserPreference() {
  if (typeof window === 'undefined') {
    return defaultColorScheme;
  }

  try {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
  } catch (e) {}

  return defaultColorScheme;
}

function useDarkMode() {
  const [colorScheme, setColorScheme] = useLocalStorage(
    'color-scheme',
    checkUserPreference()
  );
  const toggleColorScheme = () =>
    colorScheme === 'dark' ? setColorScheme('light') : setColorScheme('dark');
  return [colorScheme === 'dark', toggleColorScheme];
}

export default useDarkMode;
