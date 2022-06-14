import React from "react";
import { Button, EButtonStyle } from "../../../../Button";
import styles from "./commentsbutton.css";

interface ICommentsButtonProps {
  buttonStyle?: EButtonStyle;
  children?: React.ReactNode;
}

export function CommentsButton({
  children,
  buttonStyle,
}: ICommentsButtonProps) {
  const styles = buttonStyle ? buttonStyle : {};
  return <Button {...styles}>{children}</Button>;
}
