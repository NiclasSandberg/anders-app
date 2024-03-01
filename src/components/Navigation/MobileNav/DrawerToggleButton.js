import React, { useState, useEffect } from 'react';
import style from './DrawerToggleButton.module.css';

const DrawerToggleButton = props => {
  const [isOpen, setIsOpen] = useState(false);

  // Use useEffect to update isOpen when props.isItOpen changes
  useEffect(() => {
    setIsOpen(props.sideDrawerIsOpen);
  }, [props.sideDrawerIsOpen]);

  const handleClick = () => {
    window.scrollTo(0, 0);
    props.click();

    // If props.sideDrawerIsOpen is false, set isOpen to false
    if (props.sideDrawerIsOpen === false) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };
  console.log("IS IT OPEN: " + props.sideDrawerIsOpen)
  console.log("isOPEN CHECK:" + isOpen)

  return (
    <button className={style['toggle-button']} onClick={handleClick}>
      <div
        className={`${style['toggle-button__line']} ${isOpen ? style['toggle-button__line_open'] : style['toggle-button__line_close']
          }`}
      ></div>
      <div
        className={`${style['toggle-button__line']} ${isOpen ? style['toggle-button__line_open2'] : style['toggle-button__line_close2']
          }`}
      ></div>
    </button>
  );
};

export default DrawerToggleButton;