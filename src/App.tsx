import './App.css'
import AboutComponent from './Components/AboutComponent'
import Call from './Components/Call'
import CallPaper from './Components/CallPaper'
import Comitee from './Components/Comitee'
import Contact from './Components/Contact'
import Fact from './Components/Fact'
import Fees from './Components/Fees'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import Journal from './Components/Journal'
import NavBar from './Components/NavBar'
import Orginizer from './Components/Orginizer'
import Speakers from './Components/Speakers'
import Topic from './Components/Topic'
import Program from './Components/program';

function App() {
  return (
    <>
          <div className='custom-class'></div>
            <NavBar />
            <Hero/> 
            <AboutComponent />
            <Fact />
            <CallPaper />
            <Call />
            <Topic /> 
            <Speakers />
            <Comitee />
            <Orginizer />
            <Program/>
            <Fees />
            <Contact /> 
            <Journal />
            <Footer /> 
          
    </>
  )
}

export default App
