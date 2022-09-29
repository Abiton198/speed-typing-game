import React from 'react'
import { useState, useEffect } from 'react'
import './App'

function App(){

  const [text, setText] = useState('')
  const [timeRemaining, setTimeRemaining] = useState(5)
  const [isTimeRunning, setIsTimeRunning] = useState(false)

  

  function handleChange(event){
    setText({
      value: event.target.value
    })
  }

  function handleSubmit(event){
    alert(state.value)
    event.preventDefault()
  }

  function calculateWordCount(text){
    const wordsArr = text.trim().split('')
    console.log(wordsArr.length)
    return words(word => word !== "").length
  }

useEffect(() => {
  if(isTimeRunning && timeRemaining === 0) {
    setTimeout(()=> { 
      setTimeRemaining(time => time -1)}, 1000)
    } else if(timeRemaining === 0){
      setIsTimeRunning(false)
    }
},[timeRemaining, isTimeRunning])

    return (
      <>
      <form className="App" onSubmit={handleSubmit}>
              <h1>How fast do you type?</h1>
              <label>
                <textarea value={text} onChange={handleChange}/>
              </label>
              <input type="submit" value="submit"/>
              <h4>Amount of time remaining:{timeRemaining}</h4>
              <button onClick={() => setIsTimeRunning(true)} >Start Game</button>
              <h1>Word Count:</h1>
      </form>
      </>
    )
  }
  


export default App
