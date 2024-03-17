import { useWriteContract } from 'wagmi';
import { writeContract } from 'viem/actions';
import abi from "../../abis/IGoghArt.json";

const rectangle = '0b001';
const triangles = '0b010';
const circles = '0b100';

const shapeBitmaps = {
  "square": rectangle,
  "triangle": triangles,
  "circle": circles,
}

export const GenerateButton = ({algorithm, shapes, colours}) => {
  const { data: hash, writeContract } = useWriteContract()

  const shapeBits = () => {
    shapes.forEach(shape => {
      
    });
  }

  const handleGenerate = async () => {
    writeContract({
      address: '0x0EdE555D3f8c3197741A757F9696C7059122D1fc',
      abi,
      functionName: 'getShapes',
      args: [BigInt()]
    });
  }

  return (
    <button 
    className='w-fit border bg-gradient-to-br from-fuchsia-700 to-purple-900 text-white border-black hover:from-fuchsia-800 hover:to-purple-950 rounded-full px-6 py-2 h-12' 
    onClick={handleGenerate}
    >
      🪄 Generate
    </button>
  );
}