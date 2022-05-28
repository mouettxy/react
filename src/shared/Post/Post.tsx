import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { Break } from "../Break";
import { CommentForm } from "../CommentForm";
import styles from "./post.css";
import { PostCommentsList } from "./PostCommentsList";
import { PostComment } from "./PostCommentsList/PostComment";

interface IPost {
  onClose?: () => void;
}

export function Post({ onClose }: IPost) {
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

  return ReactDOM.createPortal(
    <div className={styles.modal} ref={ref}>
      <h2>
        Следует отметить, что новая модель организационной деятельности поможет
      </h2>
      <div className={styles.content}>
        <p>
          Есть над чем задуматься: тщательные исследования конкурентов
          представляют собой не что иное, как квинтэссенцию победы маркетинга
          над разумом и должны быть ассоциативно распределены по отраслям.
          Прежде всего, начало повседневной работы по формированию позиции
          однозначно фиксирует необходимость кластеризации усилий. Но сторонники
          тоталитаризма в науке и по сей день остаются уделом либералов, которые
          жаждут быть превращены в посмешище, хотя само их существование
          приносит несомненную пользу обществу.
        </p>
        <p>
          Есть над чем задуматься: тщательные исследования конкурентов
          представляют собой не что иное, как квинтэссенцию победы маркетинга
          над разумом и должны быть ассоциативно распределены по отраслям.
          Прежде всего, начало повседневной работы по формированию позиции
          однозначно фиксирует необходимость кластеризации усилий. Но сторонники
          тоталитаризма в науке и по сей день остаются уделом либералов, которые
          жаждут быть превращены в посмешище, хотя само их существование
          приносит несомненную пользу обществу.
        </p>
        <p>
          Есть над чем задуматься: тщательные исследования конкурентов
          представляют собой не что иное, как квинтэссенцию победы маркетинга
          над разумом и должны быть ассоциативно распределены по отраслям.
          Прежде всего, начало повседневной работы по формированию позиции
          однозначно фиксирует необходимость кластеризации усилий. Но сторонники
          тоталитаризма в науке и по сей день остаются уделом либералов, которые
          жаждут быть превращены в посмешище, хотя само их существование
          приносит несомненную пользу обществу.
        </p>
      </div>
      <CommentForm />
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
