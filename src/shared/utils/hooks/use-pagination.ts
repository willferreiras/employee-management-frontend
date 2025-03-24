 
import { useState } from "react";

export interface IUsePaginationProps {
  initialPage?: number;
  pageSize: number;
  totalItems?: number;
}

const usePagination = ({
  initialPage = 1,
  pageSize,
  totalItems,
}: IUsePaginationProps) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [totalItemsState, setTotalItemsState] = useState(totalItems);

  const pageCount = !totalItems ? 0 : Math.ceil(totalItems / pageSize);

  const setCurrentPageSafe = (page: number) => {
    if (page < 0 || page >= pageCount) {
      console.warn("Page out of bounds");
      return;
    }
    setCurrentPage(page);
  };

  const setTotalItems = (newTotalItems: number) => {
    totalItems = newTotalItems;
    setTotalItemsState(newTotalItems);
  };

  return {
    currentPage,
    setCurrentPage: setCurrentPageSafe,
    pageCount,
    setTotalItems,
    totalItems: totalItemsState,
  };
};

export default usePagination;
