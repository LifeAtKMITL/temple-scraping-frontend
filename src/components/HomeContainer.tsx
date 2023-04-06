import useTemple from '@/hooks/useTemple';
import ExportButton from './ExportButton';

function HomeContainer() {
  const { provinces, isLoading } = useTemple();

  return (
    <div>
      <h1>HomeContainer</h1>
      <ExportButton />
      <div className='flex gap-4'>
        {isLoading && <p className='animate-bounce'>Loading...</p>}
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
