import { useState } from 'react';

const imageList = [
  'https://cdn.discordapp.com/attachments/1062631205910097984/1093872540037947492/8bd4fc46-8e4e-414b-a637-afa0b2de2fa5.png',
];
const FirstStep = () => {
  const [imageUrl, setImageUrl] = useState(imageList[0]);

  return (
    <div className='scroll-smooth'>
      <h1 id='stage-1' className='text-3xl text-blue-500'>
        Step 1: Scraping data 🦾 🔎 🧲 ⚙️
      </h1>
      <br></br>
      <div>
        <p>Stage 1 : Scraping ข้อมูลวัดในจังหวัด 🛕 🇹🇭 </p>
      </div>
      <p className='indent-10 px-1 md:px-2 lg:px-4 xl:px-8 2xl:px-16 pt-3'>
        ในขั้นตอนที่ 1 สิ่งที่พวกเราทำคือ การทำ Crawling หรือ Scraping Data กันก่อน
      </p>
      <div className='px-1 md:px-2 lg:px-4 xl:px-8 2xl:px-16'>
        <p>
          โดยเราจะใช้ Source ข้อมูลจาก Website{' '}
          <a
            href='https://th.wikipedia.org/wiki/หมวดหมู่:รายชื่อวัดไทย'
            className='font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 animate-pulse '
          >
            https://th.wikipedia.org/wiki/หมวดหมู่:รายชื่อวัดไทย{' '}
          </a>
          - วิกิพีเดีย หมวดหมู่: รายชื่อวัดไทย
        </p>
        <p>
          เราจะเลือกใช้ข้อมูลจากจังหวัดดังนี้ <button onClick={() => setImageUrl(imageList[0])}>จ.ลำพูน 🐸</button> |{' '}
          <button>จ.ลำปาง 🐟</button> | <button>จ.ลพบุรี 🐵</button> | <button>จ.ราชบุรี 🦙</button>
        </p>
        <br></br>
        <div className='flex justify-center w-auto'>
          <img src={imageUrl} alt='image' className='w-auto md:max-w-xl' />
        </div>
        <div>
          <p className='bg-stone-50 p-2 w-fit rounded-lg shadow mt-5'>import requests</p>
        </div>
        <div className=' border-blue-800 bg-stone-50 shadow border-l-4 border-0 pl-4 pr-6 py-4 rounded-md mt-4'>
          <p>
            <strong> Requests :</strong> Library ของภาษา Python ที่ใช้ในการทำ HTTP Requests ต่างๆ ได้ง่ายและสะดวก เช่น
            GET, POST, PUT, DELETE มีฟังก์ชั่นที่ช่วยให้สร้าง Request ไปยัง Server, รับ Response จาก Server,
            และจัดการกับ Response ได้ง่าย
          </p>
        </div>
        <div>
          <p className='bg-stone-50 p-2 w-fit rounded-lg shadow mt-5'>import re</p>
          <div className=' border-blue-800 bg-stone-50 shadow border-l-4 border-0 pl-4 pr-6 py-4 rounded-md mt-4'>
            <p>
              <strong> re :</strong> Library ของภาษา Python ที่ใช้ในการทำ Regular Expression (Regex)
              ซึ่งเป็นการใช้รูปแบบของตัวอักษร (Pattern) <br></br> เพื่อค้นหาและแก้ไขข้อความตามต้องการ สามารถใช้ re
              ในการค้นหา Pattern ในข้อความ, แทนที่ Pattern ด้วยข้อความอื่น <br></br>
              การตรวจสอบเเละแยกแยะข้อมูลจากข้อความ 🔎
            </p>
          </div>
        </div>
        <br></br>
        <p>
          url ={' '}
          <a
            href='https://th.wikipedia.org/wiki/รายชื่อวัดในจังหวัดลำพูน'
            className='font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 animate-pulse'
          >
            https://th.wikipedia.org/wiki/หมวดหมู่:รายชื่อวัดในจังหวัดลำพูน{' '}
          </a>
          - วิกิพีเดีย หมวดหมู่: รายชื่อวัดในจังหวัดลำพูน
        </p>
        <p>def fetch_data(url)</p>
        <p className='indent-10'>response =requests.get(url) 👈 เราจะได้ ข้อมูล HTML ทั้งหน้าของ จ.ลำพูน</p>
        <p className='indent-10'>
          scraped_text = response.text 👈 เเปลงข้อมูล Tag HTML ทั้งหน้า ให้เป็น String เพื่อให้ Python เข้าใจ
          เเละนำไปใช้งาน Regex ได้ !!!
        </p>
        <br></br>
        <div className='flex justify-center'>
          <img
            src='https://cdn.discordapp.com/attachments/1062631205910097984/1093875172978729020/Screenshot_2023-04-07_at_7.29.02_PM.png'
            alt='image'
            className='w-auto md:max-w-xl rounded'
          />
        </div>
        <br></br>
        <p>เย้ ดึงข้อมูลได้เเล้ว ที่นี้เราก็ได้ Web Scraping ออกมาเเล้ว เเต่ยังไม่เสร็จนะ ไปดู Step ถัดไปกันเลย !!!</p>
        <br></br>
      </div>
      <div>
        <p>Stage 2 : Scraping text ที่ต้องการ 🌊 🎯</p>
      </div>
      <div className='px-1 md:px-2 lg:px-4 xl:px-8 2xl:px-16'>
        <p className='indent-6 mt-2'>
          จากผลลัพธ์ที่ได้จาก
          <a
            className='from-purple-500 to-blue-500 bg-gradient-to-r bg-clip-text text-transparent animate-pulse'
            href='#stage-1'
          >
            Stage 1
          </a>
          เราจะนำมาใช้ regex เพื่อให้ได้ข้อมูลในช่วงที่ต้องการเท่านั้น
          ขั้นตอนนี้มีที่มาที่ไปมาจากการที่ทางผู้จัดทำได้ทดลองทำการดึงข้อมูลมาแล้วพบปัญหาในขั้นตอนต่อไป ทำให้เกิด
          วิธีการแก้ปัญหามาเป็นขั้นตอนนี้ โดยทางผู้จัดทำได้เลือกใช้ regex สำหรับการ match ตั้งแต่ `div` ของ html ที่มี
          class=&quot;mw-parser-output&quot; ไปจนถึงบรรทัดที่มีคำว่า `ดูเพิ่ม`
        </p>
        <img
          className='mt-4'
          src='https://media.discordapp.net/attachments/1014398974649708624/1093794634976731176/image.png'
        />
        <div className='bg-stone-50 p-2 rounded-lg shadow w-fit mt-8'>
          {'regex 🎯: ^.*?<div class="mw-parser-output">((?:.*\n)*?)^.*?ดูเพิ่ม.*$'}
        </div>
        <div className=' border-blue-500 bg-stone-50 shadow border-l-4 border-0 px-4 py-4 rounded-md mt-5 flex flex-col gap-2'>
          <ul className='space-y-3'>
            <li>
              <span className='bg-stone-200 px-2 py-0.5 rounded-lg'>{'^.*?'}</span> คือ การ match
              ตั้งเเต่จุดเริ่มต้นของบรรทัดแล้ว ตามด้วยตัวอักษรอะไรก็ได้ เป็นจำนวนกี่ตัวก็ได้ จนถึงอักขระที่ต้องการ
            </li>
            <li>
              <span className=' bg-stone-200 px-2 py-0.5 rounded-lg'>{'<div class="mw-parser-output">'}</span> คือ
              ผลที่ต้องการ match
              <div className='flex justify-center'>
                <img
                  className='mt-2 shadow rounded'
                  src='https://cdn.discordapp.com/attachments/1062631205910097984/1095049715441205352/Screenshot_2023-04-11_at_1.16.26_AM.png'
                />
              </div>
            </li>
            <li>
              <span className='bg-stone-200 px-2 py-0.5 rounded-lg'>{'((?:.*\\n)*?)'}</span> คือ การ match string
              กี่บรรทัดก็ได้ ไปเรื่อยๆ เเละจัดกลุ่ม
            </li>
            <li>
              <span className='bg-stone-200 px-2 py-0.5 rounded-lg'>{'^.*?'}</span> การ match
              ตั้งเเต่จุดเริ่มต้นของบรรทัดแล้ว ตามด้วยตัวอักษรอะไรก็ได้ เป็นจำนวนกี่ตัวก็ได้ จนถึงอักขระที่ต้องการ
            </li>
            <li>
              <span className='bg-stone-200 px-2 py-0.5 rounded-lg'>{'ดูเพิ่ม.*$'}</span> คือการ match string
              ในบรรทัดที่มีคำว่า `ดูเพิ่ม` ไปจนจบบรรทัดนั้น
            </li>
          </ul>
          <div className='bg-stone-200 px-2 py-0.5 rounded-lg w-fit self-center text-center'>
            {'match บรรทัดที่มี <div class="mw-parser-output"> จนถึงก่อนบรรทัดที่มีคำว่า `ดูเพิ่ม` '}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstStep;
