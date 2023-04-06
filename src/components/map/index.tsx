import React from 'react';
import { useRef, useState } from 'react';
import './map.css';

interface IMap {
  imgDefaultPath: string;
  imgActivePath: string;
  isActive: boolean;
  handleClickMap(): void;
}

const MapHover: React.FC<IMap> = ({ imgDefaultPath, imgActivePath, handleClickMap, isActive }) => {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [hover, setHover] = useState(false);

  // Detect transparency of the image
  const isTransparent = (pixelData: Uint8ClampedArray): boolean => {
    console.log(pixelData);
    return pixelData[3] === 0; // Check if alpha channel is 0 (fully transparent)
  };

  // Handle mouse move event
  const handleMouseMove = (event: React.MouseEvent<HTMLImageElement>): void => {
    const img = imageRef.current;
    if (img) {
      const rect = img.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (ctx) {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0, img.width, img.height);
        const pixelData = ctx.getImageData(x, y, 1, 1).data;
        setHover(!isTransparent(pixelData));
      }
    }
  };

  const handleImageClick = () => {
    if (!hover) return;

    handleClickMap();
  };

  return (
    <div>
      {isActive ? (
        <img
          ref={imageRef}
          src={imgActivePath}
          alt='imgProvince'
          className='transition'
          onMouseMove={handleMouseMove}
          onClick={handleImageClick}
        />
      ) : (
        <img
          ref={imageRef}
          src={imgDefaultPath}
          alt='imgProvince'
          className={hover ? 'image hover-effect' : 'image'}
          onMouseMove={handleMouseMove}
          onClick={handleImageClick}
        />
      )}
    </div>
  );
};

export default MapHover;
