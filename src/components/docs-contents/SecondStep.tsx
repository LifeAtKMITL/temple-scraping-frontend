type SecondStepProp = {
  setStep: (step: number) => void;
};

const SecondStep = ({ setStep }: SecondStepProp) => {
  return (
    <div>
      <p className='indent-6'>
        จากผลลัพธ์ที่ได้จาก&nbsp;
        <button
          className='from-purple-500 to-blue-500 bg-gradient-to-r bg-clip-text text-transparent animate-pulse'
          onClick={() => setStep(0)}
        >
          &nbsp;ขั้นตอนที่ 1
        </button>
        เราจะนำมาใช้ regex เพื่อให้ได้ข้อมูลในช่วงที่ต้องการเท่านั้น
        ขั้นตอนนี้มีที่มาที่ไปมาจากการที่ทางผู้จัดทำได้ทดลองทำการดึงข้อมูลมาแล้วพบปัญหาในขั้นตอนต่อไป ทำให้เกิด
        วิธีการแก้ปัญหามาเป็นขั้นตอนนี้ โดยทางผู้จัดทำได้เลือกใช้ regex สำหรับการ match ตั้งแต่ tag `div` ของ html ที่มี
        class=&quot;mw-parser-output&quot; ไปจนถึงบรรทัดที่มีคำว่า &quot;ดูเพิ่ม&quot;
      </p>
      <img src='https://media.discordapp.net/attachments/1014398974649708624/1093794634976731176/image.png' />
      <p>
        อธิบาย regular expression <br />
        1. `^.*&lt;div class&quot;mw-parser-output&quot&gt; คือ การ match string ทั้งบรรทัด ในบรรทัดที่มี string ดังนี้
        `&lt;div class&quot;mw-parser-output&quot;&gt;` <br />
        - ^.* คือการ match จุดเริ่มต้นของบรรทัด แล้วตามด้วยตัวอักษรอะไรก็ได้ เป็นจำนวนกี่ตัวก็ได้ <br />
        - &lt;div class=&quot;mw-parser-output&quot;&gt; คือการ match ตามตัวอักษรที่กำหนด
        <br />
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
  );
};

export default SecondStep;
