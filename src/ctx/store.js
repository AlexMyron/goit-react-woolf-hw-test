import { createContext, useState } from 'react';

const PaginationCtx = createContext({
  currentPage: 1,
  increasePage: () => {},
  resetPage: () => {},
});

export const PaginationProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const increasePage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const resetPage = () => {
    setCurrentPage(1);
  };

  return (
    <PaginationCtx.Provider value={{ currentPage, increasePage, resetPage }}>
      {children}
    </PaginationCtx.Provider>
  );
};

export default PaginationCtx;
