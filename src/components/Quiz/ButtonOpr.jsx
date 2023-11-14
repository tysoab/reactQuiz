import Button from "../UI/Button/Button";

const ButtonOpr = function({numButton, onChange, activeIndex}){

  return(<div className={`mt-6 p-2 flex items-center w-[100%] h-auto justify-items-center space-x-4 space-y-4 flex-wrap`}>
    {numButton.map((_, index) => 
    <button className={`px-[15px] py-[5px] bg-blue-600 text-white hover:bg-blue-700 rounded-md 
    ${index === activeIndex ? 'bg-gray-500' : null}
    `}
    onClick={()=> onChange(index)}
    >
      {index + 1}
      </button> )
    }
  </div>);
};

export default ButtonOpr;