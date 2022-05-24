import React, { useContext } from "react";
import { postsContext } from "../context/postsContext";
import { Card } from "./Card";
import styles from "./cardslist.css";

export function CardsList() {
  const respPosts = useContext(postsContext);

  return (
    <ul className={styles.cardsList}>
      {respPosts.map((post) => (
        <Card listItem={post} />
      ))}
    </ul>
  );
}
