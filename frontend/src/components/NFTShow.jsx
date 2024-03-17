import { useReadContract } from "wagmi";
import cAbi from "../IGoghArt.json"
import {config} from "../../config.js"


export const NftShow = ({search}) => {
  if (!search) return (<></>);

  const {data, error, isPending} = useReadContract({
    abi: cAbi.abi,
    address: '0x66a7b847ebE82D1bd7bd6F4968A46505b0C304C6',
    functionName: 'getSvg',
    args: [BigInt(parseInt(search))],
  });

  if (!isPending) {
    console.log(data)
    const buff = new Buffer(data);
    const base64data = buff.toString('base64');

    return(<img className="w-96" src={`data:image/svg+xml;base64,${base64data}`}></img>);
  }
  return (<></>);

}