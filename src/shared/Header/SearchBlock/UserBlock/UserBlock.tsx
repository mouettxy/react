import React from "react";
import styles from "./userblock.css";
import * as Icons from "../../../Icons";
import { EColor, Text } from "../../../Text";
import { Break } from "../../../Break";

interface IUserBlockProps {
  avatarSrc?: string;
  username?: string;
}

export function UserBlock({ avatarSrc, username }: IUserBlockProps) {
  return (
    <a
      href="https://www.reddit.com/api/v1/authorize?client_id=7v973u0qLIJ4GgB4v50z0w&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity"
      className={styles.userBox}
    >
      <div className={styles.avatarBox}>
        {avatarSrc ? (
          <img
            src={avatarSrc}
            alt="user avatar"
            className={styles.avatarImage}
          />
        ) : (
          <Icons.AnonAvatar />
        )}
      </div>
      <div className={styles.username}>
        <Break size={12} />
        <Text size={20} color={username ? EColor.black : EColor.grey99}>
          {username || "Аноним"}
        </Text>
      </div>
    </a>
  );
}