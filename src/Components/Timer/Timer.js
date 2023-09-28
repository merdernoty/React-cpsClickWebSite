import React, { useContext } from "react";
import "./Timer.scss";
import { ThemeContext } from "../DarkTheme/Theme";
import "../DarkTheme/Theme.scss";

function Timer({ value, onClickTimer }) {
  const seconds = [1, 5, 10, 15, 30, 60];
  const { theme } = useContext(ThemeContext);

  return (
    <div className="TimerMain" id={theme}>
      <ul className="Timer">
        <div className="TimerText">
          {seconds.map((timer, index) => (
            <li
              key={index}
              onClick={() => onClickTimer(timer)}
              className={value === timer ? "active" : ""}
            >
              {timer}
            </li>
          ))}
        </div>
      </ul>
      <div className="TimerHead">SEC</div>
    </div>
  );
}

export default Timer;
