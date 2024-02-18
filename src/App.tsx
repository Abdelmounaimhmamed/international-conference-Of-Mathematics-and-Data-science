import './App.css'
import AboutComponent from './Components/AboutComponent'
import Call from './Components/Call'
import CallPaper from './Components/CallPaper'
import Comitee from './Components/Comitee'
import Contact from './Components/Contact'
import Fact from './Components/Fact'
import Fees from './Components/Fees'
import Footer from './Components/Footer'
// import Journal from './Components/Journal'
import Map from './Components/MAp'
import Orginizer from './Components/Orginizer'
import Speakers from './Components/Speakers'
import Topic from './Components/Topic'
import UpdaeHero from './Components/UpdaeHero'
import Navbar from './Components/UpdateNavBar'
import Program from './Components/program';

function App() {
  return (
    <>
            
      <Navbar />
      <UpdaeHero />
      <AboutComponent />
      <Fact />
      <CallPaper />
      <Speakers />
      <Orginizer />
      <Topic /> 
      <Comitee />
      <Program/>
      <Call />
      <Fees />
           {/* <Journal /> */}
      <Contact /> 
      <Map />
      <Footer /> 


          
    </>
  )
}

export default App
