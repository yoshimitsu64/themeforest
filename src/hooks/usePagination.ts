import { useEffect, useState } from 'react';

export const usePagination = <T>(
  data: Array<T>,
  itemsCount: number
): readonly [() => void, () => void, boolean, boolean, Array<T>] => {
  const [currentPage, setCurrentPage] = useState(1);

  const [isAvailableNextPage, setIsAvailableNextPage] = useState<boolean>(true);
  const [isAvailablePrevPage, setIsAvailablePrevPage] = useState<boolean>(true);

  const indexOfLastCard = currentPage * itemsCount;
  const indexOfFirstCard = indexOfLastCard - itemsCount;
  const currentCards = data.slice(indexOfFirstCard, indexOfLastCard);

  const handleNextClick = () => {
    isAvailableNextPage && setCurrentPage(currentPage + 1);
  };

  const handlePreviousClick = () => {
    isAvailablePrevPage && setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    if (currentPage * itemsCount < data.length) {
      setIsAvailableNextPage(true);
    } else {
      setIsAvailableNextPage(false);
    }
    if (currentPage > 1) {
      setIsAvailablePrevPage(true);
    } else {
      setIsAvailablePrevPage(false);
    }
  }, [currentPage]);

  return [
    handleNextClick,
    handlePreviousClick,
    isAvailableNextPage,
    isAvailablePrevPage,
    currentCards,
  ] as const;
};
