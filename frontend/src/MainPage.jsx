import { useState } from "react";
import { SetParameters } from "./components/SetParameters";
import { GeneratedImage } from "./components/GeneratedImage";
import { NFTModal } from "./components/NFTModal";

export const MainPage = () => {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState(1);
  const [shapes, setShapes] = useState(["square"]);
  const [colours, setColours] = useState(["#FFFFFF"]);
  const [numShapes, setNumShapes] = useState(1);
  const [modal, setModal] = useState(false);
  const [transactionHash, setTransactionHash] = useState("");

  const modalEl = modal ? <NFTModal transactionHash={transactionHash} doneCallback={() => {setModal(false)}} /> : <></>

  const transactionCallback = (hash) => {
    if (hash == transactionHash) return;
    setTimeout(() => {
      setTransactionHash(hash);
      setModal(true);
    }, 2000);
  }

  return (
    <main className='h-full pb-36 px-10'>
    <div className='pt-40 h-full mx-auto max-w-s[1000px]'>
    <div className="bg-gen-art h-[750px] flex flex-col">
      <div className="grow"></div>
      <h1 className='z-0 p-10 bottom-8 left-10 text-white text-[3.5rem] font-light'><span className="text-[6rem] font-serif underline">gogh</span><br></br>On-Chain Algorithmic Art Generator</h1>
    </div>
    <div className='flex flex-row gap-20 hs-full pt-20'>
      <div className='h-full grow flex flex-col gap-8'>
        <SetParameters selectedAlgorithm={selectedAlgorithm} setSelectedAlgorithm={setSelectedAlgorithm} shapes={shapes} setShapes={setShapes} colours={colours} setColours={setColours} numShapes={numShapes} setNumShapes={setNumShapes} />
      </div>
      <GeneratedImage transactionCallback={transactionCallback} selectedAlgorithm={selectedAlgorithm} shapes={shapes} colours={colours} />
    </div>
      {modalEl}
    </div>
  </main>
  );
}