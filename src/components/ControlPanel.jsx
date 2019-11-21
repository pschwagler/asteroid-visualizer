import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

const ControlPanel = ({ date, setDate, handleClick }) => {
  return (
    <>
      <h1 className="title">Asteroid Visualizer</h1>
      <h3 className="date-input">Select a date</h3>
      <div className="control-panel">
        <div>
          <DatePicker
            selected={date}
            onChange={newDate => {
              setDate(newDate);
            }}
          />
          <button className="run-visualizer" onClick={handleClick}>
            Go
          </button>{" "}
        </div>
        <div>
          <div className="send-money">
            <a href="https://paypal.me/sendpatmoney?locale.x=en_US">
              Send Pat Money
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ControlPanel;
