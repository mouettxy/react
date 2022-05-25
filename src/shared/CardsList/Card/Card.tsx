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
  id: string;
  author: string;
  thumbnail: string;
  created: number;
}

export function Card({ listItem }: ICard) {
  const title = listItem.data.title;
  const author = listItem.data.author;
  const previewImg = listItem.data.thumbnail;
  const createdAt = new Date(listItem.data.created * 1000);

  return (
    <li className={styles.card}>
      <TextContent title={title} author={author} createdAt={createdAt} />
      <Preview img={previewImg} />
      <Menu />
      <Controls />
    </li>
  );
}
