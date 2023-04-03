import useTemple from '@/hooks/useTemple';

export default function Home() {
  const { provinces, isLoading } = useTemple();

  return (
    // TODO: example usage (delete later)
    <div className='flex gap-4'>
      {isLoading && <p className='animate-bounce'>Loading...</p>}
      {provinces &&
        provinces.map((province, idx) => {
          return (
            <div key={idx}>
              <h1 className='text-2xl'>{province.province}</h1>
              {province.data.map((name, idx) => {
                return <p key={idx}>{name}</p>;
              })}
            </div>
          );
        })}
    </div>
  );
}
