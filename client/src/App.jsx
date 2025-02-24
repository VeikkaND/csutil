import NavBar from './components/NavBar'
import MapButton from './components/MapButton'
import Footer from './components/Footer'

function App() {


  return(
    <div>
      <NavBar />
      <div className='welcome'>
        <h1 id='welcomeHeader'>Welcome to CSutil.app!</h1>
        <p>CSutil.app is a place for learning CS2 lineups and 
          callouts to improve your gameplay.</p>
      </div>
      <div className='mapbuttons'>
        <MapButton name={"dust2"} text={"Dust 2"}/>
        <MapButton name={"mirage"} text={"Mirage"}/>
        <MapButton name={"nuke"} text={"Nuke"}/>
        <MapButton name={"train"} text={"Train"}/>
        <MapButton name={"inferno"} text={"Inferno"}/>
        <MapButton name={"ancient"} text={"Ancient"}/>
        <MapButton name={"anubis"} text={"Anubis"}/>
      </div>
      <Footer />
    </div>
  )
}

export default App
