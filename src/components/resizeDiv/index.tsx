import React from 'react';
import Showmap from '../showMap';
import SearchBox from '../SearchBox';

interface ArrowProps {
  initialWidth?: number;
}

const ResizeDiv: React.FC<ArrowProps> = () => {
  return (
    <div className='flex px-5 rounded-r-xl bg-bg h-screen text-white'>
      <div className='mr-2.5 relative'>
        <p>LOGO</p>
        <p>ค้นหาด้วยจังหวัดหรือชื่อวัด</p>
        <SearchBox />
        <Showmap />
      </div>
    </div>
  );
};

export default ResizeDiv;
