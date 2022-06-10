import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
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
  return (
    <h2 className={styles.title}>
      <Link className={styles.postLink} to={`post/${id}`}>
        {title}
      </Link>
      <Routes>
        <Route
          path="post/:id"
          element={
            <Post
              title={title}
              author={author}
              created={created}
              selftext={selftext}
              id={id}
              thumbnail={thumbnail}
              preview={preview}
              ups={ups}
              onClose={() => {}}
            />
          }
        ></Route>
      </Routes>
    </h2>
  );
}
