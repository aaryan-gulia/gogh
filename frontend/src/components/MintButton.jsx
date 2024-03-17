import { useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { readContract } from '@wagmi/core';
import {config} from "../../config.js";
import abi from "../abi.json";
import { useEffect } from 'react';
//import initSync, { get_shapes_on_web } from '../../public/pkg/gogh_art';

const contractAbi = abi;

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

const contractAddress = '0x66a7b847ebE82D1bd7bd6F4968A46505b0C304C6'

export const MintButton = ({modalCallback, algorithm, shapes, colours}) => {
  const { data: hash, writeContract } = useWriteContract()
  const shapeBits = shapesToU256(shapes);
  const numShapes = BigInt(10);

  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash: hash,
    onSuccess(data) {
      console.log('Success', data)
    },
  })

  const handleGenerate = async () => {
    try {
      const result = await readContract(config, {
        contractInterface: contractAbi,
        address: contractAddress,
        functionName: 'ownerOf',
        args: [1]
      })
      console.log(result);
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <button 
    className='mt-8 border border-emerald-600 bg-gradient-to-br w-26 from-teal-400 to-emerald-500 hover:from-teal-500 hover:to-emerald-600 rounded-full text-white px-6 py-2' 
    onClick={modalCallback}
    >
    Mint
    </button>
  );
}