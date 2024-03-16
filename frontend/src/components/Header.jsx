import ConnectButton from "./ConnectButton";

export const Header = () => {
  return (
    <header className="fixed bg-white w-full p-4 px-10 border border-b-black">
      <div className="flex flex-row h-16 relative justify-end">
        <div className="absolute left-1/2">
          <img className="mx-auto" src="/goghlogo.png" width={50}></img>
        </div>
        <ConnectButton />
      </div>
    </header>
  );
}