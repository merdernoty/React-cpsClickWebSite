import React, { useContext } from "react";
import "./Footer.scss";
import { ThemeContext } from "../DarkTheme/Theme";
function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="footerbox" id={theme}>
      <span className="footer-text">© 2023 cpsQwerty.click</span>
      <span className="footer-text">Terms and conditions</span>
      <span className="footer-text">Privacy policy</span>
      <span className="footer-text">Contact</span>
      <span className="footer-text">EN FR ES IT</span>
    </div>
  );
}

export default Footer;
