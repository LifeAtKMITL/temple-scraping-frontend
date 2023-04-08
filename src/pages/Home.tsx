import Sidebar from '@/components/Sidebar';
import HomeContainer from '@/components/HomeContainer';

export default function Home() {
  return (
    <div className='h-screen overflow-hidden bg-bg xl:flex'>
      <Sidebar />
      <HomeContainer />
    </div>
  );
}
