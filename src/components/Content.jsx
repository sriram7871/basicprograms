import React from 'react'
import styled from 'styled-components'
import CounterApp from './CounterApp'

let HeadingStyle = {
    'background-color' : "red" ,
    'color' : "black"
}

let Button = styled.button
 `
background-color : red;
color : black;
height : 50px;
width : 100px;
`

let NewButton = styled(Button)
`
background-color : red;
box-shadow : 10px 10px 10px black;
`
let user = "keasaven"

function printSomething(e){
    // console.log(e.target.innerText)
    user = "murgaesan"
    console.log(user);

}

function printAnything(event){
    // console.log(event.target.innerText)
    // console.log("hello ")
    user = "rajini"
    console.log(user);
}
export const Content = () => {
  return (
    <main>
        <CounterApp />
    </main>
  );
}
