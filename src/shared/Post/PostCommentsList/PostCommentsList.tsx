import React from "react";
import styles from "./postcommentslist.css";

interface IPostCommentsList {
  children?: React.ReactNode;
}

export function PostCommentsList({ children }: IPostCommentsList) {
  return <ul className={styles.postCommentsList}>{children}</ul>;
}
