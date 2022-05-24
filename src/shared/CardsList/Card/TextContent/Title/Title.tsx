import React from "react";
import styles from "./title.css";

interface ITitle {
  title: string;
}

export function Title({ title }: ITitle) {
  return (
    <h2 className={styles.title}>
      <a className={styles.postLink} href="#post-url">
        {title}
      </a>
    </h2>
  );
}
