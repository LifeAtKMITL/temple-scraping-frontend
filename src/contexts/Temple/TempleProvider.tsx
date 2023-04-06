import { PropsWithChildren, useEffect, useState } from 'react';
import TempleContext from './TempleContext';
import { TemplesObject } from '@/types';
import { getTemples as getTemplesAPI } from '@/api';

const TempleProvider = ({ children }: PropsWithChildren) => {
  const [provinces, setProvinces] = useState<TemplesObject[] | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  const getTemples = async () => {
    await getTemplesAPI(setProvinces);
    setIsLoading(false);
  };

  useEffect(() => {
    getTemples();
  }, []);

  return <TempleContext.Provider value={{ provinces, isLoading }}>{children}</TempleContext.Provider>;
};

export default TempleProvider;
