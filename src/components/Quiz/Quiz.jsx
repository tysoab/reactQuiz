import { useState } from 'react';
import userImage from '../../assets/quiz-image.png';
import quizComplete from '../../assets/quiz-complete.png';
import { QUESTIONS } from '../../util/question';
import Card from '../Card/Card';
import Question from './Question';
import PrevNextButton from './PrevNextButton';
import Button from '../UI/Button/Button';
import QuizDetail from './QuizDetail';
import ButtonOpr from './ButtonOpr';
import CountDown from '../CountDown/CountDown';

const Quiz = function({onLogout}){

  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [userAnswerState, setUserAnswerState] = useState({
    isSubmitting: false,
    score: 0,
    attempt: 0,
    correctAnswer: 0
  });
  
  const numSlide = QUESTIONS.length;

  const handlerActiveIndex = (num)=>{
    setActiveQuestionIndex(preState => preState + num);
  };

  const buttonClickHandler = (num)=>{
    setActiveQuestionIndex(preState => preState = num);
  };

  const SubmitHandler = (event)=>{
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = [...Object.entries(Object.fromEntries(formData))];
    const countScore = [];

    for (let i = 0; i < data.length; i++){
     let q = QUESTIONS.filter(question =>{
       return ((question.id === parseInt(data[i][0]) &&
              question.answer === data[i][1] && data[i]));
     });
     countScore.push(...q)
    }

    setUserAnswerState(preState =>{ return preState = ({...userAnswerState,
      score: +`${countScore.length / QUESTIONS.length * 100}`,
      correctAnswer: countScore.length,
      attempt: data.length,
      isSubmitting: true})
      });

  };

  return(<>
    {!userAnswerState.isSubmitting &&
    <div class='w-[100vw] relative'>
      <aside class='absolute top-0 left-0 h-[100vh] bg-gray-900 w-[18%] text-white py-5 px-4 
      max-md:sticky  z-[100] max-md:h-auto max-md:w-[100%] max-md:flex max-md:justify-between max-md:items-center
      '>
        <Card image={userImage} title='Taiwo Yusuf' />
        
        <CountDown onLogout={onLogout} />
      </aside>

      <main class='absolute z-50 right-0 top-0 w-[80%] h-[100vh] max-md:sticky max-md:w-[100%] max-md:h-auto py-8 px-6'>

        <form onSubmit={SubmitHandler}
         class='relative w-[100%] min-h-[250px] border-0 overflow-x-hidden mt-4
        max-md:min-h-[350px]
        '>
        {
          QUESTIONS.map((question, index) => <Question key={question.id} activeIndex={activeQuestionIndex}
            question={question} index={index}
           />
          )
        }

        <div className={`absolute bottom-0 w-[100%] text-center`}>
          <Button label='SUBMIT' />
        </div>
        </form>
        
        <PrevNextButton
          numSlide={numSlide}
          activeIndex={activeQuestionIndex}
          onChange={handlerActiveIndex}
         />

        <ButtonOpr numButton={QUESTIONS} onChange={buttonClickHandler} activeIndex={activeQuestionIndex} />

      </main>
    </div>
    }

    {userAnswerState.isSubmitting &&
      <div className={`mx-auto w-[40%] m-10 max-md:w-[90%] px-6`}>
        <div className={`flex space-x-6 items-center shadow-lg p-6 mb-10 max-md:flex-col max-md:space-y-6 rounded-lg`}>
          <img src={quizComplete} alt='complete' className={`h-[100px] `} />
          <h2 className={`text-2xl uppercase text-gray-900 font-extrabold text-center max-md:text-xl`}>
            Congratulations!
          </h2>
        </div>
        <QuizDetail label='Total Question' detail={QUESTIONS.length} />
        <QuizDetail label='Attempt Questions' detail={userAnswerState.attempt} />
        <QuizDetail label='Correct Answers' detail={userAnswerState.correctAnswer} />
        <QuizDetail label='Score' detail={userAnswerState.score.toFixed(2) + '%'} />

        <div className={`mt-14 text-right`}>
          <Button label='Continue' button={{
            type: 'button',
            onClick: ()=> onLogout()
          }} />
        </div>
      </div>
    }
  </>);
};

export default Quiz;