import React, { useContext } from "react";
import { postsContext } from "../context/postsContext";
import { Card } from "./Card";
import styles from "./cardslist.css";

interface IRespPosts {
  kind: string;
  data: IData;
}

interface IData {
  title: string;
  id: string;
  author: string;
  thumbnail: string;
  created: number;
}

export function CardsList() {
  const respPosts: Array<IRespPosts> = useContext(postsContext);

  return (
    <ul className={styles.cardsList}>
      {respPosts.map((post) => (
        <Card listItem={post} key={post.data.id} />
      ))}
    </ul>
  );
}
