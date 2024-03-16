import { useWriteContract } from 'wagmi';
import { abi } from './abi';
import { writeContract } from 'viem/actions';

export const GenerateButton = ({algorithm, shapes, colours}) => {
  const { data: hash, writeContract } = useWriteContract() 

  const handleGenerate = async () => {
    writeContract({
      address: '',
      abi,
      functionName: '',
      args: []
    });
  }

  return (
    <button 
    className='w-min border border-black hover:bg-slate-200 rounded-full text-slate-900 px-6 py-2 h-12' 
    >
      Generate
    </button>
  );
}