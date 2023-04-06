import React from 'react';

// import framer hooks
import { useMotionValue, useTransform, motion } from 'framer-motion';
import { type } from 'os';
import { GoMarkGithub } from 'react-icons/go';
import { Link } from 'react-router-dom';

interface IMember {
  _id: string;
  name: string;
  studentId: string;
  img: string;
  github: string;
  quotation: string;
}

export default function CardAbout({ name, studentId, img, github, quotation }: IMember) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  const colors = [
    { value: '#0D0D0D' },
    { value: '#091926' },
    { value: '#174873' },
    { value: '#5185A6' },
    { value: '#ffffff' },
  ];

  return (
    // card wrapper
    <div
      style={{ perspective: 2000 }}
      className='transition ease-in-out  hover:-translate-y-1 hover:scale-100 duration-200'
    >
      {/* card */}
      <motion.div
        style={{ x, y, rotateX, rotateY, z: 100 }}
        drag
        dragElastic={0.18}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: 'grabbing' }}
        className='w-[350px] min-h-[500px] bg-[#1E293B] rounded-[30px] border-[2px] border-[#e7e7e7] px-[40px] py-[24px] cursor-grab relative'
      >
        <div className='text-xl mb-4 text-[#e7e7e7]'>{studentId}</div>
        {/* card title */}
        <h1 className='text-5xl mb-6 font-extrabold text-[#5EE8D5]'>{name}</h1>
        {/* card subtitle */}
        <p className='max-w-[300px] text-[#e7e7e7] mb-6 text-[26px]'>
          <q>{quotation}</q>
        </p>

        {/* colors */}
        <ul className='flex gap-x-[10px]'>
          {colors.map((color, index) => {
            return (
              <li
                key={index}
                style={{ backgroundColor: color.value }}
                className='w-7 h-7 rounded-full cursor-pointer'
              ></li>
            );
          })}
        </ul>

        <Link to={github} target='blank'>
          <GoMarkGithub className='absolute bottom-4 text-[28px] text-[#e7e7e7]' />
        </Link>

        {/* card image */}
        <motion.div
          style={{ x, y, rotateX, rotateY, z: 100000 }}
          className='absolute bottom-0 -right-[180px] w-[300px]'
        >
          <img src={img} alt='' draggable='false' />
        </motion.div>
      </motion.div>
    </div>
  );
}