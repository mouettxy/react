import React, {
  ChangeEvent,
  FormEvent,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
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
  // let { value, onChange } = useContext(commentContext);
  // if (replyReciever !== undefined) {
  //   setValue(replyReciever);
  // }
  // if (value == "" && replyReciever !== undefined) {
  //   value = replyReciever;
  // }

  const [value, setValue] = useState(replyReciever);

  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    textAreaRef.current?.focus();
  }, []);

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setValue(event.target.value);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea
        ref={textAreaRef}
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
