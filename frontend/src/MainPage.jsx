import GenImage from "/alg-art.jpg";
import { SetParameters } from "./components/SetParameters";
import { GeneratedImage } from "./components/GeneratedImage";

export const MainPage = () => {
  return (
    <main className='h-full pb-36 px-10'>
    <div className='pt-40 h-full mx-auto max-w-[1000px]'>
    <div className="bg-gen-art h-[750px] flex flex-col">
      <div className="grow"></div>
      <h1 className='z-0 p-10 bottom-8 left-10 text-white text-[4rem] font-light'><span className="text-[6rem] font-serif underline">gogh</span><br></br> Algorithmic Art Generator</h1>
    </div>
    <div className='flex flex-row gap-20 h-full pt-20'>
      <div className='h-full grow flex flex-col gap-8'>
        <SetParameters />
      </div>
      <GeneratedImage />
    </div>
    </div>
  </main>
  );
}