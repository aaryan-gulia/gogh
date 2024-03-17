import example from "/example.jpeg"

export const NFTModal = ({ image, doneCallback }) => {
  return (
    <div className="fixed top-40 left-0 w-full">
      <div className="z-0 fixed top-0 left-0 w-screen h-full bg-gray-900 opacity-40">
      </div>
      <div className="flex flex-row z-10 relative w-full">
        <div className="p-10 bg-white mx-auto max-w-[800px] h-[44rem] rounded-2xl flex flex-col gap-10">
        <h1 className="font-semibold text-2xl w-full border-black border-b-[1px]">✨ NFT Generated</h1>
        <img src={example} className="border border-black h-[400px] w-[400px] mx-auto">
        </img>
        <div>Transaction hash: <a target="_blank" rel="noopener noreferrer" className="text-sky-800 hover:text-blue-800"
            href="https://stylus-testnet-explorer.arbitrum.io/tx/0xcc2d2e9ddeab432253a816a9673017f07edb8dd6a3495c94583249c0e4e5d773">0xcc2d2e...d773</a></div>
        <button className="bg-white hover:bg-slate-200 p-2 px-6 w-fit mx-auto rounded-3xl border border-black"
        onClick={doneCallback}
        >Done</button>
        </div>
      </div>
    </div>
  );
}