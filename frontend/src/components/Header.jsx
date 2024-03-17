import ConnectButton from "./ConnectButton";
import { Showcase } from "../Showcase";
import { MainPage } from "../MainPage";

export const Header = ({setPage}) => {
  return (
    <header className="z-10 fixed bg-white w-full p-4 px-10 border border-b-black">
      <div className="flex flex-row h-16 relative justify-between items-center max-w-[1000px] mx-auto">
        <button onClick={() => {setPage(<Showcase />)}} className="text-gray-500 hover:text-gray-700 text-lg font-medium tracking-wide w-[150px] text-left">Showcase</button>
        <button onClick={() => {setPage(<MainPage />)}} className="hover:opacity-60"><img className="mx-auto" src="/goghlogo.png" width={50}></img></button>
        <ConnectButton />
      </div>
    </header>
  );
}