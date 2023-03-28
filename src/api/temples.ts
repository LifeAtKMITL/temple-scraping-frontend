import axios from 'axios';
import { TemplesObject } from '@/types';

const getTemples = async (callBack: (response: TemplesObject[]) => void) => {
  const url = 'https://toc-api.zantaclaus.dev/';

  try {
    const res = await axios.get(url);
    callBack(res.data);
  } catch (error) {
    console.log(error);
    return error;
  }
};

export { getTemples };
