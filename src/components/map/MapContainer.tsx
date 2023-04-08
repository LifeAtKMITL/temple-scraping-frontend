import { useState, useEffect } from 'react';
import RatchaburiIMGDefault from '@/assets/images/Ratchaburi_default.png';
import RatchaburiIMGActive from '@/assets/images/Ratchaburi_active.png';
import LampangIMGDefault from '@/assets/images/Lampang_default.png';
import LampangIMGActive from '@/assets/images/Lampang_active.png';
import LopburiIMGDefault from '@/assets/images/Lopburi_default.png';
import LopburiIMGActive from '@/assets/images/Lopburi_active.png';
import LamphunIMGDefault from '@/assets/images/Lamphun_default.png';
import LamphunIMGActive from '@/assets/images/Lamphun_active.png';
import MapHover from './Map';
import useFilter from '@/hooks/useFilter';

export default function MapContainer() {
  const { setFilterList } = useFilter();
  const [RatchaburiActive, setRatchaburiActive] = useState(true);
  const [LampangActive, setLampangActive] = useState(true);
  const [LopburiActive, setLopburiActive] = useState(true);
  const [LamphunActive, setLamphunActive] = useState(true);

  const handleClickRatchaburi = () => {
    setRatchaburiActive(!RatchaburiActive);
  };
  const handleClickLampang = () => {
    setLampangActive(!LampangActive);
  };
  const handleClickLopburi = () => {
    setLopburiActive(!LopburiActive);
  };
  const handleClickLamphun = () => {
    setLamphunActive(!LamphunActive);
  };

  useEffect(() => {
    const activeState = [];
    if (RatchaburiActive) activeState.push('ราชบุรี');
    if (LampangActive) activeState.push('ลำปาง');
    if (LopburiActive) activeState.push('ลพบุรี');
    if (LamphunActive) activeState.push('ลำพูน');
    setFilterList(activeState);
  }, [RatchaburiActive, LampangActive, LopburiActive, LamphunActive]);

  return (
    <div className='relative w-[25rem] 2xl:w-[30rem]'>
      <div className='w-60 absolute top-[100px] 2xl:w-72 2xl:top-[70px]'>
        <MapHover
          imgDefaultPath={LopburiIMGDefault}
          imgActivePath={LopburiIMGActive}
          handleClickMap={handleClickLopburi}
          isActive={LopburiActive}
        />
      </div>
      <div className='w-40 absolute top-[50px] left-[250px] 2xl:w-48 2xl:top-[20px] 2xl:left-[300px]'>
        <MapHover
          imgDefaultPath={LamphunIMGDefault}
          imgActivePath={LamphunIMGActive}
          handleClickMap={handleClickLamphun}
          isActive={LamphunActive}
        />
      </div>
      <div className='w-60 absolute top-[350px] 2xl:w-72 2xl:top-[360px]'>
        <MapHover
          imgDefaultPath={RatchaburiIMGDefault}
          imgActivePath={RatchaburiIMGActive}
          handleClickMap={handleClickRatchaburi}
          isActive={RatchaburiActive}
        />
      </div>
      <div className='w-40 absolute top-[360px] left-[245px] 2xl:w-48 2xl:top-[390px] 2xl:left-[295px]'>
        <MapHover
          imgDefaultPath={LampangIMGDefault}
          imgActivePath={LampangIMGActive}
          handleClickMap={handleClickLampang}
          isActive={LampangActive}
        />
      </div>
    </div>
  );
}