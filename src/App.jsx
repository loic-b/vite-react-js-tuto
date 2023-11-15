import './App.css'
import Counter from './components/counter/Counter'
// eslint-disable-next-line no-unused-vars
import React from 'react'

const todos = ['see','think','say']
function App() {
  const handleClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    // this is to observe q synthetic event (event astraction from React)
    console.log("Title was clicked, log event", e)
    alert('Hello world!')
  }
  return (
    <>
      <h1 onClick={handleClick} style={{color: 'indianRed'}}>Vite + React JS + SWC</h1>

      <div className="card"><Counter /></div>

      <ul>
        {todos.map(todo => (<li key={todo}>{todo}</li>))}
      </ul>

      <LogProps textColor="red"/>
      <LogDestruct textColor="darkcyan" />
      <Parent>This is a <strong>child</strong> text</Parent>
      <X textColor="blue" id="x-id" className="x-class"></X>
    </>
  )
}

function LogProps(props) {
  console.log('show props object', props)
  return null
}

function LogDestruct({textColor}) {
  console.log('show destructured props "text color"=', textColor)
  return <p style={{color: textColor}}>destructured prop</p>
}

function Parent({children}) {
  // console.log('show props object + children', props, children)
  return <div>{children}</div>
}

function X({textColor, ...props}) {
  console.log('show text colors + destructured prop', textColor, props)
  return <div {...props}>Transfered attributes</div>
}

export default App
