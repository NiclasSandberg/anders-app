import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom';
import Container from '../../components/Container/Container';
import styles from './WrittenWords.module.css';

export default class WrittenWords extends Component {

  
  render() {
    return (
      <React.Fragment>
      <Container>

          <div className={styles['boxes']}>
        
          <div className={styles['box']}> 
          <Link to="/speed-of-life" >
          <div className={styles['box-text']}>
          
          <p>Anders Wadman ser en utställning av Mikael Jansson på Kulturhuset i Stockholm.Anders Wadman ser en utställning av Mikael Jansson på Kulturhuset i Stockholm</p>
          </div>
          <h2>SPEED OF LIFE</h2>
          </Link>
          </div>
          
          <div className={styles['box']}>
          <Link to="/new-york" >
          <div className={styles['box-text']}>
          
          <p>Efter att under många år ha befunnit sig i arkitekturens stagnerade 
bakvatten upplever nu New York 
Citys internationella arkitekturscen 
en renässans. Ett brett spektrum av 
intressanta projekt fyller i rask takt 
gluggarna i Manhattans grid. En rad 
av världens främsta arkitekter har 
under de senaste åren fått flera stora 
projekt förverkligade och fler är på 
gång. Anders Wadman gjorde en 
resa för Arkitekturs räkning.</p>
          </div>
          <h2>NEW YORK, NEW YORK</h2>
          </Link>
          </div>
          <div className={styles['box']}>
          <div className={styles['box-text']}>
          <p>Anders Wadman ser en utställning av Mikael Jansson på Kulturhuset i Stockholm.Anders Wadman ser en utställning av Mikael Jansson på Kulturhuset i Stockholm</p>
          </div>
          <h2>SPEED OF LIFE</h2>
          </div>
          
          </div>
      </Container>
      </React.Fragment>
    )
  }
}
