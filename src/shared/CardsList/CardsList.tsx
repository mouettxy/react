import React, { useContext } from "react";
import { postsContext } from "../context/postsContext";
import { IPreview } from "../Post/Post";
import { Card } from "./Card";
import styles from "./cardslist.css";

interface IRespPosts {
  kind: string;
  data: IData;
}
export interface IData {
  title: string;
  id: string;
  author: string;
  thumbnail: string;
  created: number;
  selftext?: string;
  preview: IPreview;
  ups: number;
}

export function CardsList() {
  const respPosts: Array<IRespPosts> = useContext(postsContext);
  console.log(respPosts);

  return (
    <ul className={styles.cardsList}>
      {respPosts.map((post) => (
        <Card
          title={post.data.title}
          id={post.data.id}
          author={post.data.author}
          thumbnail={post.data.thumbnail}
          created={post.data.created}
          key={post.data.id}
          selftext={post.data.selftext}
          preview={post.data.preview}
          ups={post.data.ups}
        />
      ))}
    </ul>
  );
}
