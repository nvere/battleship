import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./AsteroidField.scss";

function AsteroidField(props) {
    let [asteroids, setAsteroids] = useState([]);

    useEffect(() => {
        const getAsteroids = async () => {
            try {
                const response = await axios.get('http://localhost:5050/asteroids');
                console.log("Asteroid Data Obtained", response.data);
                const asteroidsWithInitialY = response.data.map(asteroid => ({ ...asteroid, y: asteroid.y }));
                setAsteroids(asteroidsWithInitialY);
            } catch (error) {
                console.error("API Error", error);
            }
        };

        getAsteroids();
    }, []);

    useEffect(() => {
        const moveAsteroids = () => {
            setAsteroids(currentAsteroids => {
                const newAsteroids = currentAsteroids.map(asteroid => ({
                    ...asteroid,
                    y: asteroid.y + 5
                }));
                let doc =  document.querySelector(".asteroid-field")
                for(let i = 0; i<doc.childNodes.length;i++){
                    let shipPos = document.getElementById("ship")
                    //console.log(shipPos.style.left,doc.childNodes[i].style.left,shipPos.style.top,doc.childNodes[i].style.top)
                    let dx = parseInt(shipPos.style.left) - parseInt(doc.childNodes[i].style.left)
                    let dy = parseInt(shipPos.style.top) - parseInt(doc.childNodes[i].style.top)

                    ////console.log(dx,dy)

                    if((Math.abs(dx) < 20) && (Math.abs(dy) < 40)){
                        const loseTitle = document.createElement("h1");
                        loseTitle.innerText="YOU LOSE";
                        let parentElement = document.querySelector(".app__background");
                        loseTitle.className="lose-text"
                        parentElement.append(loseTitle)
                        break;
                        
                    }
                }
    
                return newAsteroids;
            });
        };
    
        const moveInterval = setInterval(moveAsteroids, 100);
    
        return () => clearInterval(moveInterval);
    }, []);


    return (
        <main className="asteroid-field">
            {asteroids.map((asteroid, index) => (
                <img
                    key={index}
                    className="asteroid"
                    src={asteroid.imageURL}
                    alt={`Asteroid ${index}`}
                    style={{
                        position: 'absolute',
                        left: `${asteroid.x}px`, 
                        top: `${asteroid.y}px`, 
                        width: "60px",
                        height: "60px"
                    }}
                />
            ))}
        </main>
    );
}

export default AsteroidField;
