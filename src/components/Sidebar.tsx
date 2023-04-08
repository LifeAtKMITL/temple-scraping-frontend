import SearchBox from './SearchBox';
import { MapContainer } from './map';

const Sidebar = () => {
  return (
    <div className='hidden xl:block pl-5 pr-10 py-10 rounded-r-xl bg-secondary h-screen text-white relative'>
      <h1 className='text-xl mb-8 pl-1'>กลุ่ม ณัฐนันท์สุดเฟี้ยวกับไอเสี่ยวทั้ง 10</h1>
      <SearchBox />
      <MapContainer />
    </div>
  );
};

export default Sidebar;
