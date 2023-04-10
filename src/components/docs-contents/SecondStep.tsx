type SecondStepProp = {
  setStep: (step: number) => void;
};

const SecondStep = ({ setStep }: SecondStepProp) => {
  return (
    <div>
      <h1 className='text-3xl text-blue-500'>Step 2: Scraping target content 👀 💪 🎯 </h1>
      <br />
      <div className='flex justify-center'>
        <img
          src='https://media.discordapp.net/attachments/1062631205910097984/1094876991171346462/image.png'
          className='w-auto md:max-w-xl'
        />
      </div>
      <Pattern pattern='^.*<li>.*$' />
    </div>
  );
};

type PatternProp = {
  pattern: string;
};

export const Pattern = ({ pattern }: PatternProp) => {
  return <code className='bg-slate-200 p-2 rounded-lg shadow-md'>{pattern}</code>;
};

export default SecondStep;
