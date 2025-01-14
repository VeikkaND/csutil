import { useState, useRef } from 'react'
import dust2 from "../../maps/dust2.jpg"
import { TransformWrapper, 
  TransformComponent, } from "react-zoom-pan-pinch"
import ToolBar from './components/Toolbar'
import Smoke from './components/Smoke'
import { useSelector } from 'react-redux'

function App() {
  const [count, setCount] = useState(0)
  const calloutsEnabled = useSelector(
    (state) => state.callouts.value)
  
  return (
    <div>
      <h1>CSutil</h1>
      <ToolBar /> 
      <TransformWrapper doubleClick={{disabled: true}}>
        <TransformComponent>
          <img src={dust2}></img>
          <Smoke left={210} top={200} name={"bdoor"}/>
          <Smoke left={80} top={280} name={"tunnel1"}/>
          <label style={{left: "80px", top: "100px", 
          display: calloutsEnabled ? "block" : "none"}} 
          id='callout'>test label</label>
        </TransformComponent>
      </TransformWrapper>
    </div>
  )
}

export default App
