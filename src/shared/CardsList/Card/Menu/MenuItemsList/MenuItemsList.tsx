import React from "react";
import { Icon } from "../../../../Icon";
import { EColor, Text } from "../../../../Text";
import styles from "./menuitemslist.css";

interface IMenuItemsListProps {
  postId: string;
}

export function MenuItemsList({}: IMenuItemsListProps) {
  return (
    <ul className={styles.menuItemsList}>
      <li className={styles.menuItem + " " + styles.comments}>
        <Icon name="commentsIcon" />
        <Text size={12} color={EColor.grey99}>
          Комментарии
        </Text>
      </li>

      <div className={styles.divider}></div>

      <li className={styles.menuItem + " " + styles.share}>
        <Icon name="shareMenuIcon" />
        <Text size={12} color={EColor.grey99}>
          Поделиться
        </Text>
      </li>

      <div className={styles.divider}></div>

      <li className={styles.menuItem}>
        <Icon name="block" />
        <Text size={12} color={EColor.grey99}>
          Скрыть
        </Text>
      </li>

      <div className={styles.divider}></div>

      <li className={styles.menuItem + " " + styles.save}>
        <Icon name="saveMenuIcon" />
        <Text size={12} color={EColor.grey99}>
          Сохранить
        </Text>
      </li>

      <div className={styles.divider}></div>

      <li className={styles.menuItem}>
        <Icon name="warning" />
        <Text size={12} color={EColor.grey99}>
          Пожаловаться
        </Text>
      </li>
    </ul>
  );
}
