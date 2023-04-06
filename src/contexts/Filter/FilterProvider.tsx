import { PropsWithChildren, useState } from 'react';
import FilterContext from './FilterContext';

const FilterProvider = ({ children }: PropsWithChildren) => {
  const [filterList, setFilterList] = useState<string[]>([]);

  return <FilterContext.Provider value={{ filterList, setFilterList }}>{children}</FilterContext.Provider>;
};

export default FilterProvider;
