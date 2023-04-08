import useSearch from '@/hooks/useSearch';
import { useRef } from 'react';

const SearchBox = () => {
  const textRef = useRef<HTMLInputElement>(null);
  const { setSearchText } = useSearch();

  const searching = () => {
    const textSearch = textRef.current?.value || '';

    setSearchText(textSearch);
  };

  return (
    <input
      type='text'
      className='bg-bg text-white rounded-md px-4 py-3 w-full ring-teal-400 focus:ring-1 focus:outline-none '
      placeholder='ค้นหาด้วยจังหวัด หรือ ชื่อวัด'
      ref={textRef}
      onChange={searching}
    />
  );
};

export default SearchBox;
