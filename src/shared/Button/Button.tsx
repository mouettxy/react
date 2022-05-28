import classNames from "classNames";
import React from "react";
import styles from "./button.css";

export enum EButtonStyle {
  default = "default-btn",
  menu = "menu-btn",
}

interface IButtonProps {
  As?: "button" | "a";
  href?: string;
  buttonStyle?: EButtonStyle;
  children?: React.ReactNode;
  onClick?: () => void;
}

export function Button(props: IButtonProps) {
  const {
    As = "button",
    buttonStyle = EButtonStyle.default,
    href,
    children,
    onClick,
  } = props;

  const classes = classNames(styles[buttonStyle]);

  return (
    <As className={classes} onClick={onClick}>
      {children}
    </As>
  );
}
