import Sidebar from '@/components/Sidebar';
import HomeContainer from '@/components/HomeContainer';

export default function Home() {
  return (
    <div className='flex bg-bg'>
      <Sidebar />
      <HomeContainer />
    </div>
  );
}
