import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Footer from './components/Footer'
import { Content } from './components/Content'
import './index.css'


function App() {
   let user = "vijay"

  return (
    <><div className='app' >
      <Header user = {user} />
      <Content/> 
      <Footer user = "Anbu" />
      </div>
     
    </>
  )
}

export default App
