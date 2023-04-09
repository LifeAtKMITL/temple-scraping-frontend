import TempleContext from '@/contexts/temple/TempleContext';
import { useContext } from 'react';

const useTemple = () => {
  const context = useContext(TempleContext);

  if (!context) {
    throw new Error('useTemple must be used within a TempleProvider');
  }

  return context;
};

export default useTemple;
