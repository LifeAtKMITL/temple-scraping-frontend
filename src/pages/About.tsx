import Pat from '@/assets/images/pat.png';
import CardAbout from '@/components/cardAbout';

interface MemberData {
  _id: string;
  name: string;
  studentID: string;
  img: string;
  github: string;
  quotation: string;
  imgStyles: string;
}

const members: MemberData[] = [
  {
    _id: '1',
    name: 'napat moonpinij',
    studentID: '63010283',
    img: 'https://media.discordapp.net/attachments/764402349028278302/1093557192768098394/Crypto.png?width=312&height=308',
    github: 'test',
    quotation: 'test',
    imgStyles: 'absolute -bottom-4 -right-[350px] w-[500px]',
  },
  {
    _id: '2',
    name: 'Napat Moonpinij',
    studentID: '63010283',
    img: 'https://media.discordapp.net/attachments/764402349028278302/1093557193783115856/Pluem.png?width=312&height=462',
    github: 'https://www.google.com',
    quotation: 'การบ้านส่งให้ครู i love u ส่งให้เธอ',
    imgStyles: 'absolute -bottom-5 -right-[80px] w-[160px]',
  },
  {
    _id: '3',
    name: 'napat moonpinij',
    studentID: '63010283',
    img: 'https://media.discordapp.net/attachments/764402349028278302/1093557194038984826/Ton.png?width=312&height=462',
    github: 'test',
    quotation: 'test',
    imgStyles: 'absolute -bottom-4 -right-[100px] w-[200px]',
  },
  {
    _id: '7',
    name: 'Thanakorn Wihokkun',
    studentID: '63010255',
    img: 'https://media.discordapp.net/attachments/988486551275200573/1093566070813626418/Ton.png',
    github: 'https://github.com/Thanakorn255',
    quotation: 'เส้นโค้งที่สวยที่สุด คือรอยยิ้มของคุณ',
    imgStyles: 'absolute -bottom-6 -right-[70px] w-[150px]',
  },
  {
    _id: '8',
    name: 'Nuttanan Ruangpanich',
    studentID: '63010320',
    img: 'https://media.discordapp.net/attachments/988486551275200573/1093566069983154237/Nut.png',
    github: 'https://github.com/Nuttanan29445',
    quotation: 'มาลงมาไลค์  มาจุ้บๆดีกว่าา',
    imgStyles: 'absolute -bottom-6 -right-[80px] w-[160px]',
  },
  {
    _id: '9',
    name: 'Nuttapong Naksamukkee',
    studentID: '63010326',
    img: ' https://media.discordapp.net/attachments/988486551275200573/1093566069400154203/Jus.png',
    github: 'https://github.com/JusAeng',
    quotation: 'จออะไรน่ารัก ก็จอจัสไง',
    imgStyles: 'absolute -bottom-6 -right-[90px] w-[150px]',
  },
  {
    _id: '10',
    name: 'Kittiphon Singchom',
    studentID: '63010082',
    img: 'https://media.discordapp.net/attachments/988486551275200573/1093566068389326959/Boss.png',
    github: 'https://github.com/bossk774158',
    quotation: 'บอสรักใครรักจริง แต่ผัวเผลอเจอกัน',
    imgStyles: 'absolute -bottom-6 -right-[80px] w-[160px]',
  },
  {
    _id: '11',
    name: 'Saritpat Niyomthong',
    studentID: '63010956',
    img: 'https://media.discordapp.net/attachments/988486551275200573/1093566070566166569/Putter.png',
    github: 'https://github.com/saritpat',
    quotation: 'มารักกับผม แล้วคุณจะไม่ผิดหวัง',
    imgStyles: 'absolute -bottom-2 -right-[140px] w-[220px]',
  },
];

export default function About() {
  return (
    <div className='bg-[#10192D] min-w-[100vh] overflow-auto min-h-screen'>
      <div>
        <h1 className='text-[#5EE8D5] text-[50px] flex justify-center font-bold py-8'>สมาชิกในทีม</h1>
      </div>
      <div className='grid  md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 container mx-auto justify-items-center pt-[20px] gap-36 '>
        {members.map((member) => (
          <CardAbout key={member._id} {...member} />
        ))}
      </div>
    </div>
  );
}
