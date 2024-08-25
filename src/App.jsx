import 'normalize.css'
import './App.css'
import { useState } from 'react'

function App() {
  const [heading, setHeading] = useState("Hello World!");

  function clickHanlder() {
    setHeading('Success!');
  }

  return (
    <>
      <div>
        <h1>{heading}</h1>
      </div>
      <button type='button' onClick={clickHanlder}>
        Test Button
      </button>
    </>
  )
}

export default App
