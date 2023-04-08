import Sidebar from '@/components/Sidebar';
import HomeContainer from '@/components/HomeContainer';
import SpeedDial from '@/components/SpeedDial';

export default function Home() {
  return (
    <div className='flex bg-bg'>
      <Sidebar />
      <HomeContainer />
      <SpeedDial />
    </div>
  );
}
