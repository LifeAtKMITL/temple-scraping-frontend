import React, { useState, useEffect, useRef, MouseEvent } from 'react';
import './index.css';

interface ArrowProps {
  initialWidth?: number;
}

const ResizeDiv: React.FC<ArrowProps> = ({ initialWidth = 500 }) => {
  const [width, setWidth] = useState(initialWidth);
  const [dragging, setDragging] = useState(false);
  const dragRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onMouseMove = (event: any) => {
      if (dragging) {
        const newWidth = event.clientX;
        setWidth(newWidth);
      }
    };
    // const onMouseMove = (event: MouseEvent<Element, MouseEvent>) => {
    //   if (dragging) {
    //     const newWidth = event.clientX;
    //     setWidth(newWidth);
    //   }
    // };
    const onMouseUp = () => {
      setDragging(false);
    };
    const target = document.querySelector('html') as HTMLElement;
    target.addEventListener('mousemove', onMouseMove);
    target.addEventListener('mouseup', onMouseUp);
    return () => {
      target.removeEventListener('mousemove', onMouseMove);
      target.removeEventListener('mouseup', onMouseUp);
    };
  }, [dragging]);

  const handleMouseDown = (event: MouseEvent) => {
    setDragging(true);
    dragRef.current = event.target as HTMLDivElement;
  };

  const showContent = width >= 200;

  return (
      <div className='content'
        style={{
          width: `${width}px`,
        }}>
        {showContent && (
          <div className='actual-content'>
            <p>LOGO</p>
            <p>ค้นหาด้วยจังหวัดหรือชื่อวัด</p>
            <input />
            <img className='panda' src='src/assets/images/panda.png' />
          </div>
        )}
        <div className='resize-container'>
          <div className='resize'
            style={{
              position: 'relative',
              minWidth: '5px',
              height: '50px',
              borderRadius: '12px',
              background: 'darkgrey',
              cursor: 'ew-resize',
            }}
            onMouseDown={handleMouseDown}
          />
        </div>
      </div>
  );
};

export default ResizeDiv;