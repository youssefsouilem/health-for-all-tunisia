import "./index.css";
import NavBar from './compoments/NavBar'
import Hero from './compoments/Hero'
import Vision from './compoments/Vision'
import Data from './compoments/Data'
import Mission from './compoments/Mission'
import Challenges from './compoments/Challenges'
import Team from './compoments/Team'
import UnderPage from './compoments/UnderPage'

function App() {
  return (
    <><NavBar />
    <div className="bg-gradient-to-r from-blue-50 via-sky-100 to-blue-200 px-10  min-h-screen">
        <Hero />
        <Vision />
        <Data />
        <Mission />
        <Challenges />
        <Team />
      </div>
      <UnderPage />

    </>
  );
}




export default App
/* 
/*

import UnderPage from './compoments/UnderPage'

    <Conclusion />
    <UnderPage />




    
    </div-->
    */