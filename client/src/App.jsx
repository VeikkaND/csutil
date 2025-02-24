import NavBar from './components/NavBar'
import MapButton from './components/MapButton'
import Footer from './components/Footer'

function App() {


  return(
    <div>
      <NavBar />
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
