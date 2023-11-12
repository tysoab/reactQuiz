import Button from '../UI/Button/Button';

const PrevNextButton = function({numSlide, activeIndex, onChange}){

  let buttonOpr;

  if(activeIndex < numSlide && activeIndex === 0){
    buttonOpr = <Button label='Next' button={{
      type: 'button',
      onClick: ()=> onChange(1)
    }} />
  }

  if(activeIndex === numSlide - 1){
    buttonOpr = <Button label='Prev' button={{
      type: 'button',
      onClick: ()=> onChange(-1)
    }} />
  }

  if(activeIndex < numSlide && activeIndex !== 0 && activeIndex !== numSlide - 1){
    buttonOpr = (<>
        <Button label='Prev' button={{
      type: 'button',
      onClick: ()=> onChange(-1)
    }} />
        <Button label='Next' button={{
      type: 'button',
      onClick: ()=> onChange(1)
    }} />
    </>);
  }

  return(<div className='flex items-center justify-between mt-7'>
      {buttonOpr}
  </div>);
};
export default PrevNextButton;