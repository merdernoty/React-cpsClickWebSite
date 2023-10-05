import React, { useContext } from "react";
import "./Timer.scss";
import { ThemeContext } from "../DarkTheme/Theme";
import "../DarkTheme/Theme.scss";

export const seconds = [
  { timeing: 1, indexProp: 0 },
  { timeing: 5, indexProp: 1 },
  { timeing: 15, indexProp: 2 },
  { timeing: 30, indexProp: 3 },
  { timeing: 60, indexProp: 4 },
];

function Timer({ value, onClickTimer }) {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="TimerMain" id={theme}>
      <ul className="Timer">
        <div className="TimerText">
          {seconds.map((obj, index) => (
            <li
              key={index}
              onClick={() => onClickTimer(obj)}
              className={value.indexProp === obj.indexProp ? "active" : ""}
            >
              {obj.timeing} SEC
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
}

export default Timer;