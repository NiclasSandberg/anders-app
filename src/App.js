import React, { Component } from "react";
import NavBar from "./components/Navigation/NavBar.js";
import Footer from "./components/Footer/Footer";
import styles from "./App.module.css";
import SideDrawer from "./components/Navigation/MobileNav/SideDrawer.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Apartment_with_view from "./pages/Space/Space/ApartmentWithView/ApartmentWithView";
import Overlay from "./components/Navigation/Overlay";
import Studio from "./pages/Studio/Studio";
import Home from "./pages/Home/Home";
import Architecture from "./pages/Architecture/Architecture";
import Handcrafted from "./pages/Handcrafted/Handcrafted";
import WrittenWords from "./pages/WrittenWords/WrittenWords";
import ArchitectureRutor from "./pages/Architecture Rutor/ArchitectureRutor.jsx";
import NewYork from "./pages/WrittenWords/NewYork/NewYork";
import SpeedofLife from "./pages/WrittenWords/SpeedofLife/SpeedofLife.jsx";
import CinematographicArchitecture from "./pages/WrittenWords/CinematographicArchitecture/CinematographicArchitecture";
import PublishedArticles from './pages/WrittenWords/PublishedArticles/PublishedArticles';
import FrozenMoments from './pages/FrozenMoments/Frozen_Moments.jsx';
import Colour from './pages/FrozenMoments/Colour.jsx';
import Beauty from './pages/MindofanArchitect/Beauty/Beauty.jsx';
import KeeponDreaming from "./pages/MindofanArchitect/KeeponDreaming/KeeponDreaming.jsx";
import OnArchitecture from "./pages/MindofanArchitect/OnArchitecture/OnArchitecture.jsx";

class App extends Component {

  state = {
    sideDrawerOpen: false,
    homeImage: false,
    subMenuFroz: false,
    subMenuMind: false
  };

  drawerToggleClickHandler = () => {

    //prevState is passed automatically by react
    this.setState((prevState) => {
      //sets to opposite of previous state
      return { sideDrawerOpen: !prevState.sideDrawerOpen
               };
    });
  };

  drawerSubMenuFrozToggleClickHandler = () => {
    //prevState is passed automatically by react
    this.setState((prevState) => {
      //sets to opposite of previous state
      console.log('this is Submenu Froz')
      return { subMenuFroz: !prevState.subMenuFroz };
      
    });
  };
  
  drawerSubMenuMindToggleClickHandler = () => {

    //prevState is passed automatically by react
    this.setState((prevState) => {
      //sets to opposite of previous state
      console.log('this is Submenu handler')
      return { subMenuMind: !prevState.subMenuMind };
      
    });
  };

  drawerNoneSubMenuClickHandler = () => {
    console.log('drawerNoneSubMenuClickHandler');
   this.setState({
      subMenuFroz: false,
      subMenuMind:false
    });
   
  }
  
  componentDidMount() {
    console.log("[App.js] ComponentidMount");
    
  }
  componentDidUpdate(){
    console.log(this.state.sideDrawerOpen);
    console.log(this.state.subMenuFroz);
    console.log('component did update - APP.js')
    
  }
  
  //genom att inte ha med drawertogl..hanlder() här nere med parentes enbart pass reference, not executed
  render() {
    let sideDrawer;
    let overlay;
    let header2;
    let frozenMoments;
    //const basename = document.querySelector('base')?.getAttribute('href') ?? '/';

    if (this.state.sideDrawerOpen) {
      overlay = <Overlay />;
      sideDrawer = <SideDrawer clickedSubMenuFroz={this.drawerSubMenuFrozToggleClickHandler} clickedSubMenuMind={this.drawerSubMenuMindToggleClickHandler} 
      clickedNoneSubMenu={this.drawerNoneSubMenuClickHandler} openFroz={this.state.subMenuFroz} openMind={this.state.subMenuMind} clicked={this.drawerToggleClickHandler} />;
    } 
    
    return (

      <Router basename={process.env.PUBLIC_URL + "/"} /*basename={basename}*/>

        <div className={styles["page-container"]}>
          <div className={styles["content-wrap"]}>
            {/*<header style={ this.state.homeImage ? {backgroundImage: 'none'}: {}}> */}
            <Route exact strict path="/" component={Home} />
            <NavBar 
              drawerClickHandler={this.drawerToggleClickHandler}
              sideDrawerIsOpen={this.state.sideDrawerOpen}
            />

            <Route path="/architecture" component={Architecture} />

            <Route path="/craft" component={Handcrafted} />
            <Route path="/studio" component={Studio} />
            
            <Route path="/frozen-moments/black-white" component={() => (<FrozenMoments />)}/>
            <Route path="/frozen-moments/colour" component={() => (<Colour />)}/>
            {/*<Route path="/frozen-moments/black-white" component={FrozenMoments}/>*/}
            <Route path="/architecture-rutor" component={ArchitectureRutor} />
            <Route path="/mind-of-an-architect/beauty" component={Beauty} />
            <Route path="/mind-of-an-architect/keep-on-dreaming" component={KeeponDreaming} />
            <Route path="/mind-of-an-architect/on-architecture" component={OnArchitecture} />

            <Route exact path="/written-words" component={WrittenWords} />
            <Route path="/written-words/speed-of-life" component={SpeedofLife} />
            <Route path="/written-words/new-york,-new-york" component={NewYork} />
            <Route path="/written-words/cinematographic-architecture" component={CinematographicArchitecture} />
            <Route path="/written-words/published-articles" component={PublishedArticles} />
            
            <div className={styles['side-drawer']}>
            {sideDrawer}
            {overlay}
            </div>
          </div>

          <Footer />
        </div>
      </Router>

    );

  }
}

export default App;
