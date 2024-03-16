import { Header } from "./components/Header";
import { SetParameters } from "./components/SetParameters";
import { GeneratedImage } from "./components/GeneratedImage";

export const MainPage = () => {
  return (
    <main className='h-screen pb-36'>
    <div className='pt-40 h-full mx-auto max-w-[1000px]'>
    <h1 className=' text-2xl font-medium'>✨ <span className='underline'>Algorithmic Art Generator</span></h1>
    <div className='flex flex-row gap-20 h-full pt-10'>
      <div className='h-full grow flex flex-col gap-8'>
        <SetParameters />
      </div>
      <GeneratedImage />
    </div>
    </div>
  </main>
  );
}