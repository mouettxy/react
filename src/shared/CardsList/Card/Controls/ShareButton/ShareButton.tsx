import React from "react";
import { Button, EButtonStyle } from "../../../../Button";
import styles from "./sharebutton.css";

interface IShareButtonProps {
  buttonStyle?: EButtonStyle;
  children?: React.ReactNode;
}

export function ShareButton({ children, buttonStyle }: IShareButtonProps) {
  const styles = buttonStyle ? buttonStyle : {};
  return <Button {...styles}>{children}</Button>;
}
