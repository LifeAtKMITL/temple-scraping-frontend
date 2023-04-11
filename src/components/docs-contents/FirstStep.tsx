const FirstStep = () => {
  return (
    <div>
      <h1 className='text-3xl text-blue-500'>Step 1: Scraping data 🦾 🔎 🧲 ⚙️</h1>
      <br></br>
      <p>Stage 1 : Scraping ข้อมูลวัดในจังหวัด 🛕 🇹🇭 </p>
      <div className='ml-1 sm:ml-2 md:ml-4 lg:ml-8 xl:ml-16 2xl:ml-32 mr-1 sm:mr-1 md:mr-2 lg:mr-4 xl:mr-8 2xl:mr-16'>
        <p>ในขั้นตอนที่ 1 สิ่งที่พวกเราทำคือ การทำ Crawling หรือ Scraping Data กันก่อน</p>
      </div>
      <div className='ml-1 sm:ml-1 md:ml-2 lg:ml-4 xl:ml-8 2xl:ml-16 mr-1 sm:mr-1 md:mr-2 lg:mr-4 xl:mr-8 2xl:mr-16'>
        <p>
          โดยเราจะใช้ Source ข้อมูลจาก Website{' '}
          <a
            href='https://th.wikipedia.org/wiki/หมวดหมู่:รายชื่อวัดไทย'
            className='font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 '
          >
            {' '}
            https://th.wikipedia.org/wiki/หมวดหมู่: รายชื่อวัดไทย{' '}
          </a>
          - วิกิพีเดีย หมวดหมู่:รายชื่อวัดไทย
        </p>
        <p>เราจะเลือกใช้ข้อมูลจากจังหวัดดังนี้ จ.ลพบุรี 🐵 | จ.ลำพูน 🐸 | จ.ลำปาง 🐟 | จ.ราชบุรี 🦙</p>
        <br></br>
        <img
          src='https://media.discordapp.net/attachments/1062631205910097984/1093579303142301797/toc1.png?width=1238&height=520'
          alt='image'
        />
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
        <p>
          def fetch_data(url)
          <br />
          response = requests.get(url). -- เราจะได้ ข้อมูล HTML ทั้งหน้าของ จ.ลำพูน
          <br />
          scraped_text = response.text เเปลงข้อมูล Tag HTML ทั้งหน้า ให้เป็น String เพื่อให้ Python เข้าใจ
          เเละสามารถนำไปใช้งาน Regex ได้ !!! เย้ ดึงข้อมูลได้เเล้ว ที่นี้เราก็ได้ Web Crawler ออกมาเเล้ว
          เเต่ยังไม่เสร็จนะ ไปดู Step ถัดไปกันเลย !!!
        </p>
        <pre>
          <code className='language-sh'>
            url = https://th.wikipedia.org/wiki/รายชื่อวัดในจังหวัดลพบุรี{'\n'}
            {'  '}def fetch_data(url){'\n'}
            {'    '}response =requests.get(url){'\n'}
            {'    '}scraped_text = response.text
          </code>
        </pre>
      </div>
    </div>
  );
};

export default FirstStep;
