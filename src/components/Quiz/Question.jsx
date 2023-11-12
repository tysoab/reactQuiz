import RadioButton from "../UI/Button/RadioButton";

const Question = function({question, activeIndex, index}){ 

  return <div className={`absolute w-[100%] h-[100%] text-gray-900 text-lg`}
          style={{transform: `translateX(${100 * (index - activeIndex)}%)`,
          transition: 'all 1s ease-out'}}>

          <div className='flex space-x-4 mb-6'>
            <h2>{index + 1}:</h2>
            <h2>{question.question}</h2>
          </div>
          <RadioButton label={question.options.a} input={{
            type: 'radio',
            name: `${question.id}question`,
            value: `a`
          }} dataset='' />
          <RadioButton label={question.options.b} input={{
            type: 'radio',
            name: `${question.id}question`,
            value: `b`
          }} />
          <RadioButton label={question.options.c} input={{
            type: 'radio',
            name: `${question.id}question`,
            value: `c`
          }} />
          
        </div>
};

export default Question;