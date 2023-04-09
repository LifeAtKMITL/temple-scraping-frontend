import { TemplesObject } from '@/types';
import { createContext } from 'react';

export interface ITempleContext {
  provinces: TemplesObject[] | undefined;
  isLoading: boolean;
}

const TempleContext = createContext<ITempleContext>({} as ITempleContext);

export default TempleContext;
