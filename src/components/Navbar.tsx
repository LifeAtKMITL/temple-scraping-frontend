import useFilter from '@/hooks/useFilter';
import SearchBox from './SearchBox';

export default function Navbar() {
  return (
    <div className='xl:hidden pt-8 pb-6 mb-2'>
      <h1 className='text-white sukhumvit-bold pl-1 mb-6 text-xl'>กลุ่ม ณัฐนันท์สุดเฟี้ยวกับไอเสี่ยวทั้ง 9</h1>

      <SearchBox bgColor='secondary' />

      <FilterSection />
    </div>
  );
}

// ----------------------------------------------

const options = ['ราชบุรี', 'ลำปาง', 'ลพบุรี', 'ลำพูน'];

function FilterSection() {
  const { filterList, setFilterList } = useFilter();

  const isActive = (option: string) => filterList.includes(option);

  const handleClick = (option: string) => () => {
    if (isActive(option)) {
      setFilterList(filterList.filter((item) => item !== option));
      return;
    }

    setFilterList([...filterList, option]);
  };

  return (
    <div className='flex gap-2 mt-3 pl-1'>
      {options.map((option) => (
        <button
          key={option}
          className={
            'border border-opaque-white px-4 py-1 rounded-full md:my-2 ' +
            (isActive(option) ? 'bg-teal-400 border-teal-400 text-bg ' : 'text-opaque-white')
          }
          onClick={handleClick(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
