import { useState, useRef } from 'react'
import dust2 from "../../maps/dust2.jpg"
import { TransformWrapper, 
  TransformComponent, } from "react-zoom-pan-pinch"
import ToolBar from './components/Toolbar'
import { useSelector } from 'react-redux'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = (event) => {
    console.log("TODO")
  }

  return (
    <div>
      <h1>CSutil</h1>
      <ToolBar /> 
      <TransformWrapper doubleClick={{disabled: true}}>
        <TransformComponent>
          <img src={dust2} onClick={handleClick}></img>
          <button style={{left: "210px", top: "200px"}} 
          onClick={handleClick} id='smoke'>test</button>
          <label  style={{left: "80px", top: "100px"}} 
          id='callout'>test label</label>
        </TransformComponent>
      </TransformWrapper>
    </div>
  )
}

export default App
