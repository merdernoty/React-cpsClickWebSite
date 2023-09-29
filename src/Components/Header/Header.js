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

  const [timeLeft, setTimeLeft] = useState({
    timeing: 1,
    indexProp: 0,
  });

  useEffect(() => {
    let timer;

    const countdown = () => {
      if (timeLeft.timeing > 0) {
        setTimeLeft({ ...timeLeft, timeing: timeLeft.timeing - 1 });
      } else {
        // Когда время истекло, устанавливаем modalActive в true
        setModalActive(true);
        clearInterval(timer);
        setIsCounting(false);
        setClickCount(0);
        setTimeLeft({ timeing: 1, indexProp: 0 });
      }
    };

    if (isCounting) {
      timer = setInterval(countdown, 700);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isCounting, timeLeft]);

  const handleClick = () => {
    if (!isCounting) {
      setIsCounting(true);
    }
    setClickCount(clickCount + 1);
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
            <Timer
              value={timeLeft}
              onClickTimer={(obj) => setTimeLeft(obj)}
            ></Timer>
          </div>
        </div>
      </div>
      {modalActive && <Modal active={modalActive} setActive={setModalActive} />}
    </div>
  );
}

export default Header;
