import { Dispatch, SetStateAction, createContext } from 'react';

interface IFilterContext {
  filterList: string[];
  setFilterList: Dispatch<SetStateAction<string[]>>;
}

const FilterContext = createContext({} as IFilterContext);

export default FilterContext;
