import React from 'react';
import styles from './preview.css';

export function Preview() {
  return (
    <div className={styles.preview}>
      <img className={styles.previewImg} src="https://cdn.dribbble.com/userupload/2704993/file/original-b12191bd8ba6f0ce7f9ccf4e9072a329.png?filters:format(webp)" alt="img" />
    </div>
  );
}
