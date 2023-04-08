import useTemple from '@/hooks/useTemple';
import ExportButton from './ExportButton';
import useFilter from '@/hooks/useFilter';
import useSearch from '@/hooks/useSearch';

function HomeContainer() {
  const { provinces, isLoading } = useTemple();
  const { filterList } = useFilter();
  const { searchText } = useSearch();

  let filtered = provinces?.map((province) => ({
    ...province,
    data: province.data.filter((name) => name.includes(searchText)),
  }));

  filtered = filtered?.filter((province) => filterList.includes(province.province));

  return (
    <div className='w-full h-screen px-6 py-12 flex flex-col'>
      <div className='h-full overflow-y-scroll space-y-8 text-[#E8E8E8] mb-6'>
        {isLoading && <p className='animate-bounce'>Loading...</p>}
        {filtered &&
          filtered.map((province, idx) => (
            <div key={idx} className=''>
              {province.data.length ? (
                <div className='flex items-center gap-4'>
                  <h1 className='text-5xl'>{province.province}</h1>
                  <div className='h-0.5 grow bg-[#E8E8E8]' />
                </div>
              ) : null}
              <ul className='grid grid-cols-12 list-inside mt-4'>
                {province.data.map((name, idx) => (
                  <li key={idx} className='col-span-2 xl:col-span-3 lg:col-span-6 md:col-span-6 list-disc'>
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>

      <ExportButton />
    </div>
  );
}

export default HomeContainer;
