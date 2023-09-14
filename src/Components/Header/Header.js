import React, { useState } from "react";
import "./Header.scss";
function Header() {
  const [Click, setClick] = useState(0)

  return (
    <div className="WrapperMain">
      <div className="WrapperHeader">
        <div className="WrapperBtn">
          <button onClick={() =>setClick(Click + 1)}className="Btn">{Click}</button>
          </div>
          <div className="WrapperPar">
            <div className="Parametr1">1</div>
            <div className="Parametr2">2</div>
            <div className="Parametr3">3</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
