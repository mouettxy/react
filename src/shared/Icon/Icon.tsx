import React from "react";
import styles from "./icon.css";
import { Block } from "../Icons/Block";
import { Warning } from "../Icons/Warning";
import { CommentsIcon, SaveMenuIcon, ShareIcon, ShareMenuIcon } from "../Icons";
import { SaveIcon } from "../Icons";

interface IIconProps {
  name: string;
  width?: number;
  height?: number;
}

interface IIconsMap {
  [key: string]: JSX.Element;
}

export function Icon(props: IIconProps) {
  const iconsMap: IIconsMap = {
    block: <Block {...props} />,
    warning: <Warning {...props} />,
    shareIcon: <ShareIcon {...props} />,
    saveIcon: <SaveIcon {...props} />,
    commentsIcon: <CommentsIcon {...props} />,
    saveMenuIcon: <SaveMenuIcon {...props} />,
    shareMenuIcon: <ShareMenuIcon {...props} />,
  };

  const icon = iconsMap[props.name];

  return icon;
}
