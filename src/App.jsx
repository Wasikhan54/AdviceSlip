import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

  function App() {
    const [advice , setadvice] = useState("")
    async function advise (){
    const res =  await fetch('https://api.adviceslip.com/advice').then( res=> res.json())
    .then( data =>{

      setadvice(data.slip.advice)
      console.log
      (data.slip.advice)
    })
  }
  return (
    <>
      <div class='main'>
        <h3>{advice ? advice: 'If you need advice, click the button'}</h3>
        <button onClick={advise}>Advise</button>
      </div>
 
    </>
  )
}

export default App
