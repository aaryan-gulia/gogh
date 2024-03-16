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
    className="p-8 bg-gray-100 hover:shadow-inner rounded-lg w-fit flex flex-col gap-5"
    >
      <h3 className="font-medium">{nft.name}</h3>
      <div className="w-48 h-48 border border-black">{nft.image}</div>
      <div>
        <p>Token Id: {nft.tokenId}</p>
        <p>Contract Address: {nft.contractAddress}</p>
      </div>
    </div>
  );
}

export const Showcase = () => {
  const nftList = nfts.map((nft) => { return nftDisplay(nft); });

  return (
    <main className="pt-40 px-10 h-full mx-auto max-w-[1000px]">
      <div className="flex flex-row flex-wrap gap-10">
        {nftList}
      </div>
    </main>
  );
}