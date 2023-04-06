import { TemplesObject } from '@/types';
import { Dispatch, SetStateAction, createContext } from 'react';

export interface ITempleContext {
  provinces: TemplesObject[] | undefined;
  isLoading: boolean;
  provincesFilter: TemplesObject[];
  setProvincesFilter: Dispatch<SetStateAction<TemplesObject[]>>;
}

const TempleContext = createContext<ITempleContext>({} as ITempleContext);

export default TempleContext;
