import React,{useContext} from "react";
import Lighting from '../../../assets/img/Lighting.png';
import Bufello from '../../../assets/img/Bufello.png';
import Poop from '../../../assets/img/poop.png';
import Girl from '../../../assets/img/girl.png';
import Haker from '../../../assets/img/haker.png';
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
    } else if (result < 7) {
      imageToShow = Bufello;
    } else if (result < 8.5) {
      imageToShow = Haker;
    } else if (result < 20) {
      imageToShow = Lighting;
    }

    

    return imageToShow;
  }

  const resultText = (result) => {
    let textToShow = '';

    if (result < 3) {
      textToShow = 'shit';
    } else if (result < 5) {
      textToShow = 'girl';
    } else if (result < 7) {
      textToShow = '';
    } else if (result < 8.5) {
      textToShow = 'Hacker';
    } else if (result < 20) {
      textToShow = 'light';
    }
    // Add a default case here if needed
    return textToShow;
  }

  // Call cps function with value and timer props
  const result = cps(value, timer);
  const imageToShow = resultCount(result);
  const textToShow = resultText(result);

  return (
    <div className={active ? "modal active" : "modal" }
    id={theme}
    >
      <div
        className={active ? "modal__content active" : "modal__content" }
        id={theme}
        onClick={handleModalClick}
      >
        <div>
          <div className="Btn-Wrapper">
            <button onClick={() => setActive(false)} className="btn-close"
            id={theme}>
              <img
                width="30"
                height="30" 
                src="https://img.icons8.com/ios/50/multiply.png"
                alt="multiply"
              />
            </button>
            <div className="Wrapper-Modal">
              <div className="modulContent">
                {imageToShow && <img className="resultPic" src={imageToShow} alt="Lighting" />}
                <p>
                  You are <b className="boldResult">{textToShow}</b>
                </p>
                <p>
                  Score: {result}
                </p>
                <p onClick={() => setActive(false)}className="tryAgain" id={theme}>Try again</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
