import React, { useState, useEffect } from "react";
import Visualizer from "./components/Visualizer.jsx";
import ControlPanel from "./components/ControlPanel.jsx";
import getAsteroidData from "./api/getAsteroidData.js";
import formatDate from "./lib/formatDate.js";
import transformAsteroidData from "./lib/transformAsteroidData.js";

const App = () => {
  const [date, setDate] = useState(new Date());
  const [asteroidData, setAsteroidData] = useState([]);
  const [startTime, setStart] = useState(0);

  useEffect(() => {
    getAsteroidData(formatDate(date)).then(data => {
      const transformed = transformAsteroidData(data);
      setAsteroidData(transformed);
    });
  }, [date]);

  const startAnimation = () => {
    setStart(Date.now());
  };

  return (
    <main>
      <ControlPanel
        date={date}
        setDate={setDate}
        handleClick={startAnimation}
      />
      <Visualizer data={asteroidData} startTime={startTime} />
    </main>
  );
};

export default App;
