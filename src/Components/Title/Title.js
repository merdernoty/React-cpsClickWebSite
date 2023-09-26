import './Title.scss';
import React, { useContext } from 'react';
import { ThemeContext } from "../DarkTheme/Theme" // Import the ThemeContext from your App component

function Title({id}) {
  const { theme, toggleTheme } = useContext(ThemeContext); // Access theme and toggleTheme from the context

  return (
    <div className='title-main' id={id}>
      <div className='title-box'>
        <div className='title'>test your arm</div>
      </div>
    </div>
  );
}

export default Title;