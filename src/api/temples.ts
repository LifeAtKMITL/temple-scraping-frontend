import axios from 'axios';
import { TemplesObject } from '@/types';

const getTemples = async (callBack: (response: TemplesObject[]) => void) => {
  const url = '';

  try {
    const res = await axios.get(url);
    callBack(res.data);
  } catch (error) {
    throw error;
  }
};

export { getTemples };
