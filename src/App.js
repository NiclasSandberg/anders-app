import React, { Component } from "react";
import NavBar from "./components/Navigation/NavBar.js";
import Footer from "./components/Footer/Footer";
import styles from "./App.module.css";
import SideDrawer from "./components/Navigation/MobileNav/SideDrawer.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderComp from "./components/HeaderComp/HeaderComp";
import Space from "./pages/Space/Space/Space";
import Apartment_with_view from "./pages/Space/Space/ApartmentWithView/ApartmentWithView";
import Overlay from "./components/Navigation/Overlay";
import Studio from "./pages/Studio/Studio";
import Main from "./components/Main/Main";
import Home from "./pages/Home/Home";
import Architecture from "./pages/Architecture/Architecture";
import Handcrafted from "./pages/Handcrafted/Handcrafted";
import WrittenWords from "./pages/WrittenWords/WrittenWords";
import ArchitectureRutor from "./pages/Architecture Rutor/ArchitectureRutor.jsx";
import NewYork from "./pages/WrittenWords/NewYork/NewYork";
import SpeedofLife from "./pages/WrittenWords/SpeedofLife/SpeedofLife.jsx";
import CinematographicArchitecture from "./pages/WrittenWords/CinematographicArchitecture/CinematographicArchitecture";
import PublishedArticles from './pages/WrittenWords/PublishedArticles/PublishedArticles';
import FrozenMoments from './pages/FrozenMoments/Frozen_Moments';

class App extends Component {
  state = {
    sideDrawerOpen: false,
    homeImage: false,
  };

  drawerToggleClickHandler = () => {
    //prevState is passed automatically by react
    this.setState((prevState) => {
      //sets to opposite of previous state
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  componentDidMount() {
    console.log("[App.js] ComponentidMount");
  }
 
  //genom att inte ha med drawertogl..hanlder() här nere med parentes enbart pass reference, not executed
  render() {
    let sideDrawer;
    let burgerColor;
    let overlay;
    let header2;
    //const basename = document.querySelector('base')?.getAttribute('href') ?? '/';

    if (this.state.sideDrawerOpen) {
      burgerColor = "color";
      overlay = <Overlay />;
      sideDrawer = <SideDrawer clicked={this.drawerToggleClickHandler} />;
    }

    return (
      <Router basename={process.env.PUBLIC_URL + "/"} /*basename={basename}*/>
        <div className={styles["page-container"]}>
          <div className={styles["content-wrap"]}>
            {/*<header style={ this.state.homeImage ? {backgroundImage: 'none'}: {}}> */}

            <Route exact strict path="/" component={Home} />
            <NavBar
              drawerClickHandler={this.drawerToggleClickHandler}
              newBurgerColor={burgerColor}
            />

            <Route path="/architecture" component={Architecture} />

            <Route path="/craft" component={Handcrafted} />
            <Route path="/studio" component={Studio} />
            <Route path="/frozen-moments" component={FrozenMoments} />
            <Route path="/architecture-rutor" component={ArchitectureRutor} />
            
            
            <Route exact path="/written-words" component={WrittenWords} />
            <Route path="/written-words/speed-of-life" component={SpeedofLife} />
            <Route path="/written-words/new-york,-new-york" component={NewYork} />
            <Route path="/written-words/cinematographic-architecture" component={CinematographicArchitecture} />
            <Route path="/written-words/published-articles" component={PublishedArticles} />
            
            
            {sideDrawer}

            {overlay}
          </div>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
