import React from "react";
import styles from "./preview.css";

interface IPreview {
  img: string;
}

export function Preview({ img }: IPreview) {
  return (
    <div className={styles.preview}>
      <img
        className={styles.previewImg}
        src={
          img.includes("https")
            ? img
            : "https://cdn.dribbble.com/users/175710/screenshots/3183628/media/64c404e844095b76698071722f27df18.png"
        }
        alt="img"
      />
    </div>
  );
}
