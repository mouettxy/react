import React from "react";
import { Icon } from "../../../../Icon";
import styles from "./commentsbutton.css";

interface ICommentsButtonProps {
  children?: React.ReactNode;
}

export function CommentsButton({ children }: ICommentsButtonProps) {
  return (
    <button className={styles.commentsButton}>
      {children}
      <span className={styles.commentsNumber}>777</span>
    </button>
  );
}
