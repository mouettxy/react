import React, { ChangeEvent, FormEvent, useContext, useRef } from "react";
import { commentContext } from "../context/commentContext";
import styles from "./commentform.css";

interface ICommentForm {
  buttonText?: string;
  replyReciever?: string;
}

export function CommentForm({
  buttonText = "comment",
  replyReciever,
}: ICommentForm) {
  let { value, onChange } = useContext(commentContext);
  // if (replyReciever !== undefined) {
  //   onChange(replyReciever);
  // }
  if (value == "" && replyReciever !== undefined) {
    value = replyReciever;
  }

  // const textAreaRef = useRef<HTMLTextAreaElement>(null);

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    onChange(event.target.value);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea
        autoFocus
        // ref={textAreaRef}
        className={styles.input}
        value={value}
        onChange={handleChange}
      />
      <button type="submit" className={styles.button}>
        {buttonText}
      </button>
    </form>
  );
}
