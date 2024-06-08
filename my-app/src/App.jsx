import { act, useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./Color.css"

function App() {
  
  
   function kk(){
      document.body.classList.toggle("lightColor")
      document.getElementById("but").classList.toggle("change")
      console.log(document.getElementById("but"))
   }

  return (
    <>
      <button id='but' onClick={kk}>change</button>
    </>
  )
}

export default App;
