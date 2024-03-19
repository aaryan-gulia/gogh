import externalLink from '/icons/externalLink.svg';
import { MintButton } from './MintButton';

const contractAddress = "0x66a7b847ebE82D1bd7bd6F4968A46505b0C304C6";
const shortContractAddress = contractAddress.substring(0, 5) + '...' + contractAddress.substring(contractAddress.length - 5);

const getContext = () => {
  let canvas = document.querySelector('#artCanvas');
  return canvas.getContext('2d');
}

export const GeneratedImage = ({transactionCallback, selectedAlgorithm, shapes, colours, numShapes}) => {

  return (
    <div className="flex flex-col gap-4">
      <h2 className='font-medium'>Preview:</h2>
      <div className="w-full h-[395px] border border-black mx-auto rounded-xl">
        <canvas id="artCanvas" width="287" height="287"></canvas>
      </div>
        <p className='font-light text-gray-500 italic'>Due to randomness the final generated image will vary.</p>
        <div className='flex flex-row gap-2'>
        <span>Contract: </span>
        <a
        target="_blank" rel="noopener noreferrer"
        className='hover:text-gray-600 border-b-[1px] border-b-black flex flex-row gap-1'
        href='https://stylus-testnet-explorer.arbitrum.io/token/0x66a7b847ebE82D1bd7bd6F4968A46505b0C304C6'
        >
        <img className="inline" src={externalLink} width={12}></img>
        <span>{shortContractAddress}</span>
        </a>
      </div>
      <MintButton transactionCallback={transactionCallback} algorithm={selectedAlgorithm} shapes={shapes} colours={colours} numShapes={numShapes} />
    </div>
  );
}