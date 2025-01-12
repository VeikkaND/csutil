import { useState } from 'react'
import dust2 from "../../maps/dust2.jpg"
import { TransformWrapper, 
  TransformComponent } from "react-zoom-pan-pinch"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>CSutil</h1>
      <TransformWrapper>
        <TransformComponent>
          <img src={dust2}></img>
        </TransformComponent>
      </TransformWrapper>
    </div>
  )
}

export default App
