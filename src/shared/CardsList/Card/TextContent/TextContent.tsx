import React from "react";
import styles from "./textcontent.css";
import { Title } from "./Title";

interface ITextContent {
  author: string;
  title?: string;
  createdAt: Date;
}

export function TextContent({ author, title, createdAt }: ITextContent) {
  const yyyy = createdAt.getFullYear();
  const mm = createdAt.getMonth() + 1;
  const dd = createdAt.getDate();

  const newCreatedAt = dd + "." + mm + "." + yyyy;

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
          <span className={styles.publishedLabel}>опубликовано </span>
          {newCreatedAt}
        </span>
      </div>
      <Title title={title} />
    </div>
  );
}
