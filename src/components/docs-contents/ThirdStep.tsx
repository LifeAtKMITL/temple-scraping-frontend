const ThirdStep = () => {
  return (
    <div className='scroll-smooth'>
      <h1 id='stage-1' className='text-3xl text-blue-500'>
        Stage 3 : Filter ชื่อวัด 🦾 🔎 🧲 ⚙️
      </h1>
      <br></br>
      <p className='indent-10'>
        หลังจากหา tag li เสร็จแล้ว เราจึงนำมาคัดเพื่อเอาข้อมูลที่ต้องการ นั้นก็คือชื่อวัดอย่างเดียว ไม่เอาตำบล
        หรือข้อมูลอื่นๆ ตามโค้ดดังนี้
      </p>
      <div className='flex justify-center my-4'>
        <img
          src='https://media.discordapp.net/attachments/1062631205910097984/1095363139354247309/image.png'
          className='w-auto md:max-w-xl'
        />
      </div>

      <br></br>
      <section className='flex flex-col gap-2 leading-relaxed'>
        <h2 className='text-2xl text-blue-500'>คำอธิบาย Regular Expression</h2>
        <span className='bg-stone-50 p-2 rounded-lg shadow-md w-fit'>{'regex 🎯: ^.*?(?= ตำ)'}</span>
        <div className=' border-blue-500 bg-stone-50 shadow border-l-4 border-0 px-4 py-4 rounded-md flex flex-col gap-2'>
          <ul className='space-y-3'>
            <li>
              <span className='bg-stone-200 px-2 py-0.5 rounded-lg'>^.*?</span> คือ การ match จุดเริ่มต้นของบรรทัด
              แล้วตามด้วยตัวอักษรอะไรก็ได้ เป็นจำนวนกี่ตัวก็ได้
            </li>

            <li>
              <span className='bg-stone-200 px-2 py-0.5 rounded-lg'>{'(?= ตำ)'}</span> คือ Positive Lookahead เป็นการ
              match ` ตำ` แต่ไม่เอาออกมา
            </li>
          </ul>
          <div className='bg-stone-200 px-2 py-0.5 rounded-lg w-fit self-center text-center'>
            match string ที่ขึ้นต้นด้วยอะไรก็ได้ ซึ่งต้องตามหลังด้วยว่า ` ตำ` แต่ไม่เอาออกมา
          </div>
        </div>

        <span className='bg-stone-50 p-2 rounded-lg shadow-md w-fit'>{'regex 🎯: ^.*?(?= )'}</span>
        <div className=' border-blue-500 bg-stone-50 shadow border-l-4 border-0 px-4 py-4 rounded-md flex flex-col gap-2'>
          <ul className='space-y-3'>
            <li>
              <span className='bg-stone-200 px-2 py-0.5 rounded-lg'>^.*?</span> คือ การ match จุดเริ่มต้นของบรรทัด
              แล้วตามด้วยตัวอักษรอะไรก็ได้ เป็นจำนวนกี่ตัวก็ได้
            </li>

            <li>
              <span className='bg-stone-200 px-2 py-0.5 rounded-lg'>{'(?= )'}</span> คือ Positive Lookahead เป็นการ
              match ` ` แต่ไม่เอาออกมา
            </li>
          </ul>
          <div className='bg-stone-200 px-2 py-0.5 rounded-lg w-fit self-center text-center'>
            match string ที่ขึ้นต้นด้วยอะไรก็ได้ ซึ่งต้องตามหลังด้วยว่า ` ` แต่ไม่เอาออกมา
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThirdStep;
