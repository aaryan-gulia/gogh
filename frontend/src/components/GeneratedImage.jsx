import externalLink from '/icons/externalLink.svg';
import { MintButton } from './MintButton';

const contractAddress = "0x0EdE555D3f8c3197741A757F9696C7059122D1fc";
const shortContractAddress = contractAddress.substring(0, 5) + '...' + contractAddress.substring(contractAddress.length - 5);

const getContext = () => {
  let canvas = document.querySelector('#artCanvas');
  return canvas.getContext('2d');
}

export const GeneratedImage = ({selectedAlgorithm, shapes, colours}) => {
  const drawRectangle = (x, y, width, height, colour) => {  
    let ctx = getContext();
    ctx.fillStyle = colour;
    ctx.fillRect(x, y, width, height);
  }
 
  const drawCircle = (x, y, radius, colour) => {
    let ctx = getContext();
    ctx.fillStyle = colour;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, true);
    ctx.fill();
  }

  const drawTriangle = (x1, y1, x2, y2, x3, y3, colour) => {
    let ctx = getContext();
    ctx.fillStyle = colour;
    ctx.beginPath();
    ctx.moveTo(x1, y1); // first vertex
    ctx.lineTo(x2, y2); // second vertex
    ctx.lineTo(x3, y3); // third vertex
    ctx.closePath(); // closes the path and goes back to the first vertex
    ctx.fill();
}

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
        href='https://stylus-testnet-explorer.arbitrum.io/address/0x0EdE555D3f8c3197741A757F9696C7059122D1fc'
        >
        <img className="inline" src={externalLink} width={12}></img>
        <span>{shortContractAddress}</span>
        </a>
      </div>
      <MintButton algorithm={selectedAlgorithm} shapes={shapes} colours={colours} />
    </div>
  );
}