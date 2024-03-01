import React from "react";
import styles from "./KeeponDreaming.module.css";
import Container from '../../../components/Container/Container';

export default function KeeponDreaming() {
  return (
    <Container>
    <div className={styles['text']}>
      <h1>Keep on Dreaming</h1>
      <p>
        We urge all our clients to keep on dreaming and never
        let go of their dreams.
      </p>
      <p>
        We see it as our obligation not only to fulfill these dreams but to
        dream even bigger and fulfill that even bigger dream for future
        generations to keep on dreaming.
      </p>
    </div>
    </Container>
  );
}
