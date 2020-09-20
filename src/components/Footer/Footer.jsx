import React from "react";
import styles from './Footer.module.css';


function Footer() {
  return (
    <div className="App">
      <footer>
        <div className={styles['footer-content']}>
          <div className={styles['footer-section company']}> <p>Mind of an Architect</p></div>

          <div className={styles['footer-section name-association']}><p>Anders Curman Wadman <br />
          Architect SAR / MSA</p></div>
          <div className={styles['footer-section address']}><p>Grenadjärsvägen 6 <br />
            185 41 Vaxholm  <br />Sweden </p> </div>
          <div className={styles['footer-section email-phone']}> <p>+46-(0)76-203 07 58 <br />
      acw@moaa.se</p></div>

        </div>
      </footer>
    </div>
  );
}

export default Footer;