import ConnectButton from "./ConnectButton";

export const Header = () => {
  return (
    <header className="fixed bg-white w-full p-4 px-10 border border-b-black">
      <div className="flex flex-row h-16 relative justify-between items-center max-w-[1000px] mx-auto">
        <a className="text-gray-500 hover:text-gray-700 text-lg font-medium tracking-wide w-[150px]">Showcase</a>
        <img className="mx-auto" src="/goghlogo.png" width={50}></img>
        <ConnectButton />
      </div>
    </header>
  );
}