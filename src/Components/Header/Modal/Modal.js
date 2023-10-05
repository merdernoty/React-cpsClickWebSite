import React from "react";
import "./Modal.scss";
export const Modal = ({ active, setActive }) => {
  const handleModalClick = (e) => {
    e.stopPropagation();
  };


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
              <div className="TitleText" >
                <span>
                  You are <b className="boldRusult">Thunder Cliker</b> 
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
