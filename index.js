import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const votes = [0,0,0]
  const copy={...votes}
 const anecdoteClicked = (newSelected) =>() =>{
  if(newSelected>anecdotes.length-1)
  setSelected(0)  
  else
   setSelected(newSelected)
 }
 const voteClicked = () =>{
  copy[selected]=copy[selected]+1
  setSelected(selected)
 }
 console.log(votes[0])
  return (
   
    <div>
     <p>{props.anecdotes[selected]}</p>
     <p>has {copy[selected]} votes</p>
     <button onClick={voteClicked}>vote</button>
      <button onClick={anecdoteClicked(selected+1)}>next anecdote</button>
      
    </div>
    
  )
}

const anecdotes = [
    'The best way to get a project done faster is to start sooner',
    'Design and programming are human activities; forget that and all is lost',
    'Optimism is an occupational hazard of programming: feedback is the treatment'

  ]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)