import useSearch from '@/hooks/useSearch';
import { useRef } from 'react';

const SearchBox = () => {
  const textRef = useRef<HTMLInputElement>(null);
  const { setSearchText } = useSearch();
  const searching = () => {
    const textSearch = textRef.current?.value || '';
    if (textSearch) {
      setSearchText(textSearch);
    }
    // console.log('search', searchText);
  };

  return (
    <input
      type='text'
      className='bg-[#ffffff] h-[30px] w-[300px] px-[3px] rounded-md mt-[10px]'
      ref={textRef}
      onChange={searching}
    />
  );
};

export default SearchBox;
