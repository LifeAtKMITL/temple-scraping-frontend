import { useEffect } from 'react';
import useTemple from '@/hooks/useTemple';
import ExportButton from './ExportButton';
import useFilter from '@/hooks/useFilter';
import useSearch from '@/hooks/useSearch';

function HomeContainer() {
  const { provinces, isLoading } = useTemple();
  const { filterList } = useFilter();
  const { searchText } = useSearch();

  let temp = provinces?.map((province) => ({
    ...province,
    data: province.data.filter((name) => name.includes(searchText)),
  }));

  temp = temp?.filter((province) => filterList.includes(province.province));
  // const temp = provinces[0].data.filter((name) => name.includes(searchText));

  useEffect(() => {
    console.log({ searchText });
    console.log(filterList);
  }, [searchText, filterList]);

  if (!provinces) return <div></div>;

  return (
    <div className='w-full h-screen px-6 py-8'>
      <div className='h-[95%] flex flex-col gap-4 pl-16 pb-8 pt-8 rounded-xl mb-5'>
        <div className='overflow-y-scroll space-y-6 text-[#E8E8E8]'>
          {isLoading && <p className='animate-bounce'>Loading...</p>}
          {temp &&
            temp.map((province, idx) => (
              <div key={idx} className=''>
                {province.data.length ? <h1 className='text-4xl mb-2'>{province.province}</h1> : null}
                <ul className='grid grid-cols-12 list-inside'>
                  {province.data.map((name, idx) => (
                    <li key={idx} className='col-span-2 xl:col-span-3 lg:col-span-6 md:col-span-6 list-disc'>
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
      <ExportButton />
    </div>
  );
}

export default HomeContainer;
