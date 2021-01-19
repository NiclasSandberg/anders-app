import React,  { Component } from 'react';
import NavBar from './components/Navigation/NavBar.js';
import Footer from './components/Footer/Footer';
import styles from './App.module.css';
import SideDrawer from './components/Navigation/MobileNav/SideDrawer.jsx';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HeaderComp from './components/HeaderComp/HeaderComp';
import Space from './pages/Space/Space/Space';
import Apartment_with_view from './pages/Space/Space/ApartmentWithView/ApartmentWithView';
import Overlay from './components/Navigation/Overlay';
import Studio from './pages/Studio/Studio';
import Main from './components/Main/Main';
import Home from './pages/Home/Home';
import Architecture from './pages/Architecture/Architecture';

class App extends Component {
  state = {
    sideDrawerOpen: false,
    homeImage: false
  };
  
  
 
  drawerToggleClickHandler = () => {
    //prevState is passed automatically by react
    this.setState((prevState) => {
      //sets to opposite of previous state
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };  
  componentDidMount () {
    console.log('[App.js] ComponentidMount');
  }
  
  
  //genom att inte ha med drawertogl..hanlder() här nere med parentes enbart pass reference, not executed
  render() {
    
    let sideDrawer;
    let burgerColor;
    let overlay;
    let header2;
    
  

    if (this.state.sideDrawerOpen){
      burgerColor = 'color';
      overlay = <Overlay />;
      sideDrawer = <SideDrawer clicked={this.drawerToggleClickHandler}  />;  
      
    }
         
  return (
    <Router basename={process.env.PUBLIC_URL + "/"}>
    <div className="App">   
     
    {/*<header style={ this.state.homeImage ? {backgroundImage: 'none'}: {}}> */}
    
    <Route exact strict path='/' component={Home} />
    <NavBar drawerClickHandler={this.drawerToggleClickHandler} newBurgerColor={burgerColor}/>
    
    
    
    <Route path='/studio' component={Studio} />
    <Route path='/architecture' component={Architecture} />
      {sideDrawer}
      
      
      {overlay}
      <Footer />
     
      
      </div>
      </Router>
  );
  }
}

export default App;
