export const GeneratedImage = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2>Generated Image:</h2>
      <div className="w-72 h-72 border border-black rounded-xl">
      </div>
      <button 
      className='bg-gradient-to-br w-24 from-teal-400 to-emerald-500 hover:from-teal-400 hover:to-emerald-600 rounded-full text-white px-6 py-2' 
      >
        Mint
      </button>
    </div>
  );
}