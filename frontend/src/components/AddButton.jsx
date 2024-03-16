import plusIcon from "/icons/plusIcon.svg";

export const AddButton = ({radius, callback}) => {
  return (
    <button 
    className="bg-gray-400 hover:bg-[#8c929d] rounded-full w-8 h-8 my-auto font-bold text-gray-800"
    onClick={callback}
    >
      <img className="mx-auto" src={plusIcon} width={20}></img>
    </button>
  );
}