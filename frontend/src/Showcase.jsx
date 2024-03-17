import { useState } from "react";
import searchIcon from "/icons/search.svg";
import { useWriteContract } from 'wagmi';
import { writeContract } from 'viem/actions';
import abi from "../abis/IGoghArt.json";

const nfts = [{
  name: "Nft1",
  tokenId: 1,
  image: "xxxx",
  contractAddress: "0x92838998"
},
{
  name: "Nft2",
  tokenId: 2,
  image: "xxxx",
  contractAddress: "0x92838998"
}
];

const nftDisplay = (nft) => {
  return (
    <div key={nft.tokenId} 
    className="p-8 border border-slate-500 border-dashed hover:shadow-inner rounded-lg w-fit flex flex-col gap-5"
    >
      <h3 className="font-medium">{nft.name}</h3>
      <div className="w-56 h-56 border border-black mx-auto">{nft.image}</div>
      <div>
        <p>Token Id: {nft.tokenId}</p>
        <p>Contract Address: {nft.contractAddress}</p>
      </div>
    </div>
  );
}

export const Showcase = () => {
  const [search, setSearch] = useState("");
  const { data: hash, writeContract } = useWriteContract();

  const nftList = nfts.map((nft) => { return nftDisplay(nft); });

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  }

  return (
    <main className="pt-40 px-10 h-full mx-auto max-w-[1000px] flex flex-col gap-20">
      <div
        className="w-full border border-slate-500 rounded-full flex flex-row gap-5 p-5"
      >
        <img src={searchIcon} width={15} height={15}></img>
        <input 
        className="w-full outline-none text-lg"
        onChange={handleSearchChange}
        type="text" value={search} placeholder="search address ..."
        >
        </input>
      </div>
      <div>
      <h2 className="text-xl underline font-semibold pb-10">Your NFTs</h2>
      <div className="flex flex-row flex-wrap gap-10">
        {nftList}
      </div>
      </div>
    </main>
  );
}