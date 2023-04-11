type SecondStepProp = {
  setStep: (step: number) => void;
};

const SecondStep = ({ setStep }: SecondStepProp) => {
  return (
    <div>
      <h1 className='text-3xl text-blue-500'>Step 2: Scraping target content 👀 💪 🎯 </h1>
      <br />
      <p className='indent-10'>
        หลังจากที่ได้ข้อมูลส่วนที่ต้องการมาจากขั้นตอนที่แล้วนั้น เราก็จะเจาะลึกเข้าไปถึงข้อมูลในส่วนชื่อของวัด
        ซึ่งจากการสังเกตจะเห็นได้ว่าชื่อของวัดที่เราต้องการจะอยู่ใน tag {'`<li>`'} ซึ่งเราจะใช้ regex
        ในการดึงข้อมูลที่อยู่ใน tag {'`<li>`'} ออกมา และดึงข้อมูลที่เป็น content ภายใน tag นั้นออกมาอีกที
        โดยมีโค้ดดังนี้
      </p>
      <div className='flex justify-center my-4'>
        <img
          src='https://media.discordapp.net/attachments/1062631205910097984/1094876991171346462/image.png'
          className='w-auto md:max-w-xl'
        />
      </div>
      <section className='flex flex-col gap-2 leading-relaxed'>
        <h2 className='text-2xl text-blue-500'>คำอธิบาย Regular Expression</h2>
        <span className='bg-stone-50 p-2 rounded-lg shadow-md w-fit'>{'regex 🎯: ^.*<li>.*$'}</span>
        <div className=' border-blue-500 bg-stone-50 shadow border-l-4 border-0 px-4 py-4 rounded-md flex flex-col gap-2'>
          <ul className='space-y-3'>
            <li>
              <span className='bg-stone-200 px-2 py-0.5 rounded-lg'>^.*</span> คือการ match จุดเริ่มต้นของบรรทัด
              แล้วตามด้วยตัวอักษรอะไรก็ได้ เป็นจำนวนกี่ตัวก็ได้
            </li>
            <li>
              <span className='bg-stone-200 px-2 py-0.5 rounded-lg'>{'<li>.*$'}</span> คือการ match คำว่า {'`<li>` '}
              ไปจนสิ้นสุดบรรทัดนั้น
            </li>
          </ul>
          <div className='bg-stone-200 px-2 py-0.5 rounded-lg w-fit self-center text-center'>
            match บรรทัดที่มีคำว่า {'<li>'} ทั้งบรรทัด
          </div>
        </div>
        <span className='bg-stone-50 p-2 rounded-lg shadow-md w-fit'>{'regex 🎯: (?<!<)(?![^<>]*>)[^<>]+(?<!>)'}</span>
        <div className=' border-blue-500 bg-stone-50 shadow border-l-4 border-0 px-4 py-4 rounded-md flex flex-col gap-2'>
          <ul className='space-y-3'>
            <li>
              <span className='bg-stone-200 px-2 py-0.5 rounded-lg'>{'(?<!<)'}</span> คือ &quot;Negative
              Lookbehind&quot; เป็นการที่จะไม่ match string ใดๆที่มีตัวก่อนหน้าที่เป็น {'<'}
            </li>
            <li>
              <span className='bg-stone-200 px-2 py-0.5 rounded-lg'>{'(?![^<>]*>)'}</span> คือ &quot;Negative
              Lookahead&quot; เป็นการที่จะไม่ match string ที่มี {'< หรือ >'} อยู่ในตัว
            </li>
            <li>
              <span className='bg-stone-200 px-2 py-0.5 rounded-lg'>{'[^<>]+'}</span> คือ การ match ตัวอักษรที่ไม่ใช่{' '}
              {'< หรือ >'} ที่มากกว่า 1 ตัวเป็นต้นไป
            </li>
            <li>
              <span className='bg-stone-200 px-2 py-0.5 rounded-lg'>{'(?<!>)'}</span> คือ &quot;Negative
              Lookbehind&quot; เป็นการที่จะไม่ match string ใดๆที่มีตัวก่อนหน้าที่เป็น {'>'}
            </li>
          </ul>
          <div className='bg-stone-200 px-2 py-0.5 rounded-lg w-fit self-center text-center'>
            match string ที่อยู่ภายใน tag ต่างๆของ html ยกตัวอย่างเช่น {'<h1>'}
            <span className='bg-blue-300 rounded'>content</span>
            {'<a title="troll">'}
            <span className='bg-blue-300 rounded'>important</span>
            {'</a>'}
            {'</h1>'}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SecondStep;
