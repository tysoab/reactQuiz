import Login from "../../Login/Login";

const Input = function(props){

  let inputClass = `flex-1 hover:border-gray-600 focus:text-blue-300 w-[100%] mb-[-25px]
     bg-transparent border-b-2 border-gray-400 outline-none text-gray-400 text-lg`;
  if(!props.isValid){
    inputClass += ' border-red-400';
  }
  return <div class='flex space-x-5 mb-5 last:mb-0 items-baseline  max-md:space-x-0 max-md:flex-col'>
    <label htmlFor={props.label} class='text-gray-400 align-bottom text-lg basis-25 max-md:flex-1'>{props.label}: </label>
    <div className='flex-1 max-md:w-[100%] relative'>
      <input {...props.input} class={inputClass} />
      {props.inputOpr?.showContainer && <div className='absolute right-0 bottom-1 cursor-pointer text-gray-400'>
        {!props.inputOpr?.hidePassword && <i class="fa-solid fa-eye-slash" onClick={props.onClickShow}></i>}
        {props.inputOpr?.hidePassword && <i class="fa-solid fa-eye" onClick={props.onClickShow}></i>}
        </div>
        }
    </div>
    
  </div>
};

export default Input;