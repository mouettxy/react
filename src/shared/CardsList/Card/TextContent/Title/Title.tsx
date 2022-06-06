import React, { useState } from "react";
import { Post } from "../../../../Post";
import { IData } from "../../../CardsList";
import styles from "./title.css";

export function Title({
  title,
  id,
  author,
  thumbnail,
  created,
  selftext,
  preview,
  ups,
}: IData) {
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
          title={title}
          author={author}
          created={created}
          selftext={selftext}
          id={id}
          thumbnail={thumbnail}
          preview={preview}
          ups={ups}
          onClose={() => {
            setIsModalOpened(false);
          }}
        />
      )}
    </h2>
  );
}
