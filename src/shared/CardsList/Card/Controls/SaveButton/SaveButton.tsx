import React from "react";
import styles from "./saveButton.css";

interface ISaveButtonProps {
  children?: React.ReactNode;
}

export function SaveButton({ children }: ISaveButtonProps) {
  return <button className={styles.saveButton}>{children}</button>;
}
