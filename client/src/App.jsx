import { useNavigate } from 'react-router'
import NavBar from './components/NavBar'

function App() {
  const navigate = useNavigate()
  
  const handleRedirect = (event) => {
    navigate(`${event.target.name}`)
  }

  return(
    <div>
      <NavBar />
      <button onClick={handleRedirect} 
      name='dust2'>dust 2</button>
      <button onClick={handleRedirect} 
      name='mirage'>mirage</button>
    </div>
  )
}

export default App
