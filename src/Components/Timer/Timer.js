import React, {useContext,useState}from "react";
import "./Timer.scss";
import { ThemeContext } from "../DarkTheme/Theme";
import "../DarkTheme/Theme.scss";

function Timer({ value, onClickTimer }) {
  const seconds = [1, 5, 15, 30, 60];
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="TimerMain" id={theme}>
      <ul className="Timer" >
        
        <div className="TimerText">
            
        {seconds.map((timer, index) => (
          <li key={index} onClick={() => onClickTimer(index)} className={value===index? 'active':''}>
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
