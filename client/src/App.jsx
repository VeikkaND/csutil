import { useNavigate } from 'react-router'
import NavBar from './components/NavBar'
import { useDispatch } from 'react-redux'
import { setMap } from "./reducers/mapSlice"

function App() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const handleRedirect = (event) => {
    dispatch(setMap(event.target.name))
    navigate(`${event.target.name}`)
  }

  return(
    <div>
      <NavBar />
      <button onClick={handleRedirect} 
      name='dust2'>dust 2</button>
      <button onClick={handleRedirect} 
      name='mirage'>mirage</button>
      <button onClick={handleRedirect} 
      name='nuke'>nuke</button>
      <button onClick={handleRedirect} 
      name='train'>train</button>
      <button onClick={handleRedirect} 
      name='inferno'>inferno</button>
      <button onClick={handleRedirect} 
      name='ancient'>ancient</button>
      <button onClick={handleRedirect} 
      name='anubis'>anubis</button>
    </div>
  )
}

export default App
