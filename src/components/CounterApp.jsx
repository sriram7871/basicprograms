import React ,{useState} from 'react'
import styled from 'styled-components';

const Button = styled.button`
width : 150px;
height : 50px;
background - color : red;
color : green ;
`

const CounterApp = () => {

   // let counter = 0 ;

    //Hook State
    let [counter , setCount ] = useState(0) 
    let [data , setData] = useState("Success");

    let message ;
    let remainingClick = 10 - counter
    
    function handleIncrease(){
        setCount((preCount) => preCount + 1);
        //console.log(counter);
    }

    if(counter < 10){
      message = (
        <div>
          <h3> you cliked {counter} times</h3>
          <p> Still {remainingClick} </p>
        </div>
      )
    }
    else if(counter===10){
      message = (
        <div>
          <h3>You clicked{counter}times</h3>
          <p>You are Unlocked 10% discount</p>
        </div>
      );
    }

    else if(counter < 20){
      
          message = (
        <div>
          <h3>You clicked{counter}times</h3>
          <p>You are on the wway to unlock more rewards</p>
        </div>
      );
    }
    else{
      message = (
        <div>
          <h3>You achievethe click master</h3>
        </div>
      )
    }

    let dispComp = () =>{
      switch(data){
        case "Loading" : return <LoadingComponent/>;
        break;
        case "Success" : return <SuccessComponent/>;
        break;
        case "Error" : return <ErrorComponent/>;
        break;
      }
    }

   

  return (
    <div>
        <h1>click to unlock rewards 🎉</h1>
        <Button onClick = {handleIncrease}>Click me</Button>{
          message
        }
        {
          counter >= 30 && <Button onClick={resetCounter}>Reset Button</Button>
        }
        {dispComp()}
        {/* //{
        //   counter >=10 ? (
        //     <p>You unlocked the 10% discount</p>
        //   ) : (
        //     <p>Click 10 times to unlock the rewards</p>
        //   )
        // }

        // {
        //   counter >=20 && <p>Your achieve the click masteer</p>
        // }
         */}
    </div>
  )
}

export default CounterApp



function LoadingComponent(){
  return (
    <h6>Loading...</h6>
  )
}

function SuccessComponent(){
  return(
    <h6>SuccessFUllly....</h6>
  )
}

function ErrorComponent(){
  return(
    <h6>Error</h6>
  )
}