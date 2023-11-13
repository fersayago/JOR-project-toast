import React from 'react';

import { ToastContext } from '../ToastProvider';
import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ handleDismiss }) {

  const { toasts } = React.useContext(ToastContext);

  React.useEffect(() => {
    console.log(toasts)
  }, [toasts])

  return (
    <ol className={styles.wrapper}>
      {
        toasts.map(({message, variant, id}) => (
          <Toast
            key={id}
            id={id}
            variant={variant}
            handleDismiss={handleDismiss}
          >
            {message}
          </Toast>
        ))
      }
    </ol>
  );
}

export default ToastShelf;
