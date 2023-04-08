import SearchBox from './SearchBox';
import { MapContainer } from './map';

const Sidebar = () => {
  return (
    <div className='flex px-5 rounded-r-xl bg-bg h-screen text-white'>
      <div className='mr-2.5 relative pt-6'>
        <p className='text-lg'>ค้นหาด้วยจังหวัดหรือชื่อวัด</p>
        <SearchBox />
        <MapContainer />
      </div>
    </div>
  );
};

export default Sidebar;
