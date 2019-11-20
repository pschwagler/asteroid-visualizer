import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

const ControlPanel = ({ date, setDate }) => {
  return (
    <>
      <h1 className="title">Asteroid Visualizer</h1>
      <h3 className="date-input">Select a date</h3>
      <DatePicker
        selected={date}
        onChange={newDate => {
          setDate(newDate);
        }}
      />
      <button className="run-visualier">Go</button>{" "}
    </>
  );
};

export default ControlPanel;
