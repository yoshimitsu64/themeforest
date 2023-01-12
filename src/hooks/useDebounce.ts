import { useEffect, useState } from 'react';

export const useDebounce = (inputText: string, durationMS: number) => {
  const [debouncedState, setDebouncedState] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedState(inputText);
    }, durationMS);

    return () => clearTimeout(timeout);
  }, [inputText]);

  return debouncedState;
};
