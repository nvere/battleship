import ship from './assets/ship.jpg';
import AsteroidField from './components/AsteroidField/AsteroidField';
import './App.scss';
import { useState, useEffect } from 'react';
import Laser from "./components/Laser/Laser"

function App () {
  
  const keyPress = (e) => {
    if (e.key=="ArrowLeft")
      try{
        setElementPositionLeft(elementPositionLeft = elementPositionLeft - 5)
      }
      catch(error){
        console.log(error)
      }
		if (e.key=="ArrowRight")
      try{
        setElementPositionLeft(elementPositionLeft = elementPositionLeft + 5)

      }
      catch(error){
        console.log(error)

      }
		if (e.key=="e")
      try{
          console.log("create laser pew pew")
          //setLaserVisible(true)
          updateLaserArray(laserArr++)

        }
      catch(error){
        console.log(error)
        
      }
		
	
  }

  let [elementPositionLeft, setElementPositionLeft] = useState(400)
  const [laserVisible, setLaserVisible] = useState(false);

  let [laserArr, updateLaserArray] = useState(0)

  useEffect(() => {
    window.addEventListener('keydown', keyPress)
  },[]);

  useEffect(() => {

  },[laserArr]);
  
  return (
    <div className="app" >

      <section className='app__background'>

        <div className="app__ship" id="ship" style={{left: elementPositionLeft + 'px', width:'40px', height: '70px', position: 'absolute', top:"750px"}} >
        {/* {laserVisible && <Laser pos={elementPositionLeft} />} */}

        </div>
      <AsteroidField rocketPos= {elementPositionLeft}/>        
      </section>

    </div>
  );
}

export default App;