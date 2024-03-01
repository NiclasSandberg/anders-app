import React from "react";
import Container from "../../../components/Container/Container.jsx";
import WindowLarge from "../../../assets/img/Mind of an Architect/view-from-window-1300.jpg";
import WindowMedium from "../../../assets/img/Mind of an Architect/view-from-window-700.jpg";
import WindowSmall from "../../../assets/img/Mind of an Architect/view-from-window-500-cropped.jpg";
import BeautyPic from "../../../assets/img/Mind of an Architect/BEAUTY.jpg";
import styles from "./Beauty.module.css";

export default function Beauty() {
  return (
    <Container>
      <div className={styles["beauty-container"]}>
        <img
          src={BeautyPic}
          alt="Window view"
          srcSet={`${BeautyPic} 400w, ${BeautyPic} 700w, ${BeautyPic} 1300w`}
          sizes="70vmin"
        ></img>
        <p>
          Beauty is about simplicity,
          <span> but attaining it is anything but simple.</span>
        </p>
        <p>
        Attaining beauty in a new house in Sweden with a very limited budget is an even more challenging endeavor.
        </p>
        <p>
          You need a very engaged client,<span> acommitted architect and skilled
            craftsmen.</span>
        </p>
        <p>And you need to invest a lot of time,
          both as a client and as an architect.
        </p>
        <p>Time will tell if beauty will
          withstand weather and time.
        </p>
      </div>
    </Container>
  );
}
