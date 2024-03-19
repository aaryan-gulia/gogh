import { useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import cAbi from "../IGoghArt.json";

// Define shapes with binary representation as BigInt
const rectangle = BigInt(0b001);
const triangles = BigInt(0b010);
const circles = BigInt(0b100);

const shapeBitmaps = {
  "square": rectangle,
  "triangle": triangles,
  "circle": circles,
};

function shapesToU256(shapes) {
  let binaryRepresentation = BigInt(0); // Initialize a BigInt with 0

  shapes.forEach(shape => {
    if (shapeBitmaps.hasOwnProperty(shape)) {
      binaryRepresentation |= shapeBitmaps[shape]; // Set the corresponding bits
    }
  });

  return binaryRepresentation;
}

export const MintButton = ({transactionCallback, algorithm, shapes, colours, numShapes}) => {
  const { data: hash, error, isPending, writeContract } = useWriteContract()
  const shapeBits = shapesToU256(shapes);
  const numShapes = BigInt(numShapes);

  const handleGenerate = async () => {
    writeContract({
      address: '0x66a7b847ebE82D1bd7bd6F4968A46505b0C304C6',
      abi: cAbi.abi,
      functionName: 'mint',
      args: [shapeBits, numShapes]
    })
  }

  const result = useWaitForTransactionReceipt({        
    hash: hash
  })

  if (result.data) {
    transactionCallback(result.data.transactionHash);
  }

  return (
    <button 
    className='mt-8 border border-emerald-600 bg-gradient-to-br w-26 from-teal-400 to-emerald-500 hover:from-teal-500 hover:to-emerald-600 rounded-full text-white px-6 py-2' 
    onClick={handleGenerate}
    >
    Mint
    </button>
  );
}