import useTemple from '@/hooks/useTemple';
import { TemplesObject } from '@/types';
import { useRef } from 'react';

const SearchBox = () => {
  const { provinces, setProvincesFilter } = useTemple();

  const textRef = useRef<HTMLInputElement>(null);
  const searching = () => {
    const textSearch = textRef.current?.value || '';
    if (textSearch) {
      const temp = [] as TemplesObject[];
      provinces?.map((p) => {
        temp.push({ province: p.province, data: p.data.filter((e) => e.includes(textSearch)) });
      });
      setProvincesFilter(temp);
    }
    // console.log('fileter', provincesFilter);
  };

  return (
    <input
      type='text'
      className='bg-[#ffffff] h-[30px] w-[300px] px-[3px] rounded-md mt-[10px]'
      ref={textRef}
      onChange={() => searching()}
    />
  );
};

export default SearchBox;
