import React from "react";
import styles from "./card.css";
import { Controls } from "./Controls";
import { Menu } from "./Menu";
import { Preview } from "./Preview";
import { TextContent } from "./TextContent";

interface ICard {
  listItem: IListItem;
}

interface IListItem {
  data: IData;
}

interface IData {
  title: string;
  id: number;
  author: string;
}

export function Card({ listItem }: ICard) {
  const title = listItem.data.title;
  const author = listItem.data.author;
  const id = listItem.data.id;

  return (
    <li className={styles.card} key={id}>
      <TextContent title={title} author={author} />
      <Preview />
      <Menu />
      <Controls />
    </li>
  );
}
