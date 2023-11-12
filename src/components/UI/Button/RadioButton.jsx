const RadioButton = function({input, label}){

  return <div className='flex space-x-4 mt-3 items-center'>
    <input {...input} className='cursor-pointer' />
    <p>{label}</p>
  </div>
};

export default RadioButton;