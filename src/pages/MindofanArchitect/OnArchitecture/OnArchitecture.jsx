import React from 'react'
import styles from './OnArchitecture.module.css';
import Container from '../../../components/Container/Container';

export default function OnArchitecture() {
  return (
    <Container>
      <div className={styles["text"]}>
        <p>What we believe is
          the very core of architecture is light, shadow, materiality, textures,
          reflections, transparency, sound and how the rays from the sun passes
          inside and through the house throughout the day and throughout the
          year. Sometimes radiant, sometimes like a limelight and sometimes as
          diffused as the mist itself.
        </p>
        <p>
          The movie Ellis by the French artist JR featuring Robert de Niro
          conveys these things in a masterly way.
        </p>
        <div className={styles["film-container"]}>
          <div className={styles["iframe-container"]}>
            <iframe
              src="https://www.youtube.com/embed/02BcgqJ6UMI?modestbranding=1&showinfo=0&rel=0&cc_load_policy=1&iv_load_policy=3&color=white&"
              width="560"
              height="315"
              frameborder="0"
            ></iframe>
          </div>
        </div>
        <p>
          Just as this video of Pantheon Temple in Rome conveys what magical
          things could arise if you let the Mind of an Architect free and it
          snows.
        </p>
        <div className={styles["film-container"]}>
          <div className={styles["iframe-container"]}>
            <iframe
              src="https://www.youtube.com/embed/lh7VJaNgh-A?modestbranding=1&showinfo=0&rel=0&cc_load_policy=1&iv_load_policy=3&color=white&mute=1"
              width="560"
              height="315"
              frameborder="0"
              alt="snowing in Pantheon"
            ></iframe>
          </div>
        </div>
        <p>
          The space could become mindbogglingly dreamlike, harnessed by
          professional dancers as in the video Hakanaï.
        </p>
        <div className={styles["film-container"]}>
          <div className={styles["iframe-container"]}>
            <iframe
              style={{ backgroundColor: "black" }}
              src="https://player.vimeo.com/video/46045360?h=5d6849aee9&color=ffffff&title=0&byline=0&portrait=0"
              width="640"
              height="360"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <p>
          Architecture could choose to embrace the layers of time and by doing
          so create a dialogue between the past and the present.
        </p>
        <div className={styles["film-container"]}>
          <div className={styles["iframe-container"]}>
            <iframe
              src="https://www.youtube.com/embed/iuRrlu9m64k?modestbranding=1&showinfo=0&color=white"
              width="560"
              height="315"
              frameborder="0"
            ></iframe>
          </div>
        </div>
        <p>
          And architecture could be enhanced and enriched by skilled and devoted
          craftsmen giving Birth of a Wooden House.
        </p>
        <div className={styles["film-container"]}>
          <div className={styles["iframe-container"]}>
            <iframe
              style={{ backgroundColor: "black" }}
              src="https://player.vimeo.com/video/157572718?h=b8f5f2a911&color=ffffff&title=0&byline=0&portrait=0"
              width="640"
              height="360"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </Container>
  );
}
