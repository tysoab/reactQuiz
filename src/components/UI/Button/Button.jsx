const Button = function(props){

  return <button className={`bg-blue-500 px-4 py-2 rounded text-zinc-100 text-lg hover:bg-blue-600 focus:outline-double`}
   {...props.button}>
    {props.label}
  </button>
};

export default Button;