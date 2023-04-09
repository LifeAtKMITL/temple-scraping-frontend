import MemberCard from '@/components/MemberCard';

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
    name: 'Chawapon Baidumrongsak',
    studentID: '63010212',
    img: 'https://media.discordapp.net/attachments/764402349028278302/1093557192768098394/Crypto.png?width=312&height=308',
    github: 'https://github.com/B-chawapon',
    quotation: 'ไม่เอาคำคมเอานมอย่างเดียว',
    imgStyles: 'absolute -bottom-4 -right-[370px] w-[500px]',
  },
  {
    _id: '2',
    name: 'Sumet Suansamran',
    studentID: '63011013',
    img: 'https://media.discordapp.net/attachments/764402349028278302/1093557193783115856/Pluem.png?width=312&height=462',
    github: 'https://github.com/sumetsm',
    quotation: 'ป๊อบ อ่ะพ่อผมเองไม่ต้องสืบ',
    imgStyles: 'absolute -bottom-5 -right-[80px] w-[160px]',
  },
  {
    _id: '3',
    name: 'Kitsadang Sawangsiripol',
    studentID: '63010035',
    img: 'https://media.discordapp.net/attachments/988486551275200573/1093566069672779786/Kate.png',
    github: 'https://github.com/gandastik',
    quotation: 'ถ้าถามว่าใครหล่อสุด... ภัทร sec17',
    imgStyles: 'absolute -bottom-7 -right-[110px] w-[180px]',
  },
  {
    _id: '4',
    name: 'Chinakit Pinclay',
    studentID: '63010229',
    img: 'https://media.discordapp.net/attachments/988486551275200573/1093566069098156054/Glock.png',
    github: 'https://github.com/MonsieurGlock',
    quotation: 'เพื่อผู้ชายเราสู้ตาย ตามนั้นคือ จบ',
    imgStyles: 'absolute -bottom-5 -right-[70px] w-[180px]',
  },
  {
    _id: '5',
    name: 'Chinathip Meesuannil',
    studentID: '63010235',
    img: 'https://media.discordapp.net/attachments/988486551275200573/1093566071077871777/Zan.png',
    github: 'https://github.com/zantaclaus',
    quotation: 'ไอ้ภัทร! มาแบก ROV หน่อย',
    imgStyles: 'absolute -bottom-4 -right-[80px] w-[200px]',
  },
  {
    _id: '6',
    name: 'Napat Moonpinij',
    studentID: '63010283',
    img: 'https://cdn.discordapp.com/attachments/879247319084711937/1093603239485767740/biz6w58f.png',
    github: 'https://github.com/napat-CoderNo1',
    quotation: 'รูปอ่ะเบลอแต่ความรักที่ให้เธอชัดเจน',
    imgStyles: 'absolute -bottom-4 -right-[550px] w-[700px]',
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
    quotation: 'มาลงมาไลค์  มาจุ้บๆดีกว่าา ><',
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
    quotation: 'บอสรักใครรักจริง แต่เมียเผลอเจอกัน',
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
    <div className='bg-bg h-screen overflow-y-scroll'>
      <h1 className='text-[#5EE8D5] text-[40px] lg:text-[50px] flex justify-center font-bold py-8'>สมาชิกในทีม</h1>
      <div className='grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 container mx-auto justify-items-center pt-[20px] pb-[90px] gap-36'>
        {members
          .sort(() => 0.5 - Math.random())
          .map((member) => (
            <MemberCard key={member._id} {...member} />
          ))}
      </div>
    </div>
  );
}
