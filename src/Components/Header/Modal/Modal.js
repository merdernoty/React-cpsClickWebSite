import React, { useContext } from "react";
import Lighting from "../../../assets/img/Lighting.png";
import Bufello from "../../../assets/img/Bufello.png";
import Poop from "../../../assets/img/poop.png";
import Girl from "../../../assets/img/girl.png";
import Haker from "../../../assets/img/haker.png";
import Gigachad from "../../../assets/img/Gigachad.png";
import { ThemeContext } from "../../DarkTheme/Theme";
import "../../DarkTheme/Theme.scss";
import "./Modal.scss";

export const Modal = ({ active, setActive, value, timer }) => {
  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  function cps(value, timer) {
    console.log(timer);
    let result = value / timer;
    return result.toFixed(2);
  }
  const { theme, toggleTheme } = useContext(ThemeContext);
  const resultCount = (result) => {
    let imageToShow = null;

    if (result < 3) {
      imageToShow = Poop;
    } else if (result < 5) {
      imageToShow = Girl;
    } else if (result < 6.5) {
      imageToShow = Bufello;
    } else if (result < 7) {
      imageToShow = Gigachad;
    } else if (result < 10) {
      imageToShow = Haker;
    } else if (result < 20) {
      imageToShow = Lighting;
    }

    return imageToShow;
  };

  const resultText = (result) => {
    let textToShow = "";

    if (result < 3) {
      textToShow = "Bullshit click";
    } else if (result < 5) {
      textToShow = "Girl clicker";
    } else if (result < 6.5) {
      textToShow = "Buffelo click";
    } else if (result < 7) {
      textToShow = "Gigachad click";
    } else if (result < 10) {
      textToShow = "Hacker click";
    } else if (result < 20) {
      textToShow = "Light clicker";
    }
    // Add a default case here if needed
    return textToShow;
  };

  // Call cps function with value and timer props
  const result = cps(value, timer);
  const imageToShow = resultCount(result);
  const textToShow = resultText(result);

  return (
    <div className={active ? "modal active" : "modal"} id={theme}>
      <div
        className={active ? "modal__content active" : "modal__content"}
        id={theme}
        onClick={handleModalClick}
      >
        <div>
          <div className="Btn-Wrapper">
            <button
              onClick={() => setActive(false)}
              className="btn-close"
              id={theme}
            >
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/ios/50/multiply.png"
                alt="multiply"
              />
            </button>
            <div className="Wrapper-Modal">
              <div className="modulContent">
                {imageToShow && (
                  <img className="resultPic" src={imageToShow} alt="Lighting" />
                )}
                <div className="textScoreWrapper">
                  <div className="firstText">
                    You are <b className="boldResult">{textToShow}</b>
                  </div>
                  <div className="secondText">Score: {result}</div>
                </div>
                <p
                  onClick={() => setActive(false)}
                  className="tryAgain"
                  id={theme}
                >
                  Try again
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
