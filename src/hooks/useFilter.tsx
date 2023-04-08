import FilterContext from '@/contexts/filter/FilterContext';
import { useContext } from 'react';

const useFilter = () => {
  const context = useContext(FilterContext);

  if (!context) {
    throw new Error('useFilter must be used within a FilterProvider');
  }

  return context;
};

export default useFilter;
