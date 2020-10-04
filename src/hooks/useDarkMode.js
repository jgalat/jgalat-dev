import { useState } from 'react';

function useLocalStorage(key, initial) {
  const [value, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? item : initial;
    } catch (e) {
      return initial;
    }
  });

  const store = (val) => {
    try {
      setValue(val);
      window.localStorage.setItem(key, val);
    } catch (e) {}
  };

  return [value, store];
}

function checkUserPrefersDarkMode() {
  try {
    const storedColorScheme = window.localStorag.getItem('color-scheme');
    if (
      storedColorScheme ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches &&
        !storedColorScheme)
    ) {
      return true;
    }
  } catch (e) {
    return true;
  }
}

function useDarkMode() {
  const [colorScheme, setColorScheme] = useLocalStorage(
    'color-scheme',
    checkUserPrefersDarkMode()
  );
  const toggleColorScheme = () =>
    colorScheme === 'dark' ? setColorScheme('light') : setColorScheme('dark');
  return [colorScheme === 'dark', toggleColorScheme];
}

export default useDarkMode;
