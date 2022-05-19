import React from "react";
import styles from "./searchblock.css";

interface ISearchBlock {
  children?: React.ReactChild;
}

export function SearchBlock({ children }: ISearchBlock) {
  return <div className={styles.searchBlock}>{children}</div>;
}
