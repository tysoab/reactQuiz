const Card = function({image, title}){

  return <div class='max-w-[80%] border-0 mx-auto flex flex-col items-center space-y-4 p-2 
  max-md:mx-0 max-md:flex-row max-md:space-x-4 max-md:w-auto
  '>
    <img src={image} alt={title} class='h-[80px] w-[80px] object-fill rounded-md max-md:rounded-full
    max-md:h-[40px] max-md:w-[40px]
    '/>
    <h2 class='text-lg'>{title}</h2>
  </div>
};

export default Card;