import { useEffect, useState } from 'react';

export const usePaginationValidation = (
  currentPage: number,
  data: Array<any>,
  itemsCount: number
): readonly [boolean, boolean] => {
  const [isAvailableNextPage, setIsAvailableNextPage] = useState<boolean>(true);
  const [isAvailablePrevPage, setIsAvailablePrevPage] = useState<boolean>(true);

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

  return [isAvailableNextPage, isAvailablePrevPage] as const;
};
