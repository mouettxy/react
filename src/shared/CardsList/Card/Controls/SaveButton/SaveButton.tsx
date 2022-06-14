import React from "react";
import { Button, EButtonStyle } from "../../../../Button";
import styles from "./saveButton.css";

interface ISaveButtonProps {
  buttonStyle?: EButtonStyle;
  children?: React.ReactNode;
}

export function SaveButton({ children, buttonStyle }: ISaveButtonProps) {
  const styles = buttonStyle ? buttonStyle : {};
  return <Button {...styles}>{children}</Button>;
}
