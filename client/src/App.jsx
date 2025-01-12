import { useState, useRef } from 'react'
import dust2 from "../../maps/dust2.jpg"
import { TransformWrapper, 
  TransformComponent, } from "react-zoom-pan-pinch"

function App() {
  const [count, setCount] = useState(0)

  const handleClick = (event) => {
    console.log("TODO")
  }

  return (
    <div>
      <h1>CSutil</h1>
      <TransformWrapper doubleClick={{disabled: true}}>
        <TransformComponent>
          <img src={dust2} onClick={handleClick}></img>
          <button style={{left: "245px", top: "225px"}} 
          onClick={handleClick}>test</button>
        </TransformComponent>
      </TransformWrapper>
    </div>
  )
}

export default App
