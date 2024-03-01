import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom';
import styles from './WrittenWords.module.css';
import Container from '../../components/Container/Container.jsx';


const WrittenWords = () => {
    const array = ["speed-of-life", "new-york,-new-york", "cinematographic-architecture","published-articles"];
    const altText =['Man wearing rally helmet','New York City skyline rendering', 'Philharmonic Paris Concert Hall rendering','Kraanspoor building'];
    const ingress = ['Anders Wadman ser en utställning av Mikael Jansson på Kulturhuset i Stockholm.','Efter att under många år ha befunnit sig i arkitekturens stagnerade bakvatten upplever nu New York Citys internationella arkitekturscen en renässans. Ett brett spektrum av intressanta projekt fyller i rask takt gluggarna i Manhattans grid. En rad av världens främsta arkitekter har under de senaste åren fått flera stora projekt förverkligade och fler är på gång. Anders Wadman gjorde en resa för Arkitekturs räkning.','Stjärnarkitekten Jean Nouvels spektakulära projekt dyker upp världen över. Kontorsbyggnaden Torre Agbar i Barcelona är ett exempel. Anders Wadman tecknar ett porträtt av den karismatiske och provokative fransmannen.','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '];
    let { url } = useRouteMatch();
    let title = ''; 
    
    
    const mobileImages = array.map((image, index) => {
        title = image.replace(/-/g, ' ').toLocaleUpperCase(); 
        
        return  <div className={styles['gallery-item']}key={index} >
            <Link to={`${url}`+"/"+image} > <img alt={altText[index]} src={require(`../../assets/img/Written_Words/${image}.jpg`)} /></Link>
            <Link to={`${url}`+"/"+image} ><h2>{title}</h2></Link>
            {/*<div><p>{ingress[index]}</p></div> */}</div>  
    });
    
     
    return (
        
        <div>
            <Container>
                <div className={styles['img-container']}>
                    
                    {/*<Link to="/speed-of-life" > 
                        <img src={Speed_of_Life} alt="" /> </Link>
                        <h2><Link to="/speed-of-life" > SPEED OF LIFE</Link></h2>
    </div>*/}
                    {mobileImages}
                    
                   {/*  <div className={styles['gallery-item']}>
                        <img src={New_York_Skyline} alt="" />
                        <h2><Link to="/New-York" >NEW YORK, NEW YORK</Link></h2>
                    </div>

                    <div className={styles['gallery-item']}>
                        <img src={Philharmonic_Paris} alt="" />
                        <h2><Link to="/Cinematographic-Architecture" >CINEMATOGRAPHIC ARCHITECTURE</Link></h2>
                    </div>

                    <div className={styles['gallery-item']}>
                        <img src={Kraanspor} alt="" />
                        <h2><Link to="/Cinematographic-Architecture" >CINEMATOGRAPHIC ARCHITECTURE</Link></h2>
                    */}

                

                </div>
            </Container>
        </div>
    )
}

export default WrittenWords
