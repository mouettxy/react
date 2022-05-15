import React from "react";
import { Icon } from "../../../../Icon";
import styles from "./sharebutton.css";

interface IShareButtonProps {
  children?: React.ReactNode;
}

export function ShareButton({ children }: IShareButtonProps) {
  return <button className={styles.shareButton}>{children}</button>;
}
