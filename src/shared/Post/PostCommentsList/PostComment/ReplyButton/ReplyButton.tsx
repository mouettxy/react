import React from "react";
import { Button, EButtonStyle } from "../../../../Button";
import styles from "./replybutton.css";

interface IReplyButtonProps {
  buttonStyle?: EButtonStyle;
  children?: React.ReactNode;
  onClick: () => void;
}

export function ReplyButton(props: IReplyButtonProps) {
  return <Button {...props}>{props.children}</Button>;
}
