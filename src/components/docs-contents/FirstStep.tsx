import { useState } from 'react';

const imageList = [
  'https://cdn.discordapp.com/attachments/1062631205910097984/1093872540037947492/8bd4fc46-8e4e-414b-a637-afa0b2de2fa5.png',
];
const FirstStep = () => {
  const [imageUrl, setImageUrl] = useState(imageList[0]);

  return (
    <div>
      <h1 className='text-3xl text-blue-500'>Step 1: Scraping data 🦾 🔎 🧲 ⚙️</h1>
      <br></br>
      <p>Stage 1 : Scraping ข้อมูลวัดในจังหวัด 🛕 🇹🇭 </p>
      <div className='mx-1 sm:mx-1 md:mx-2 lg:mx-4 xl:mx-8 2xl:mx-16'>
        <p className='indent-10'>ในขั้นตอนที่ 1 สิ่งที่พวกเราทำคือ การทำ Crawling หรือ Scraping Data กันก่อน</p>
      </div>
      <div className='mx-1 sm:mx-1 md:mx-2 lg:mx-4 xl:mx-8 2xl:mx-16'>
        <p>
          โดยเราจะใช้ Source ข้อมูลจาก Website{' '}
          <a
            href='https://th.wikipedia.org/wiki/หมวดหมู่:รายชื่อวัดไทย'
            className='font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 animate-pulse '
          >
            {' '}
            https://th.wikipedia.org/wiki/หมวดหมู่:รายชื่อวัดไทย{' '}
          </a>
          - วิกิพีเดีย หมวดหมู่: รายชื่อวัดไทย
        </p>
        <p>
          เราจะเลือกใช้ข้อมูลจากจังหวัดดังนี้ <button onClick={() => setImageUrl(imageList[0])}>จ.ลำพูน 🐸</button> |{' '}
          <button>จ.ลำปาง 🐟</button> | <button>จ.ลพบุรี 🐵</button> | <button>จ.ราชบุรี 🦙</button>
        </p>
        <br></br>
        <div className='flex justify-center'>
          <img src={imageUrl} alt='image' />
        </div>
        <br></br>
        <div>
          <p>import requests</p>
          <blockquote>
            <p className='indent-10'>
              Requests เป็น Library ของภาษา Python ที่ใช้ในการทำ HTTP Requests ต่างๆ ได้ง่ายและสะดวก เช่น GET, POST,
              PUT, DELETE มีฟังก์ชั่นที่ช่วยให้สร้าง Request ไปยัง Server, รับ Response จาก Server, และจัดการกับ
              Response ได้ง่าย
            </p>
          </blockquote>
        </div>
        <br></br>
        <div>
          <p>import re</p>
          <blockquote>
            <p className='indent-10'>
              Library ของภาษา Python ที่ใช้ในการทำ Regular Expression (Regex) ซึ่งเป็นการใช้รูปแบบของตัวอักษร (Pattern)
              เพื่อค้นหาและแก้ไขข้อความตามต้องการ สามารถใช้ re ในการค้นหา Pattern ในข้อความ, แทนที่ Pattern
              ด้วยข้อความอื่น, การตรวจสอบเเละแยกแยะข้อมูลจากข้อความ
            </p>
          </blockquote>
        </div>
        <br></br>
        <p>
          url ={' '}
          <a
            href='https://th.wikipedia.org/wiki/รายชื่อวัดในจังหวัดลำพูน'
            className='font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 animate-pulse'
          >
            {' '}
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
          />
        </div>
        <br></br>
        <p>เย้ ดึงข้อมูลได้เเล้ว ที่นี้เราก็ได้ Web Scraping ออกมาเเล้ว เเต่ยังไม่เสร็จนะ ไปดู Step ถัดไปกันเลย !!!</p>
      </div>
    </div>
  );
};

export default FirstStep;
