
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Hotel from './Pages/Hotel'
import Intro from './Pages/intro'
import Map from './Pages/Map'
import Navbar from './Pages/Navbar'
import Service from './Pages/Service'
import Contact from './Pages/Contact';

function App() {
  

  return (
    <> 

      <Navbar/>
      <Intro/>
      <Hotel/>
      <Service/>
      <Map/>
      
      

     
      
    </>
  )
}

export default App
