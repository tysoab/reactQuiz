import Login from "../../Login/Login";

const Input = function(props){

  let inputClass = `flex-1 hover:border-gray-600 focus:text-blue-300
     bg-transparent border-b-2 border-gray-400 outline-none text-gray-400 text-lg`;
  if(!props.isValid){
    inputClass += ' border-red-400';
  }
  return <div class='flex space-x-4 mb-5 last:mb-0 max-md:flex-col'>
    <label htmlFor={props.label} class='text-gray-400 text-lg basis-25'>{props.label}: </label>
    <input {...props.input} class={inputClass} />
  </div>
};

export default Input;