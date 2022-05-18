import React from "react";
import { EColor, Text } from "../../../../Text";
import styles from "./menuitemslist.css";
import * as Icons from "../../../../Icons";
import { CommentsButton } from "../../Controls/CommentsButton";
import { ShareButton } from "../../Controls/ShareButton";
import { Button, EButtonStyle } from "../../../../Button";
import { SaveButton } from "../../Controls/SaveButton";
import classNames from "classNames";

interface IMenuItemsListProps {
  postId: string;
}

export function MenuItemsList({}: IMenuItemsListProps) {
  return (
    <ul className={styles.menuItemsList}>
      <li className={classNames(styles.menuItem, styles.comments)}>
        <CommentsButton buttonStyle={EButtonStyle.menu}>
          <Icons.CommentsIcon />
          <Text size={12} color={EColor.grey99}>
            Комментарии
          </Text>
        </CommentsButton>
      </li>

      <div className={styles.divider}></div>

      <li className={classNames(styles.menuItem, styles.share)}>
        <ShareButton buttonStyle={EButtonStyle.menu}>
          <Icons.ShareMenuIcon />
          <Text size={12} color={EColor.grey99}>
            Поделиться
          </Text>
        </ShareButton>
      </li>

      <div className={styles.divider}></div>

      <li className={styles.menuItem}>
        <Button buttonStyle={EButtonStyle.menu}>
          <Icons.Block />
          <Text size={12} color={EColor.grey99}>
            Скрыть
          </Text>
        </Button>
      </li>

      <div className={styles.divider}></div>

      <li className={classNames(styles.menuItem, styles.save)}>
        <SaveButton buttonStyle={EButtonStyle.menu}>
          <Icons.SaveMenuIcon />
          <Text size={12} color={EColor.grey99}>
            Сохранить
          </Text>
        </SaveButton>
      </li>

      <div className={styles.divider}></div>

      <li className={styles.menuItem}>
        <Button buttonStyle={EButtonStyle.menu}>
          <Icons.Warning />
          <Text size={12} color={EColor.grey99}>
            Пожаловаться
          </Text>
        </Button>
      </li>
    </ul>
  );
}
