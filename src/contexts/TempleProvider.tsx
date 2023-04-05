import { PropsWithChildren, useEffect, useState } from 'react';
import TempleContext from './TempleContext';
import { TemplesObject } from '@/types';
import { getTemples as getTemplesAPI } from '@/api';

const TempleProvider = ({ children }: PropsWithChildren) => {
  const [provinces, setProvinces] = useState<TemplesObject[] | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [provincesFilter, setProvincesFilter] = useState<TemplesObject[]>([]);

  const getTemples = async () => {
    await getTemplesAPI(setProvinces);
    setIsLoading(false);
  };

  useEffect(() => {
    getTemples();
  }, []);

  useEffect(() => {
    setProvincesFilter(provinces || []);
  }, [provinces]);

  return (
    <TempleContext.Provider value={{ provinces, isLoading, provincesFilter, setProvincesFilter }}>
      {children}
    </TempleContext.Provider>
  );
};

export default TempleProvider;
