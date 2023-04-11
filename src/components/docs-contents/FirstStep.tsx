const FirstStep = () => {
  return (
    <div>
      <h1 className='text-3xl text-blue-500'>Step 1: Scraping data 🦾 🔎 🧲 ⚙️</h1>
      <br></br>
      <p>Stage 1 : Scraping ข้อมูลวัดในจังหวัด 🛕 🇹🇭 </p>
      <div className='ml-2 sm:ml-4 md:ml-8 lg:ml-16 xl:ml-32'>
        <p>ในขั้นตอนที่ 1 สิ่งที่พวกเราทำคือ การทำ Crawling หรือ Scraping Data กันก่อน</p>
      </div>
      <div className='ml-1 sm:ml-2 md:ml-4 lg:ml-8 xl:ml-16'>
        <p>
          โดยเราจะใช้ Source ข้อมูลจาก Website{' '}
          <a href='https://th.wikipedia.org/wiki/หมวดหมู่:รายชื่อวัดไทย'>
            {' '}
            https://th.wikipedia.org/wiki/หมวดหมู่:รายชื่อวัดไทย{' '}
          </a>
          - วิกิพีเดีย หมวดหมู่:รายชื่อวัดไทย
        </p>
        <p>เราจะเลือกใช้ข้อมูลจากจังหวัดดังนี้ จ.ลพบุรี 🐵 | จ.ลำพูน 🐸 | จ.ลำปาง 🐟 | จ.ราชบุรี 🦙</p>
        <img
          src='https://cdn.discordapp.com/attachments/1062631205910097984/1093575926371057794/ffe628c7-2726-4e7c-93d0-9a9682758fa1.png'
          alt='image'
        />
        <div>def fetch_data(url): response = requests.get(url) scraped_text = response.text</div>
      </div>

      <p>
        def fetch_data(url)
        <br />
        url = <a href='https://th.wikipedia.org/wiki/รายช'>https://th.wikipedia.org/wiki/รายช</a>ื่อวัดในจังหวัดลพบุรี -
        วิกิพีเดีย รายชื่อวัดในจังหวัดลพบุรี
      </p>
      <p>
        response = requests.get(url) เราจะได้ ข้อมูล HTML ทั้งหน้าของ จ.ลพบุรี scraped_text = response.text เเปลงข้อมูล
        Tag HTML ทั้งหน้า ให้เป็น String เพื่อให้ Python เข้าใจ เเละสามารถนำไปใช้งาน Regex ได้ !!! เย้ ดึงข้อมูลได้เเล้ว
        ที่นี้เราก็ได้ Web Crawler ออกมาเเล้ว เเต่ยังไม่เสร็จนะ ไปดู Step ถัดไปกันเลย !!!
      </p>
    </div>
  );
};

export default FirstStep;
