import './App.css'
import Counter from './components/counter/Counter'
import SimpleTodos from './components/todos/SimpleTodos'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import PropTypes from "prop-types";

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
      <h1 onClick={handleClick} style={{ color: 'indianRed' }}>Vite + React JS + SWC</h1>

      <div className="card"><Counter /></div>

      <SimpleTodos />

      <LogProps textColor="red" />
      <LogDestruct textColor="darkcyan" />
      <Parent>This is a <strong>child</strong> text</Parent>
      <TransferHtmlProps textColor="chocolate" id="x-id" className="x-class" data-log-level="info"></TransferHtmlProps>
    </>
  )
}

// remove '...' is missing in props validation
LogDestruct.propTypes = { textColor: PropTypes.node.isRequired }
Parent.propTypes = { children: PropTypes.node.isRequired }
TransferHtmlProps.propTypes = { textColor: PropTypes.node.isRequired }


function LogProps(props) {
  console.log('show props object', props)
  return null
}

function LogDestruct({ textColor }) {
  console.log('show destructured props "text color"=', textColor)
  return <p style={{ color: textColor }}>destructured prop</p>
}

function Parent({ children }) {
  // console.log('show props object + children', props, children)
  return <div>{children}</div>
}

function TransferHtmlProps({ textColor, ...props }) {
  console.log('show text colors + destructured prop', textColor, props)
  return <div style={{ color: textColor }} {...props}>Transfered attributes</div>
}

export default App
