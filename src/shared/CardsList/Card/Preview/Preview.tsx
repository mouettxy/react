import React from "react";
import styles from "./preview.css";

interface IPreview {
  img: string;
}

export function Preview({ img }: IPreview) {
  return (
    <div className={styles.preview}>
      <img className={styles.previewImg} src={img} alt="img" />
    </div>
  );
}
