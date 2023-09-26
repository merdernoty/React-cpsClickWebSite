import React, { useState, useEffect } from "react";
import { Modal } from "./Modal/Modal";
import "./Header.scss";

function Header() {
  const [clickCount, setClickCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [isCounting, setIsCounting] = useState(false);
  const [modalActive, setModalActive] = useState(false);

  useEffect(() => {
    let timer;

    const countdown = () => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      } else {
        // Когда время истекло, устанавливаем modalActive в true
       setModalActive(true);
        clearInterval(timer);
        setIsCounting(false);
        setClickCount(0);
        setTimeLeft(10);
      }
    };

    if (isCounting) {
      timer = setInterval(countdown, 999);
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
    <div className="WrapperMain">
      <div className="WrapperHeader">
        <div className="WrapperBtn">
          <button onClick={handleClick} className="Btn"></button>
        </div>
        <div className="WrapperPar">
          <div className="Parametr1">
            <a>
              Timer: <b>{timeLeft === 0 ? 0 : timeLeft}</b>
            </a>
          </div>
          <div className="Parametr3" >
            <a>
              Score: <b>{clickCount}</b>
            </a>
          </div>
        </div>
      </div>
      {modalActive && <Modal active={modalActive} setActive={setModalActive} />}
    </div>
  );
}

export default Header;
