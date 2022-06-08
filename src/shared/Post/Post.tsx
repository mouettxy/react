import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { Break } from "../Break";
import { KarmaCounter } from "../CardsList/Card/Controls/KarmaCounter";
import { CommentForm } from "../CommentForm";
import { FormikComment } from "../FormikComment";
import styles from "./post.css";
import { PostCommentsList } from "./PostCommentsList";
import { PostComment } from "./PostCommentsList/PostComment";

interface IResolutions {
  url: string;
}

export interface IPreview {
  images: {
    resolutions: IResolutions[];
    source: {
      url: string;
    };
  }[];
}

interface IPost {
  onClose?: () => void;
  title?: string;
  id?: string;
  author?: string;
  thumbnail?: string;
  created: number;
  selftext?: string;
  preview: IPreview;
  ups: number;
}

export function Post({
  title,
  id,
  author,
  thumbnail,
  created,
  selftext,
  preview,
  ups,
  onClose,
}: IPost) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (
        event.target instanceof Node &&
        !ref.current?.contains(event.target)
      ) {
        onClose?.();
      }
    }

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const node = document.querySelector("#modal_root");
  if (!node) return null;

  const createdAt = new Date(created * 1000);
  const yyyy = createdAt.getFullYear();
  const mm = createdAt.getMonth() + 1;
  const dd = createdAt.getDate();

  const newCreatedAt = dd + "." + mm + "." + yyyy;

  return ReactDOM.createPortal(
    <div className={styles.modal} ref={ref}>
      <div className={styles.header}>
        <KarmaCounter ups={ups} />
        <div>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.metaData}>
            <div className={styles.userLink}>
              <img
                className={styles.avatar}
                src="https://cdn.dribbble.com/users/175710/screenshots/3183628/media/64c404e844095b76698071722f27df18.png"
                alt="avatar"
              />
              <a className={styles.username} href="#user-url">
                {author}
              </a>
            </div>
            <span className={styles.createdAt}>
              <span className={styles.publishedLabel}>опубликовано </span>
              {newCreatedAt}
            </span>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <img
          className={styles.image}
          src={
            preview.images[0].source.url !== undefined
              ? preview.images[0].source.url
              : "#"
          }
          alt="Post img"
        />
        <p>{selftext}</p>
      </div>
      {/* <CommentForm /> */}
      <FormikComment />
      <Break top size={16} />
      <PostCommentsList>
        <PostComment />
        <PostComment />
        <PostComment />
      </PostCommentsList>
    </div>,
    node
  );
}
