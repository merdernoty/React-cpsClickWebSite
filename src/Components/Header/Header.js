import React, { useState, useEffect, useContext } from "react";
import { Modal } from "./Modal/Modal";
import "./Header.scss";
import { ThemeContext } from "../DarkTheme/Theme";
import Timer from "../Timer/Timer";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [clickCount, setClickCount] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const [maxCount, setMaxCount] = useState(0);
  const [maxTime, setMaxTime] = useState(10);
  const [timeLeft, setTimeLeft] = useState({
    timeing: maxTime,
    indexProp: 1,
  });

  useEffect(() => {
    let timer;

    const countdown = () => {
      if (timeLeft.timeing > 0) {
        setTimeLeft({ ...timeLeft, timeing: timeLeft.timeing - 1 });
        if (timeLeft.timeing >= maxTime) {
          setMaxTime(timeLeft.timeing);
        }
      } else {
        setModalActive(true);
        clearInterval(timer);
        setIsCounting(false);
        setClickCount(0);
        setTimeLeft({ timeing: maxTime, indexProp: 0 });
        setMaxTime(0);
        
      }
    };

    if (isCounting) {
      timer = setInterval(countdown, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isCounting, timeLeft, maxTime]);

  const handleClick = () => {
    if (!isCounting) {
      setMaxCount(0)
      setIsCounting(true);
    }
    setClickCount(clickCount + 1);
    if (clickCount >= maxCount) {
      setMaxCount(clickCount);
    }
  };

  const handleTimerClick = (selectedTime) => {
    setIsCounting(false);
    setTimeLeft(selectedTime);
  };

  return (
    <div className="WrapperMain" id={theme}>
      <div className="WrapperHeader">
        <div className="WrapperBtn">
          <button onClick={handleClick} className="Btn"></button>
        </div>
        <div className="WrapperPar">
          <div className="Parametr1">
            <a>
              Timer: <b>{timeLeft.timeing === 0 ? 0 : timeLeft.timeing}</b>
            </a>
          </div>
          <div className="Parametr3">
            <a>
              Score: <b>{clickCount}</b>
            </a>
          </div>
          <div>
            <Timer value={timeLeft} onClickTimer={(obj) => setTimeLeft(obj)} />
          </div>
        </div>
        <Timer value={timeLeft} onClickTimer={handleTimerClick} />
      </div>
      {modalActive && (
        <Modal
          active={modalActive}
          setActive={setModalActive}
          value={maxCount}
          timer={timeLeft.timeing}
        />
      )}
    </div>
  );
}

export default Header;