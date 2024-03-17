import { useWriteContract } from 'wagmi';
import { writeContract } from 'viem/actions';
import abi from "../../abis/IGoghArt.json";
import { useEffect } from 'react';
import initSync, { get_shapes_on_web } from '../../public/pkg/gogh_art';

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

export const MintButton = ({algorithm, shapes, colours}) => {
  const { data: hash, writeContract } = useWriteContract()
  const shapeBits = shapesToU256(shapes);
  const numShapes = BigInt(10);

  const handleGenerate = async () => {
    writeContract({
      address: '0x0EdE555D3f8c3197741A757F9696C7059122D1fc',
      abi,
      functionName: 'getShapes',
      args: [shapeBits, numShapes]
    });
  }

  const runWasm = async () => {
    console.log("================")
      let wasm = await initSync().then((val) => console.log(error, "09wutg98ehsogh"));
      console.log("sihfoihoigvfl", wasm) // Initialize the WebAssembly module
      const shapes = get_shapes_on_web(0b001, 5); // Example usage of a WebAssembly function
      console.log("weee")
      console.log(shapes);
  }
  
  useEffect(() => {
    // Define the async function
    const fetchWasmData = async () => {
      try {
        const data = await runWasm();
        // Do something with the data
      } catch (error) {
        console.log(error);
      }
    };

    // Call the async function
    fetchWasmData();
  }, []);

  return (
    <button 
    className='mt-8 border border-emerald-600 bg-gradient-to-br w-26 from-teal-400 to-emerald-500 hover:from-teal-500 hover:to-emerald-600 rounded-full text-white px-6 py-2' 
    onClick={runWasm}
    >
    Mint
    </button>
  );
}