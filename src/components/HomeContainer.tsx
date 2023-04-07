import useTemple from '@/hooks/useTemple';
import ExportButton from './ExportButton';

function HomeContainer() {
  const { provinces, isLoading } = useTemple();

  return (
    <div className='w-full h-screen overflow-y-scroll'>
      <h1>HomeContainer</h1>
      <ExportButton />
      <div className='flex gap-4'>
        {isLoading && <div className="flex h-screen w-screen items-center justify-center">
  <button type="button" className="flex items-center rounded-lg bg-green-700 px-4 py-2 text-white" disabled>
    <svg className="mr-3 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
    <span className="font-medium"> Processing... </span>
  </button>
</div>}
        
        {provinces &&
          provinces.map((province, idx) => (
            <div key={idx} className='border-black bg-[#d4d4d4] rounded-md shadow-inner m-2 p-2'>
              <h1 className='text-2xl'>{province.province}</h1>
              {province.data.map((name, idx) => (
                <p key={idx}>{name}</p>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
}

export default HomeContainer;
