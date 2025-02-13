import React from 'react';

import { ToastContext } from '../ToastProvider';
import Button from '../Button';
import ToastShelf from '../ToastShelf'
import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {

  const { createToast } = React.useContext(ToastContext);

  const [message, setMessage] = React.useState('Example message!')
  const [variant, setVariant] = React.useState('notice')

  const handleCreateToast = (e) => {
    e.preventDefault()

    createToast(message, variant)

    setMessage('Example message!')
    setVariant('notice')
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf/>

      <form className={styles.controlsWrapper} onSubmit={handleCreateToast}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value)
              }}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >

            {
              VARIANT_OPTIONS.map(option => (
                <label htmlFor={`variant-${option}`} key={option}>
                  <input
                    id={`variant-${option}`}
                    type='radio'
                    name='variant'
                    value={option}
                    checked={option === variant}
                    onChange={(e) => {
                      setVariant(e.target.value)
                    }}
                  />
                  { option }
                </label>
              ))
            }

          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button disabled={message===''}>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
