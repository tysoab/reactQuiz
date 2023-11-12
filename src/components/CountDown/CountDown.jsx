import { useCallback, useEffect, useState } from "react";

const CountDown = function({onLogout}){

  let countdown = 59, minute = 2;
  const [timer, setTimer] = useState({min: minute, secs: countdown});

  useEffect(()=>{
    let intervalId;
  intervalId = setInterval(()=>{
      countdown--;
      if(countdown === -1){
        countdown = 59;
       minute--;
      }
      if(minute === -1){
        onLogout();
      }
      setTimer(preState => preState = ({
      secs: countdown,
      min: minute
  }))
  }, 1000);

  return ()=>{
    clearInterval(intervalId)
  }

  }, [countdown]);


  return <div className={`text-center mt-14 max-md:mt-0`}>
    <h2 class='text-lg font-medium mb-4 max-md:mb-0'>Timer</h2>
    <div className={`text-3xl font-bold max-md:text-xl max-md:font-semibold`}>
    <span>{timer.min}  :</span>
    <span> {timer.secs}</span>
    </div>
  </div>
};

export default CountDown;