import React from "react";
import { Button, EButtonStyle } from "../../../../Button";
import styles from "./saveButton.css";

interface ISaveButtonProps {
  buttonStyle?: EButtonStyle;
  children?: React.ReactNode;
}

export function SaveButton({ children, buttonStyle }: ISaveButtonProps) {
  return <Button {...buttonStyle}>{children}</Button>;
}
