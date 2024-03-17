import { useState } from "react";
import { SetParameters } from "./components/SetParameters";
import { GeneratedImage } from "./components/GeneratedImage";

export const MainPage = () => {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState(1);
  const [shapes, setShapes] = useState(["square"]);
  const [colours, setColours] = useState(["#FFFFFF"]);

  return (
    <main className='h-full pb-36 px-10'>
    <div className='pt-40 h-full mx-auto max-w-[1000px]'>
    <div className="bg-gen-art h-[750px] flex flex-col">
      <div className="grow"></div>
      <h1 className='z-0 p-10 bottom-8 left-10 text-white text-[4rem] font-light'><span className="text-[6rem] font-serif underline">gogh</span><br></br> Algorithmic Art Generator</h1>
    </div>
    <div className='flex flex-row gap-20 h-full pt-20'>
      <div className='h-full grow flex flex-col gap-8'>
        <SetParameters selectedAlgorithm={selectedAlgorithm} setSelectedAlgorithm={setSelectedAlgorithm} shapes={shapes} setShapes={setShapes} colours={colours} setColours={setColours} />
      </div>
      <GeneratedImage selectedAlgorithm={selectedAlgorithm} shapes={shapes} colours={colours} />
    </div>
    </div>
  </main>
  );
}