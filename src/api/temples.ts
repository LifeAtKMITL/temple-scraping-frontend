import { TemplesObject } from '@/types';
import axios from '@/utils/axios';

const getTemples = async (callBack: (response: TemplesObject[]) => void) => {
  try {
    const res = await axios.get('/');
    console.log(res.data);
    callBack(res.data);
  } catch (error) {
    console.log(error);
    return error;
  }
};

export { getTemples };
