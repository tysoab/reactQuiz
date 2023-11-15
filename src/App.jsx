import { useState } from "react";
import Login from "./components/Login/Login";
import Quiz from "./components/Quiz/Quiz";
import ReadMe from "./components/ReadMe/ReadMe";

function App() {

  const [isLoggedin, setIsLoggedin] = useState({
    loggedin: false,
    startQuiz: false
  });
  
  const loginHandler = (action)=>{
    if(action === 'login'){
      setIsLoggedin(preState => preState =({...isLoggedin, loggedin: true}));
    }
    if(action === 'start'){
      setIsLoggedin(preState => preState =({...isLoggedin, startQuiz: true}));
    }

  }

  const logoutHandler = ()=>{
    setIsLoggedin({loggedin: false, startQuiz: false});
    window.location.reload();
  }

  return(<>
    {!isLoggedin.loggedin && !isLoggedin.startQuiz && <Login onLogin={loginHandler} />}
    {isLoggedin.loggedin && !isLoggedin.startQuiz && <ReadMe onChange={loginHandler} />}
    {isLoggedin.loggedin && isLoggedin.startQuiz && <Quiz onLogout={logoutHandler} />}
    </>);
}

export default App;
