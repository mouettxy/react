import React from 'react';
import styles from './controls.css';
import { CommentsButton } from './CommentsButton';
import { KarmaCounter } from './KarmaCounter';
import { ShareButton } from './ShareButton';
import { Button } from './Button';

export function Controls() {
  return (
    <div className={styles.controls}>
      <KarmaCounter />
      <CommentsButton />
      <div className={styles.actions}>
        <Button icon='share' />
        <Button icon='save' />
      </div>
    </div>
  );
}
