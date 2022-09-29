import { Component } from 'react'
import { useState } from 'react'
import './App.css'

class  App extends Component {
  constructor(props){
    super(props)
    this.state = {
        value: "",
        timer:"20sec"
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    this.setState({
      value: event.target.value
    })
  }

  calculateWordCount(text){
    const wordsArr = text.trim().split('')
    console.log(wordsArr.length)
    return words(word => word !== "").length
  }
  handleSubmit(event){
    alert(this.state.value)
    event.preventDefault()
  }


  render(){

    return (
      <form className="App" onSubmit={this.handleSubmit}>
              <h1>How fast do you type?</h1>
              <label>
                <textarea value={this.state.value} onChange={this.handleChange}/>
              </label>
              <input type="submit" value="submit"/>
              <h4>Amount of time remaining:{this.state.timer}</h4>
              <button onClick={() => calculateWordCount(text)} >Start Game</button>
              <h1>Word Count:{this.wordsArr}</h1>
      </form>
    )
  }
  
}

export default App
