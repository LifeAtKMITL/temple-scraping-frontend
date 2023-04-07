import ResizeDiv from '@/components/resizeDiv';
import HomeContainer from '@/components/HomeContainer';
import SpeedDial from '@/components/SpeedDial';

export default function Home() {
  return (
    <div className='flex bg-bg'>
      <ResizeDiv />
      <HomeContainer />
      <SpeedDial />
    </div>
  );
}
