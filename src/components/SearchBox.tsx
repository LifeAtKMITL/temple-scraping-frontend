import useSearch from '@/hooks/useSearch';
import { useRef } from 'react';

type Props = {
  bgColor?: string;
};

const SearchBox = ({ bgColor = 'bg' }: Props) => {
  const textRef = useRef<HTMLInputElement>(null);
  const { searchText, setSearchText } = useSearch();

  const searching = () => {
    const textSearch = textRef.current?.value || '';

    setSearchText(textSearch);
  };

  return (
    <input
      type='text'
      className={`bg-${bgColor} text-white rounded-md px-4 py-3 w-full ring-teal-400 focus:ring-1 focus:outline-none`}
      placeholder='พิมพ์ค้นหาด้วยชื่อวัด..'
      ref={textRef}
      onChange={searching}
      value={searchText}
    />
  );
};

export default SearchBox;
