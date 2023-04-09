import SearchContext from '@/contexts/search/SearchContext';
import { useContext } from 'react';

const useSearch = () => {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }

  return context;
};

export default useSearch;
