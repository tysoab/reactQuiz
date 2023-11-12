import Button from "../UI/Button/Button";

const ReadMe = function({onChange}){

  return <div className={`w-[50%] mx-auto shadow-2xl py-7 px-[3%] max-md:w-[90%]`}>
    <h2 className={`mb-6 text-center text-xl text-gray-950 font-bold`}>Please Read Before you Start Quiz</h2>
    <div className={`text-gray-800 text-lg font-medium`}>
    <p>This Is a Simple Online Examination project</p>
    <h4>Tools</h4>
    <p>Reactjs</p>
    <p>Created with Vite</p>
    <p>Basic Tailwind css library</p>

    </div>
    <div className={`text-base text-gray-800 mt-6`}>
      <h3>You have 3 minutes to complete the quiz</h3>
      <h4 className={`mb-5`}>Thanks for your Time</h4>

      <Button label='Start Quiz' button={{
        type: 'button',
        onClick: ()=> onChange('start')
      }} />
    </div>
  </div>
};

export default ReadMe;