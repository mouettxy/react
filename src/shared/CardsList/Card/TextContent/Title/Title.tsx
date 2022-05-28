import React, { useState } from "react";
import { Post } from "../../../../Post";
import styles from "./title.css";

interface ITitle {
  title?: string;
}

export function Title({ title }: ITitle) {
  const [isModalOpened, setIsModalOpened] = useState(false);
  return (
    <h2 className={styles.title}>
      <a
        className={styles.postLink}
        href="#post-url"
        onClick={() => {
          setIsModalOpened(true);
        }}
      >
        {title}
      </a>

      {isModalOpened && (
        <Post
          onClose={() => {
            setIsModalOpened(false);
          }}
        />
      )}
    </h2>
  );
}
