import React from "react";
import styles from './Footer.module.css';


function Footer() {
  return (
    <div className="App">
      <footer>
        <div className={styles['footer-content']}>
          <p>Curman Wadman <br class="hide-br"></br> Architects</p>
          <p>Anders Curman Wadman <br />
             Architect SAR / MSA
            <br />
            <span><a href="mailto:acw@cwarc.se">acw@cwarc.se</a></span>
            <br />
            <span><a href="tel:+46-(0)-76-203 07 58">+46-(0)-76-203 07 58</a></span>
          </p>
          <p>Birgitta Wadman <br />
             Architect SAR / MSA
            <br />
            <span><a href="mailto:bw@cwarc.se.se">bw@cwarc.se</a></span>
            <br />
            <span><a href="tel:+46-(0)76-253 04 08">+46-(0)76-253 04 08</a></span>
          </p>
          <p>Grenadjärsvägen 6 <br />
            185 41 Vaxholm  <br />Sweden </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;