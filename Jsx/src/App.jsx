import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Fragment } from 'react'

function App() {
   let author = "vijay"
    let islogged = false;

  return (
    <Fragment>
     <div>
      <h1 style={{background : "Red" , color : "white"}}>React js</h1>
      <label htmlFor = "user"> username</label>
      <input id ="user" type = "text" />

      <p>{author} </p>{
        islogged && <p>Welcome to our website</p>
      }
      </div> 
    </Fragment>
  )
}

export default App
