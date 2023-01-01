import { useEffect, useState } from 'react';
import { getCardsPromise } from 'helpers/getCards';

export const usePartialFetch = <T>(array: Array<T>, countOfCards: number): Array<T> => {
  const [cards, setCards] = useState<T[]>([]);

  useEffect(() => {
    getCardsPromise(array, 1, countOfCards).then((items) => {
      setCards(items);
    });
  }, [countOfCards]);

  return cards;
};
