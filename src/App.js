import React,  { Component } from 'react';
import NavBar from './components/Navigation/NavBar.js';
import Footer from './components/Footer/Footer';
import styles from './App.module.css';
import SideDrawer from './components/Navigation/MobileNav/SideDrawer.jsx';

class App extends Component {
  state = {
    sideDrawerOpen: false
  };
  drawerToggleClickHandler = () => {
    //prevState is passed automatically by react
    this.setState((prevState) => {
      //sets to opposite of previous state
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };  
  
  
  
  //genom att inte ha med drawertogl..hanlder() här nere med parentes enbart pass reference, not executed
  render() {
    let sideDrawer;
    let burgerColor;
    if (this.state.sideDrawerOpen){
      
      sideDrawer = <SideDrawer/>;
      burgerColor = 'color';
      
    }
                   
  return (
    <div className="App">             
      
      <header>
      <NavBar drawerClickHandler={this.drawerToggleClickHandler} newBurgerColor={burgerColor}/>
      </header>
      {sideDrawer}
      <Footer />
      </div>
  );
  }
}

export default App;
