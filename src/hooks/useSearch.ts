import { useEffect, useState } from 'react';

export const useSearch = <T extends { title: string }>(
  array: Array<T>,
  inputText: string
): Array<T> => {
  const [searchResults, setSearchResults] = useState<Array<T>>([]);

  useEffect(() => {
    if (inputText) {
      setSearchResults(
        array.filter((item) => item.title.toLowerCase().includes(inputText.toLowerCase()) && item)
      );
    }
  }, [array, inputText]);

  return searchResults;
};
