import Pat from '@/assets/images/pat.png';
import CardAbout from '@/components/cardAbout';
export default function About() {
  return (
    <div className='bg-[#0F172A] min-w-[100vh]'>
      <div>
        <h1 className='text-[#5EE8D5] text-[50px] flex justify-center font-bold py-8'>สมาชิก</h1>
      </div>
      <div className='grid  md:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2 container mx-auto justify-items-center py-[80px] gap-36 '>
        {[1, 2, 3, 4, 5].map((i) => (
          <CardAbout
            key={i}
            _id={''}
            name={'Thanakorn Wihokkun'}
            studentId={'63010255'}
            img={Pat}
            github={'https://goedu.kmitl.ac.th/'}
            quotation={'หัวใจนะไม่ใช่วิน ที่จะมาจ่ายเงินแล้วก็ไป'}
          />
        ))}
      </div>
    </div>
  );
}
