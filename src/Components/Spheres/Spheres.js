import React, { useContext } from "react";
import "./Spheres.scss";
import { ThemeContext } from "../DarkTheme/Theme";

function Spheres() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="SpheresWrapper" id={theme}>
      <div className="Spheres_1"></div>
      <div className="Spheres_2"></div>
      <div className="Spheres_3"></div>
    </div>
  );
}

export default Spheres;
