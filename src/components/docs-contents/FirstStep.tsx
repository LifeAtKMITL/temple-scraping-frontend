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
        <div className='flex justify-center w-auto'>
          <img src={imageUrl} alt='image' />
        </div>
        <div>
          <p className='bg-stone-50 p-2 w-fit rounded-lg shadow-md shadow-gray-500 mt-5'>import requests</p>
          {/* <blockquote>
            <p className='indent-10 pt-3'>
              Requests เป็น Library ของภาษา Python ที่ใช้ในการทำ HTTP Requests ต่างๆ ได้ง่ายและสะดวก เช่น GET, POST,
              PUT, DELETE มีฟังก์ชั่นที่ช่วยให้สร้าง Request ไปยัง Server, รับ Response จาก Server, และจัดการกับ
              Response ได้ง่าย
            </p>
          </blockquote> */}
        </div>
        <div className=' border-blue-800 bg-gray-100 border  border-l-4 pl-4 pr-6 py-4 rounded-md mt-4'>
          <p>
            <strong> Requests :</strong> Library ของภาษา Python ที่ใช้ในการทำ HTTP Requests ต่างๆ ได้ง่ายและสะดวก เช่น
            GET, POST, PUT, DELETE มีฟังก์ชั่นที่ช่วยให้สร้าง Request ไปยัง Server, รับ Response จาก Server,
            และจัดการกับ Response ได้ง่าย
          </p>
        </div>
        <div>
          <p className='bg-stone-50 p-2 w-fit rounded-lg shadow-md shadow-gray-500 mt-5'>import re</p>
          {/* <blockquote>
            <p className='indent-10 pt-3'>
              Library ของภาษา Python ที่ใช้ในการทำ Regular Expression (Regex) ซึ่งเป็นการใช้รูปแบบของตัวอักษร (Pattern)
              เพื่อค้นหาและแก้ไขข้อความตามต้องการ สามารถใช้ re ในการค้นหา Pattern ในข้อความ, แทนที่ Pattern
              ด้วยข้อความอื่น, การตรวจสอบเเละแยกแยะข้อมูลจากข้อความ
            </p>
          </blockquote> */}
          <div className=' border-blue-800 bg-gray-100 shadow shadow-gray-500 border-l-4 border-0 pl-4 pr-6 py-4 rounded-md mt-4'>
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
        <br></br>
        <div>
          <p className='indent-6'>
            จากผลลัพธ์ที่ได้จาก&nbsp;
            <a
              className='from-purple-500 to-blue-500 bg-gradient-to-r bg-clip-text text-transparent animate-pulse'
              href='#stage-1'
            >
              &nbsp;Stage 1
            </a>
            เราจะนำมาใช้ regex เพื่อให้ได้ข้อมูลในช่วงที่ต้องการเท่านั้น
            ขั้นตอนนี้มีที่มาที่ไปมาจากการที่ทางผู้จัดทำได้ทดลองทำการดึงข้อมูลมาแล้วพบปัญหาในขั้นตอนต่อไป ทำให้เกิด
            วิธีการแก้ปัญหามาเป็นขั้นตอนนี้ โดยทางผู้จัดทำได้เลือกใช้ regex สำหรับการ match ตั้งแต่ tag `div` ของ html
            ที่มี class=&quot;mw-parser-output&quot; ไปจนถึงบรรทัดที่มีคำว่า &quot;ดูเพิ่ม&quot;
          </p>
          <img
            className='mt-4'
            src='https://media.discordapp.net/attachments/1014398974649708624/1093794634976731176/image.png'
          />
          <p className='bg-stone-50 p-2 w-fit rounded-lg shadow-md shadow-gray-500 mt-5'>
            regex 🎯 : r&apos;^.*?&lt;div class&quot;mw-parser-output&quot;&gt;((?:.*\n)*?)^.*?ดูเพิ่ม.*$&apos;
          </p>
          <div className='no1 mt-5'>
            <p className='hover:-translate-y-1 hover:translate-x-1 transition bg-blue-200 px-2 py-1 w-fit rounded-lg shadow-md shadow-gray-500  inline-flex'>
              1.
            </p>
            <p className='hover:-translate-y-1 hover:translate-x-1 transition   mx-2 bg-stone-50 p-1 w-fit rounded-lg shadow-md shadow-gray-500  inline-flex'>
              ^.*
            </p>
            <p className='hover:-translate-y-1 hover:translate-x-1 transition  mx-2 bg-stone-50 p-1 w-fit rounded-lg shadow-md shadow-gray-500  inline-flex'>
              &lt;div class&quot;mw-parser-output&quot;&gt;
            </p>

            <div className=' border-blue-800 bg-gray-100 border  border-l-4 pl-4 pr-6 py-4 rounded-lg mt-4'>
              <p>
                คือ การ match string ทั้งบรรทัด ในบรรทัดที่มี string ดังนี้ `&lt;div
                class&quot;mw-parser-output&quot;&gt;`
              </p>
              <p className='mt-3 mr-5 bg-stone-50 p-1 w-fit rounded-xl shadow-md shadow-gray-500  inline-flex'>^.*</p>
              <p className='inline-flex'>
                คือการ match จุดเริ่มต้นของบรรทัด แล้วตามด้วยตัวอักษรอะไรก็ได้ เป็นจำนวนกี่ตัวก็ได้ <br />
              </p>
              <p className='mt-3 mr-5 bg-stone-50 p-1 w-fit rounded-xl shadow-md shadow-gray-500  inline-flex'>
                &lt;div class&quot;mw-parser-output&quot;&gt;
              </p>
              <p className='inline-flex'>
                คือการ match ตามตัวอักษรที่กำหนด <br />
              </p>
            </div>
          </div>
          <div className='no2 mt-5'>
            <p className='bg-red-200 px-2 py-1 w-fit rounded-lg shadow-md shadow-gray-500  inline-flex'>2.</p>
            <p className='mx-2 bg-stone-50 p-1 w-fit rounded-lg shadow-md shadow-gray-500  inline-flex'>((?:.*\n)*?)</p>
            <div className=' border-blue-800 bg-gray-100 border  border-l-4 pl-4 pr-6 py-4 rounded-md mt-4'>
              <p>คือ การ match string กี่บรรทัดก็ได้ ไปเรื่อยๆ</p>
              <p className='mt-3 mr-5 bg-stone-50 p-1 w-fit rounded-xl shadow-md shadow-gray-500  inline-flex'>
                ((?:.*\n)*?)
              </p>
              <p className='inline-flex'>
                คือการ match จุดเริ่มต้นของบรรทัด แล้วตามด้วยตัวอักษรอะไรก็ได้ เป็นจำนวนกี่ตัวก็ได้ <br />
              </p>
              <p>
                - ( ) คือการจัดกลุ่มของ regex <br />
                - (?:) คือการจัดกลุ่มของ regex แต่ไม่นับเป็นกลุ่ม <br />
                - .*\n คือการ match string ตัวอักษรอะไรก็ได้ที่เป็นจำนวน &gt;= 0 <br />
                ไปจนถึงจุดที่เริ่มต้นบรรทัดใหม่ (new line)
                <br />
              </p>
            </div>
          </div>
          <p>
            2. ((?:.*\n)*) คือ การ match string กี่บรรทัดก็ได้ ไปเรื่อยๆ - () คือการจัดกลุ่มของ regex <br />
            - (?:) คือการจัดกลุ่มของ regex แต่ไม่นับเป็นกลุ่ม <br />
            - .*\n คือการ match string ตัวอักษรอะไรก็ได้ที่เป็นจำนวน &gt;= 0 <br />
            ไปจนถึงจุดที่เริ่มต้นบรรทัดใหม่ (new line)
            <br />
            3. ^.*ดูเพิ่ม.*$ คือการ match string ในบรรทัดที่มีคำว่า `ดูเพิ่ม` ไปจนจบบรรทัดนั้น <br />
            - ^.* คือการ match จุดเริ่มต้นของบรรทัด แล้วตามด้วยตัวอักษรอะไรก็ได้ เป็นจำนวนกี่ตัวก็ได้ <br />
            - ดูเพิ่ม.*$ คือการ match string ที่มีคำว่า `ดูเพิ่ม` ไปจนสินสุดบรรทัดนั้น <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default FirstStep;
