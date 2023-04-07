import React, { useState, useEffect, useRef, MouseEvent } from 'react';
import './index.css';
import Showmap from '../showMap';
import SearchBox from '../SearchBox';

interface ArrowProps {
  initialWidth?: number;
}

const ResizeDiv: React.FC<ArrowProps> = () => {
  return (
    <div className='content'>
      <div className='actual-content'>
        <p>LOGO</p>
        <p>ค้นหาด้วยจังหวัดหรือชื่อวัด</p>
        <SearchBox />
        <Showmap />
      </div>
    </div>
  );
};

export default ResizeDiv;
