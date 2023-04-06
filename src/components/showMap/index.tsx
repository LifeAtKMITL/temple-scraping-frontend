import React, { useState } from 'react';
import RatchaburiIMGDefault from '@/assets/images/Ratchaburi_default.png';
import RatchaburiIMGActive from '@/assets/images/Ratchaburi_active.png';
import LampangIMGDefault from '@/assets/images/Lampang_default.png';
import LampangIMGActive from '@/assets/images/Lampang_active.png';
import LopburiIMGDefault from '@/assets/images/Lopburi_default.png';
import LopburiIMGActive from '@/assets/images/Lopburi_active.png';
import LamphunIMGDefault from '@/assets/images/Lamphun_default.png';
import LamphunIMGActive from '@/assets/images/Lamphun_active.png';
import MapHover from '../map';

const Showmap = () => {
  const [RatchaburiActive, setRatchaburiActive] = useState(false);
  const [LampangActive, setLampangActive] = useState(false);
  const [LopburiActive, setLopburiActive] = useState(false);
  const [LamphunActive, setLamphunActive] = useState(false);

  const handleClickRatchaburi = () => {
    setRatchaburiActive(!RatchaburiActive);
    console.log('Ratchaburi:', RatchaburiActive);
  };
  const handleClickLampang = () => {
    setLampangActive(!LampangActive);
    console.log('Lampang:', LampangActive);
  };
  const handleClickLopburi = () => {
    setLopburiActive(!LopburiActive);
    console.log('Lopburi:', LopburiActive);
  };
  const handleClickLamphun = () => {
    setLamphunActive(!LamphunActive);
    console.log('Lamphun:', LamphunActive);
  };

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
};

export default Showmap;
