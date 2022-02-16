import React from "react";
import styles from './Footer.module.css';
import ACW_Logo from '../../assets/img/ACW_Logo_Gray.png';


function Footer() {
  return (
    <div className="App">
      <footer>

        <div className={styles['footer-content']}>
          <div className={styles['logo-brand']}>
            <img className={styles['logotype']} src={ACW_Logo} alt="" />
            <p className={styles['brand']}>CURMAN WADMAN ARCHITECTURE & CRAFT AB</p>
          </div>
          <div className={styles['contact-info']}>
            <ul>
              <li>Anders Curman Wadman </li>
              <li> Architect <span style={{fontSize: '0.85em'}}>SAR/MSA </span></li>
               
               <li>Log Builder/Timber Framer</li>
           
               <li><span><a href="mailto:info@cwarc.se">acw@cwarc.se</a></span></li>
              
              
            </ul>
            {/*<p>Birgitta Wadman <br />
             Architect SAR / MSA
            <br />
              <span><a href="mailto:bw@cwarc.se.se">bw@cwarc.se</a></span>
              <br />
              <span><a href="tel:+46-(0)76-253 04 08">+46-(0)76-253 04 08</a></span>
            </p>
            */}
            <ul>
              <li>Based in the Archipelago</li>
              <li>Satellite office in Västerbotten</li>
              <li><a href="tel+46-(0)70-203 07 58">+46-(0)70-203 07 58</a></li>
              <li>A Heartfelt Thank</li>
            </ul>
           
          </div>
          <ul ><a href="https://www.instagram.com/cwarc.se/">
            <i className="fa fa-instagram" style={{fontSize:'30px', opacity:"0.65"}}></i></a></ul>
        </div>

      </footer>
    </div>
  );
}

export default Footer;