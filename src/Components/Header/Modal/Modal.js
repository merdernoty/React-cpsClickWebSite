import React from "react";
import "./Modal.scss";
import Lighting from '../../../assets/img/Lighting.png';

export const Modal = ({ active, setActive, value, timer }) => {
  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  function cps  (value, timer) {
    
    console.log(timer);
    let result = value / timer;
    return result;
  };

  // Call cps function with value and timer props
  const result = cps(value, timer);

  return (
    <div className={active ? "modal active" : "modal"}>
      <div
        className={active ? "modal__content active" : "modal__content"}
        onClick={handleModalClick}
      >
        <div>
          <div className="Btn-Wrapper">
            <button onClick={() => setActive(false)} className="btn-close">
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/ios/50/multiply.png"
                alt="multiply"
              />
            </button>
            <div className="Wrapper-Modal">
              <div className="modulContent">
                <img className="lighting" src={Lighting} alt="Lighting" />
                <p>
                  You are <b className="boldRusult">Thunder Cliker</b>
                </p>
                <p>
                  score {result}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};