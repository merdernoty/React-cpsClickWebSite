import React, { useState} from 'react';
import './Theme.scss';
import sunImage from '../../assets/img/png-clipart-emojis-yellow-sun-with-face-thumbnail-transformed 1.png'
import moonImage from '../../assets/img/moon.png'
import Title from '../Title/Title';
import Text from '../Text/Text';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Timer from '../Timer/Timer'
import Spheres from '../Spheres/Spheres';

export const ThemeContext = React.createContext({ theme: 'light' });

function Theme() {
  const [theme, setTheme] = useState('light');
  const [pic, setPick] = useState(sunImage);
  const [timer,setTimer]= useState(0);
  

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
    setPick((item) => (item === sunImage ? moonImage : sunImage));
  };
  
  

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Spheres></Spheres>
        <div className="App" id={theme}>
          <Title />
          <Timer value={timer} onClickTimer={(index)=>
          setTimer(index)
          }/>
          <div className="theme-main">
            <button className="theme-box" id={theme} onClick={toggleTheme}>
              <img src={pic} alt="Theme Icon" className='imgtheme'/>
            </button>
          </div>
          <Header />
          <Text />
          <Footer />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default Theme;