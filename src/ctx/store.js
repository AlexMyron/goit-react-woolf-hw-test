import { createContext, useState } from 'react';

const AppCtx = createContext({
  isModalShown: false,
  toggleModal: () => {},
  currentPage: 1,
  increasePage: () => {},
  resetPage: () => {},
});

export const AppCtxProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalShown, setIsModalShown] = useState(false);

  const increasePage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const resetPage = () => {
    setCurrentPage(1);
  };

  const toggleModal = () => {
    setIsModalShown(prev => !prev)
  }

  return (
    <AppCtx.Provider value={{ currentPage, increasePage, resetPage, isModalShown, toggleModal }}>
      {children}
    </AppCtx.Provider>
  );
};

export default AppCtx;
