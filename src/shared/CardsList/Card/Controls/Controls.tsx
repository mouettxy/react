import React from "react";
import styles from "./controls.css";
import { CommentsButton } from "./CommentsButton";
import { KarmaCounter } from "./KarmaCounter";
import { ShareButton } from "./ShareButton";
import { SaveButton } from "./SaveButton";
import { Icon } from "../../../Icon";

export function Controls() {
  return (
    <div className={styles.controls}>
      <KarmaCounter />
      <CommentsButton>
        <Icon name="commentsIcon" />
      </CommentsButton>
      <div className={styles.actions}>
        <ShareButton>
          <Icon name="shareIcon" />
        </ShareButton>
        <SaveButton>
          <Icon name="saveIcon" />
        </SaveButton>
      </div>
    </div>
  );
}
