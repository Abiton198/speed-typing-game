import React from 'react'
import './App'
import useWordCountGame from './useWordCountGame'

function App(){
const {textBoxRef, 
      text, 
      handleChange, 
      isTimeRunning, 
      resetGame, 
      start, 
      timeRemaining, 
      wordCount}
      = useWordCountGame()

    return (
      <>
      <div className="App">
              <h1>How fast do you type?</h1>

              <textarea ref={textBoxRef}
                       value={text} 
                       onChange={handleChange} 
                       disabled={!isTimeRunning}
                       />
                       
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
