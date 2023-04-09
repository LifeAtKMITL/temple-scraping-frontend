import { FirstStep, SecondStep, ThirdStep } from '@/components/docs-contents';
import Steppy from '@/components/steppy';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const steps = ['Scraping Data 🔎', 'Get Content 🛠️', 'Result 🎉'];

export default function Document() {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    if (step < 2) setStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (step > 0) setStep((prev) => prev - 1);
  };

  const content: { [index: number]: React.ReactElement } = {
    0: <FirstStep />,
    1: <SecondStep setStep={setStep} />,
    2: <ThirdStep />,
  };

  return (
    <div className='h-screen bg-bg grid grid-flow-row grid-rows-document justify-items-center p-4 gap-4 overflow-auto'>
      <h1 className='lg:text-3xl text-2xl text-center text-white font-bold'>ขั้นตอนการดึงข้อมูลรายชื่อวัด</h1>
      <Steppy steps={steps} step={step} />
      <div className='rounded-lg bg-slate-300 p-6 w-11/12 xl:w-9/12 font-semibold flex flex-col text-sm lg:text-base overflow-y-scroll h-full'>
        {content[step]}
        {/* TODO: idk this is dumb */}
        <div className='flex justify-between mt-4'>
          <button
            className='bg-bg rounded-lg px-6 py-2 text-bg sukhumvit-bold hover:bg-slate-800 transition text-xl'
            onClick={handlePrev}
          >
            👈
          </button>
          <button
            className='bg-bg rounded-lg px-6 py-2 text-bg sukhumvit-bold hover:bg-slate-800 transition text-xl'
            onClick={handleNext}
          >
            👉
          </button>
        </div>
      </div>
      {/* <Link to='/' className='justify-self-start'>
        <button className='text-white font-semibold'>👈 back to main</button>
      </Link> */}
    </div>
  );
}
