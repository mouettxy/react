import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./commentform.css";

export interface ICommentForm {
  buttonText?: string;
  replyReciever?: string;
}

export function CommentForm({
  buttonText = "comment",
  replyReciever,
}: ICommentForm) {
  const [value, setValue] = useState(replyReciever || "");
  const [touched, setTouched] = useState(false);
  const [valueError, setValueError] = useState("");

  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    textAreaRef.current?.focus();
  }, []);

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setValue(event.target.value);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setTouched(true);
    setValueError(validateValue());

    const isFormValid = !validateValue();
    if (!isFormValid) return;

    alert("Форма отправлена");
  }

  function validateValue() {
    if (value.length <= 3) return "Введите больше 3-х символов";
    return "";
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea
        ref={textAreaRef}
        className={styles.input}
        value={value}
        onChange={handleChange}
        aria-invalid={valueError ? "true" : undefined}
      />
      {touched && valueError && <div>{valueError}</div>}
      <button type="submit" className={styles.button}>
        {buttonText}
      </button>
    </form>
  );
}
