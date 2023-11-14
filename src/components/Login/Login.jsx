import { useState } from "react";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import { users } from "../../util/users";

const Login = function(props){

  const [userInput, setUserInput] = useState({['username']: '', ['password']: ''});
  const [isValid, setIsValid] = useState(true);
  const [hidePassword, setHidePassword] = useState(false);
  const usernameIsVavlid = userInput.username.trim() !== '';
  const passwordIsValid = userInput.password.trim() !== '';
  const formIsValid = usernameIsVavlid && passwordIsValid;

  const userInputHandler = (identifier, value)=>{
    if(identifier == [identifier]){
      setUserInput(preState => preState = {...userInput, [identifier]: value});
    }
  };

  const hidePasswordHandler =()=>{
    setHidePassword(preState => !preState);
  };

  const submitHandler =(event)=>{
    event.preventDefault();
    if(!formIsValid){
      setIsValid(formIsValid);
      return
    }

    setIsValid(formIsValid)
    const user = users.filter(user => user.username === userInput.username.toLowerCase() &&
      user.password === +userInput.password);

    if(user.length !== 0){
        props.onLogin('login');
    }
  };

  return <div class='bg-gray-900 w-[100vw] h-[100vh] relative'>
    <fieldset class='border-2 border-grey-100 absolute top-[50%] left-[50%] 
    px-6 py-6 min-w-[40%] max-md:w-[90vw] max-md:px-4
    rounded-lg
    translate-x-[-50%] translate-y-[-50%]'>
      <legend class='text-gray-400 text-lg'>Login</legend>
      <form onSubmit={submitHandler}>
        <Input label='Username' isValid={isValid}
          input={{
            type: 'text',
            id: 'username',
            name: 'username',
            value: userInput.username,
            onChange: (event) => userInputHandler('username', event.target.value)
          }}
         />

         <Input label='Password' isValid={isValid}
          inputOpr ={{hidePassword, showContainer: true}}
          onClickShow ={hidePasswordHandler}
          input={{
            type: `${hidePassword ? 'text' : 'password'}`,
            id: 'password',
            name: 'password',
            value: userInput.password,
            onChange: (event) => userInputHandler('password', event.target.value)
          }}
         />

         <div class='text-right px-2.5 mt-5'>
          <Button label='Login' />
         </div>
      </form>
    </fieldset>
  </div>
};

export default Login;