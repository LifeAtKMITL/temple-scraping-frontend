import { FirstStep, SecondStep, ThirdStep } from '@/components/docs-contents';
import Steppy from '@/components/steppy';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const steps = ['step 1', 'step 2', 'step 3'];

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
    1: <SecondStep />,
    2: <ThirdStep />,
  };

  return (
    <div className='h-screen bg-bg grid grid-flow-row grid-rows-document justify-items-center p-4 gap-4 overflow-auto'>
      <h1 className='text-4xl text-white font-bold'>ขั้นตอนการดึงข้อมูลรายชื่อวัด</h1>
      <Steppy steps={steps} step={step} />
      <div className='rounded-lg bg-slate-300 p-4 w-8/12 font-semibold flex flex-col h-fit'>
        {content[step]}
        {/* TODO: idk this is dumb */}
        <div className='flex justify-between'>
          <button className='text-xl ' onClick={handlePrev}>
            👈
          </button>
          <button className='text-xl ' onClick={handleNext}>
            👉
          </button>
        </div>
      </div>
      <Link to='/' className='justify-self-start'>
        <button className='text-white font-semibold'>👈 back to main</button>
      </Link>
    </div>
  );
}
