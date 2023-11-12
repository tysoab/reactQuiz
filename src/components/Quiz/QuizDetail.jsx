const QuizDetail = function({label, detail}){

  return <h2 className={`text-lg font-medium flex space-x-4 mb-4`}>
          <span className={`basis-[170px]`}>{label}: </span>
          <span>{detail}</span>
        </h2>
};

export default QuizDetail;