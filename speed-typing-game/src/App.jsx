import React from 'react'
import { useState, useEffect } from 'react'
import './App'

function App(){

  const STARTING_TIME = 5

  const [text, setText] = useState('')
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME)
  const [isTimeRunning, setIsTimeRunning] = useState(false)
  const [wordCount, setWordCount] = useState(0)
  

  function handleChange(e){
    const {value} = e.target
    setText(value)
  }

  function calculateWordCount(text){
    const wordsArr = text.trim().split(" ")
    return wordsArr.filter(word => word !== "").length
  }

  function resetGame(){
    setIsTimeRunning(true)
    setTimeRemaining(STARTING_TIME)
    setText('')
  }

  function endGame(){
    setIsTimeRunning(false)
    setWordCount(calculateWordCount(text))

  }

useEffect(() => {
  if(isTimeRunning && timeRemaining > 0) {
    setTimeout(()=> { 
      setTimeRemaining(time => time -1)}, 1000)
    } else if(timeRemaining === 0){
      endGame()
    }
},[timeRemaining, isTimeRunning])

const start = isTimeRunning ? "re-START" : "START"
    return (
      <>
      <div className="App">
              <h1>How fast do you type?</h1>
              <textarea value={text} onChange={handleChange} disabled={!isTimeRunning}/>
              <button 
                onClick={resetGame} 
                disabled={isTimeRunning}
              >{start}</button>
              <h4>Amount of time remaining:{timeRemaining}</h4>
              <h1>Word Count:{wordCount}</h1>
      </div>
      </>
    )
  }
  


export default App
