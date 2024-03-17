export const NFTModal = ({ transactionHash, doneCallback }) => {
  return (
    <div className="fixed top-40 left-0 w-full">
      <div className="z-0 fixed top-0 left-0 w-screen h-full bg-gray-900 opacity-40">
      </div>
      <div className="flex flex-row z-10 relative w-full">
        <div className="p-10 bg-white mx-auto max-w-[800px] h-[20rem] rounded-2xl flex flex-col gap-10">
        <h1 className="font-semibold text-2xl w-full border-black border-b-[1px]">✨ NFT Generated</h1>
        <div>Transaction hash: <a target="_blank" rel="noopener noreferrer" className="text-sky-800 hover:text-blue-800"
            href={`https://stylus-testnet-explorer.arbitrum.io/tx/${transactionHash}`}>{transactionHash}</a></div>
        <button className="bg-white hover:bg-slate-200 p-2 px-6 w-fit mx-auto rounded-3xl border border-black"
        onClick={doneCallback}
        >Done</button>
        </div>
      </div>
    </div>
  );
}