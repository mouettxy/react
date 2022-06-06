import React from "react";
import { IData } from "../CardsList";
import styles from "./card.css";
import { Controls } from "./Controls";
import { Menu } from "./Menu";
import { Preview } from "./Preview";
import { TextContent } from "./TextContent";

export function Card({
  title,
  id,
  author,
  thumbnail,
  created,
  selftext,
  preview,
  ups,
}: IData) {
  return (
    <li className={styles.card}>
      <TextContent
        title={title}
        author={author}
        created={created}
        selftext={selftext}
        id={id}
        thumbnail={thumbnail}
        preview={preview}
        ups={ups}
      />
      <Preview img={thumbnail} />
      <Menu />
      <Controls ups={ups} />
    </li>
  );
}
