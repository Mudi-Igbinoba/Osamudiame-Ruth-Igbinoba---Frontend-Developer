import { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export const useSearchContext = () => {
  return useContext(SearchContext);
};

export const SearchProvider = ({ children }) => {
  const [searchFilters, setSearchFilters] = useState({
    status: '',
    originalLaunch: '',
    type: '',
  });

  return (
    <SearchContext.Provider value={{ searchFilters, setSearchFilters }}>
      {children}
    </SearchContext.Provider>
  );
};
