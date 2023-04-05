import useTemple from '@/hooks/useTemple';
import { TemplesObject } from '@/types';
import { useRef } from 'react';

const SearchBox = () => {
  const { provinces, provincesFilter, setProvincesFilter } = useTemple();

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
    console.log('fileter', provincesFilter);
  };

  return (
    <div>
      <input type='text' className='bg-[#707070]' ref={textRef} onChange={() => searching()} />
    </div>
  );
};

export default SearchBox;
