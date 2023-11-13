import React from 'react';

import { ToastContext } from '../ToastProvider';
import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf() {

  const { toasts } = React.useContext(ToastContext);

  return (
    <ol
      className={styles.wrapper}
      role='region'
      aria-live='polite'
      aria-label='Notification'
    >
      {
        toasts.map(({message, variant, id}) => (
          <Toast
            key={id}
            id={id}
            variant={variant}
          >
            {message}
          </Toast>
        ))
      }
    </ol>
  );
}

export default ToastShelf;
