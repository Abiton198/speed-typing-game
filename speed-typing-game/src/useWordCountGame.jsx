import { useState, useEffect, useRef} from "react";

function useWordCountGame (){
    const startingTime = 60

    const [text, setText] = useState('')
    const [timeRemaining, setTimeRemaining] = useState(startingTime)
    const [isTimeRunning, setIsTimeRunning] = useState(false)
    const [wordCount, setWordCount] = useState(0)
    const textBoxRef = useRef(null) //to enable focus of textarea so that type after start button is clicked
    
  
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
      setTimeRemaining(startingTime)
      setText('')
      textBoxRef.current.disabled = false
      textBoxRef.current.focus()
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

  return {textBoxRef, text, handleChange, isTimeRunning, resetGame, start, timeRemaining, wordCount}
   
}

export default useWordCountGame