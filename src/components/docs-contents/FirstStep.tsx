const FirstStep = () => {
  return (
    <div>
      <h1 className='text-3xl text-blue-500'>Step 1: Scraping data 🦾 🔎 🧲 ⚙️</h1>
      <br></br>
      <p>Stage 1 : Scraping ข้อมูลวัดในจังหวัด 🛕 🇹🇭 </p>
      <div className='ml-1 sm:ml-1 md:ml-2 lg:ml-4 xl:ml-8 2xl:ml-16 mr-1 sm:mr-1 md:mr-2 lg:mr-4 xl:mr-8 2xl:mr-16'>
        <p className='indent-10'>ในขั้นตอนที่ 1 สิ่งที่พวกเราทำคือ การทำ Crawling หรือ Scraping Data กันก่อน</p>
      </div>
      <div className='ml-1 sm:ml-1 md:ml-2 lg:ml-4 xl:ml-8 2xl:ml-16 mr-1 sm:mr-1 md:mr-2 lg:mr-4 xl:mr-8 2xl:mr-16'>
        <p>
          โดยเราจะใช้ Source ข้อมูลจาก Website{' '}
          <a
            href='https://th.wikipedia.org/wiki/หมวดหมู่:รายชื่อวัดไทย'
            className='font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 '
          >
            {' '}
            https://th.wikipedia.org/wiki/หมวดหมู่:รายชื่อวัดไทย{' '}
          </a>
          - วิกิพีเดีย หมวดหมู่: รายชื่อวัดไทย
        </p>
        <p>เราจะเลือกใช้ข้อมูลจากจังหวัดดังนี้ จ.ลำพูน 🐸 | จ.ลำปาง 🐟 | จ.ลพบุรี 🐵 | จ.ราชบุรี 🦙</p>
        <br></br>
        <img
          src='https://media.discordapp.net/attachments/1062631205910097984/1093579303142301797/toc1.png?width=1238&height=520'
          alt='image'
        />
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
            className='font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 '
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
        <p>เย้ ดึงข้อมูลได้เเล้ว ที่นี้เราก็ได้ Web Scraping ออกมาเเล้ว เเต่ยังไม่เสร็จนะ ไปดู Step ถัดไปกันเลย !!!</p>
      </div>
    </div>
  );
};

export default FirstStep;
