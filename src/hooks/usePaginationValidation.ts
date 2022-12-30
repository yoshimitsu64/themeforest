import { useEffect, useState } from 'react';

export const usePaginationValidation = (
  currentPage: number,
  data: Array<any>
): readonly [boolean, boolean] => {
  const [isAvailableNextPage, setIsAvailableNextPage] = useState<boolean>(true);
  const [isAvailablePrevPage, setIsAvailablePrevPage] = useState<boolean>(true);

  useEffect(() => {
    if (currentPage * 3 < data.length) {
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
