import React, { useState, useEffect } from "react";
import Visualizer from "./components/Visualizer.jsx";
import ControlPanel from "./components/ControlPanel.jsx";
import getAsteroidData from "./api/getAsteroidData.js";
import formatDate from "./lib/formatDate.js";

const App = props => {
  const [date, setDate] = useState(new Date());
  const [asteroidData, setAsteroidData] = useState({});

  useEffect(() => {
    console.log("inside use effect:", formatDate(date));
    getAsteroidData(formatDate(date)).then(data => setAsteroidData(data));
  }, [date]);

  return (
    <main>
      <ControlPanel date={date} setDate={setDate} setAsteroidData />
      <Visualizer />
    </main>
  );
};

export default App;
