export const getCards = <T>(cards: Array<T>, start = 0, end = 9): Array<T> => {
  return cards.slice(start, end);
};

export const getCardsPromise = <T>(cards: Array<T>, start = 0, end = 9): Promise<T[]> => {
  return Promise.resolve(getCards(cards, start, end));
};
