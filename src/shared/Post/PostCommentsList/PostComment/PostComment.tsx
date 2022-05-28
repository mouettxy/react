import React, { useRef, useState } from "react";
import { Break } from "../../../Break";
import { Button, EButtonStyle } from "../../../Button";
import { CommentsButton } from "../../../CardsList/Card/Controls/CommentsButton";
import { ShareButton } from "../../../CardsList/Card/Controls/ShareButton";
import { CommentForm } from "../../../CommentForm";
import * as Icons from "../../../Icons";
import { EColor, Text } from "../../../Text";
import styles from "./postcomment.css";
import { ReplyButton } from "./ReplyButton";

export function PostComment() {
  const [isReplyActive, setIsReplyActive] = useState(false);
  const ref = useRef<HTMLAnchorElement>(null);

  return (
    <li className={styles.PostCommentItem}>
      <div className={styles.postComment}>
        <div className={styles.userLink}>
          <img
            className={styles.avatar}
            src="https://cdn.dribbble.com/users/175710/screenshots/3183628/media/64c404e844095b76698071722f27df18.png"
            alt="avatar"
          />
          <a className={styles.username} href="#user-url" ref={ref}>
            Username
          </a>
        </div>
        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>опубликовано </span>
          time
        </span>
      </div>
      <p className={styles.commentText}>
        Далеко-далеко за словесными горами в стране гласных и согласных живут
        рыбные тексты. Если парадигматическая приставка переулка возвращайся
        маленький там проектах залетают необходимыми которое всеми. Своих
        большого подпоясал предупреждал семь рукопись города все.
      </p>
      <div className={styles.controls}>
        <ReplyButton
          onClick={() => {
            setIsReplyActive(true);
          }}
        >
          <Icons.CommentsIcon width={14} height={14} />
          <Text size={14} color={EColor.grey99}>
            Ответить
          </Text>
        </ReplyButton>
        <Break size={16} />
        <ShareButton>
          <Icons.ShareMenuIcon width={14} height={14} />
          <Text size={14} color={EColor.grey99}>
            Поделиться
          </Text>
        </ShareButton>
        <Break size={16} />
        <Button buttonStyle={EButtonStyle.default}>
          <Icons.Warning width={16} height={14} />
          <Text size={14} color={EColor.grey99}>
            Пожаловаться
          </Text>
        </Button>
      </div>
      {isReplyActive && (
        <CommentForm
          buttonText="reply"
          replyReciever={`${ref.current?.innerText}, `}
        />
      )}
    </li>
  );
}
