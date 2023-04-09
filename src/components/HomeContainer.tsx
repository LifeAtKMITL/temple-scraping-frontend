import useTemple from '@/hooks/useTemple';
import ExportButton from './ExportButton';
import useFilter from '@/hooks/useFilter';
import useSearch from '@/hooks/useSearch';
import Navbar from './Navbar';

const colors = ['text-orange-300', 'text-sky-300', 'text-amber-200', 'text-teal-200'];

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
    <div className='w-full h-screen px-6 flex flex-col pb-10 xl:py-12'>
      <Navbar />

      <div className='h-full overflow-y-scroll space-y-8 text-[#E8E8E8] mb-6'>
        {isLoading && (
          <div className='animate-pulse '>
            <div className='h-10 w-full md:w-80 xl:w-60 bg-slate-700 rounded-full' />
            <ul className='grid grid-cols-12 list-inside mt-8 gap-4'>
              {[...Array(100)].map((_) => (
                <div
                  key={_}
                  className='h-3 w-48 bg-slate-700 rounded-full list-disc  col-span-12 md:col-span-4 xl:col-span-3'
                />
              ))}
            </ul>
          </div>
        )}
        {filtered &&
          filtered.map((province, index) => (
            <div key={province.province} className=''>
              {province.data.length ? (
                <div className='flex items-center gap-6'>
                  <h1 className={`text-5xl ${colors[index]}`}>
                    {province.province}{' '}
                    <span className='text-3xl inline-block -translate-y-1'>({province.data.length})</span>
                  </h1>
                  <div className='h-0.5 grow bg-white xl:mr-10' />
                </div>
              ) : null}
              <ul className='grid grid-cols-12 list-inside mt-4'>
                {province.data.map((name) => (
                  <li key={name} className='list-disc col-span-12 md:col-span-4 xl:col-span-3'>
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
