import React, { useState, useEffect } from "react";
import transformAsteroidData from "../lib/transformAsteroidData.js";
import Asteroid from "./Asteroid.jsx";

// const testData = [
//   { startTop: 20, startLeft: 0, endTop: 85, endLeft: 600, duration: 1 },
//   { startTop: 600, startLeft: 45, endTop: 300, endLeft: 600, duration: 7 }
// ];

// const asteroids = testData.map(asteroid => (
//   <Asteroid
//     src="./images/asteroid.png"
//     startTop={asteroid.startTop}
//     startLeft={asteroid.startLeft}
//     endTop={asteroid.endTop}
//     endLeft={asteroid.endLeft}
//     duration={asteroid.duration}
//   ></Asteroid>
// ));

const Visualizer = ({ data, startTime }) => {
  const [asteroidIndex, setAsteroidIndex] = useState(-1);
  let asteroids = [];
  if (data) {
    asteroids = data.map(asteroid => (
      <Asteroid
        src="./images/asteroid.png"
        startTop={asteroid.startTop}
        startLeft={asteroid.startLeft}
        endTop={asteroid.endTop}
        endLeft={asteroid.endLeft}
        duration={asteroid.duration}
      ></Asteroid>
    ));
  }
  const getAsteroid = start => {
    let currDuration = 0;
    const now = Date.now();
    // console.log(`checking ${now} vs ${start} (${(now - start) / 1000})`);
    for (let i = 0; i < data.length; i++) {
      currDuration += data[i].duration;
      if ((now - start) / 1000 < currDuration) {
        return setAsteroidIndex(i);
      }
    }
    setAsteroidIndex(-1);
  };

  useEffect(() => {
    const interval = setInterval(() => getAsteroid(startTime), 500);
    return () => clearInterval(interval);
  }, [startTime]);

  return (
    <div className="visualizer">
      {asteroidIndex > -1 ? asteroids[asteroidIndex] : <></>}
      <img
        src="http://pngimg.com/uploads/earth/earth_PNG39.png"
        id="earth"
      ></img>
    </div>
  );
};

export default Visualizer;
