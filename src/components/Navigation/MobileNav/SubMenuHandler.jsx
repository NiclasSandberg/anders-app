import React, { Component } from 'react';
import SideDrawer from './SideDrawer.jsx';

class SubMenuHandler extends Component {
    state = {
        subMenuFroz: true,
        subMenuMind: false
      };  
    componentDidMount(){
      console.log('SUBMENUUUUUUUUUUUUUUHANDLER');
    }

    drawerSubMenuFrozToggleClickHandler = () => {
      console.log('this is Submenu FROOOOOOOOOOOOZ <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<');
        //prevState is passed automatically by react
        this.setState((prevState) => {
          //sets to opposite of previous state
          console.log('this is Submenu FROOOOOOOOOOOOZ <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<');
          return { subMenuFroz: !prevState.subMenuFroz };
          
        });
      };
      
      drawerSubMenuMindToggleClickHandler = () => {
        console.log('SUBMENUUUUUUUUUUUUUUUUUUU')
        //prevState is passed automatically by react
        this.setState((prevState) => {
          //sets to opposite of previous state
         
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

    render() {
        let sideDrawer;
        if(this.state.subMenuFroz ? sideDrawer = <SideDrawer clickedSubMenuFroz={this.drawerSubMenuFrozToggleClickHandler} clickedSubMenuMind={this.drawerSubMenuMindToggleClickHandler} 
          clickedNoneSubMenu={this.drawerNoneSubMenuClickHandler} openFroz={this.state.subMenuFroz} openMind={this.state.subMenuMind} clicked={this.drawerToggleClickHandler} />
          : null)
        console.log('SUBMENUUUUUUUUUUUUUUUUUUUUUUUUHANDLER')
        return (
            <div>
                {sideDrawer}
            </div>
        );
    }
}

export default SubMenuHandler;