import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "./formikcomment.css";
import { ICommentForm } from "../CommentForm";

interface IErrors {
  comment?: string;
}

export function FormikComment({
  buttonText = "Comment",
  replyReciever,
}: ICommentForm) {
  return (
    <Formik
      initialValues={{ comment: replyReciever ? replyReciever : "" }}
      validate={(values) => {
        const errors: IErrors = {};
        if (!values.comment) {
          errors.comment = "Напишите комментарий";
        } else if (values.comment.length < 4) {
          errors.comment = "Введите больше 3-х символов";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert("Комментарий отправлен!");
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form className={styles.form}>
          <Field
            className={styles.input}
            as="textarea"
            type="comment"
            name="comment"
          />
          <ErrorMessage name="comment" component="div" />
          <button
            className={styles.button}
            type="submit"
            disabled={isSubmitting}
          >
            {buttonText}
          </button>
        </Form>
      )}
    </Formik>
  );
}
