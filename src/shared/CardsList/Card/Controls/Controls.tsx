import React from "react";
import styles from "./controls.css";
import { CommentsButton } from "./CommentsButton";
import { KarmaCounter } from "./KarmaCounter";
import { ShareButton } from "./ShareButton";
import { SaveButton } from "./SaveButton";
import * as Icons from "../../../Icons";
import { Button } from "../../../Button";
import { EColor, Text } from "../../../Text";

interface IControls {
  ups: number;
}

export function Controls({ ups }: IControls) {
  return (
    <div className={styles.controls}>
      <KarmaCounter ups={ups} />
      <div className={styles.commentsButton}>
        <CommentsButton>
          <Icons.CommentsIcon />
          <Text size={12} color={EColor.greyC4}>
            777
          </Text>
        </CommentsButton>
      </div>
      <div className={styles.actions}>
        <ShareButton>
          <Icons.ShareIcon />
        </ShareButton>
        <SaveButton>
          <Icons.SaveIcon />
        </SaveButton>
      </div>
    </div>
  );
}
