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
];

export default function About() {
  return (
    <div className='bg-[#0F172A] min-w-[100vh] overflow-auto h-screen'>
      <div>
        <h1 className='text-[#5EE8D5] text-[50px] flex justify-center font-bold py-8'>สมาชิก</h1>
      </div>
      <div className='grid  md:grid-cols-1 xl:grid-cols-3 2xl:grid-cols-3 container mx-auto justify-items-center py-[80px] gap-36 '>
        {members.map((member) => (
          <CardAbout key={member._id} {...member} />
        ))}
      </div>
    </div>
  );
}
