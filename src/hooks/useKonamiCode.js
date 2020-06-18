import { useCallback, useEffect, useState } from 'react';

const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function useKonamiCode() {
  const [index, setIndex] = useState(0);
  const [unlocked, setUnlocked] = useState(false);

  const keyPress = useCallback((e) => {
    const code = e.keyCode || e.which || 0;
    if (code === konamiCode[index]) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }, [index, setIndex]);

  useEffect(() => {
    document.addEventListener('keyup', keyPress);
    return () => document.removeEventListener('keyup', keyPress);
  }, [index, keyPress]);

  if (index === konamiCode.length && !unlocked) {
    setUnlocked(true);
  }

  return unlocked;
}

export default useKonamiCode;
