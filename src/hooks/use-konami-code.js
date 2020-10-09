import { useEffect, useState } from 'react';

const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function useKonamiCode() {
  const [index, setIndex] = useState(0);
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    const keyPress = (e) => {
      const code = e.keyCode || e.which || 0;
      if (code === konamiCode[index]) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    };

    document.addEventListener('keyup', keyPress);
    return () => document.removeEventListener('keyup', keyPress);
  }, [index, setIndex]);

  if (index === konamiCode.length && !unlocked) {
    setUnlocked(true);
  }

  return unlocked;
}

export default useKonamiCode;
