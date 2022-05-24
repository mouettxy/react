import React from "react";
import styles from "./textcontent.css";
import { Title } from "./Title";

interface ITextContent {
  author: string;
  title: string;
}

export function TextContent({ author, title }: ITextContent) {
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <div className={styles.userLink}>
          <img
            className={styles.avatar}
            src="https://cdn.dribbble.com/users/175710/screenshots/3183628/media/64c404e844095b76698071722f27df18.png"
            alt="avatar"
          />
          <a className={styles.username} href="#user-url">
            {author}
          </a>
        </div>
        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>опубликовано </span>4 часа
          назад
        </span>
      </div>
      <Title title={title} />
    </div>
  );
}
