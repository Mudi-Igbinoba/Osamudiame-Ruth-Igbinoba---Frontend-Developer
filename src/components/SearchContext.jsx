import { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useSearchContext = () => {
    return useContext(SearchContext);
};

// eslint-disable-next-line react/prop-types
export const SearchProvider = ({ children }) => {
    const [searchFilters, setSearchFilters] = useState({
        status: '',
        landings: '',
        type: '',
    });

    return (
        <SearchContext.Provider value={{ searchFilters, setSearchFilters }}>
            {children}
        </SearchContext.Provider>
    );
};
