import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';
import { ToastContext } from '../ToastProvider';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({children, id, variant}) {

  const { dismissToast } = React.useContext(ToastContext);

  const variantClass = `${styles.toast} ${styles[variant]}`

  const Icon = ICONS_BY_VARIANT[variant]

  function handleDismiss(id) {
    dismissToast(id)
  }

  return (
    <div className={variantClass}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>{variant} -</VisuallyHidden>
        { children }
      </p>
      <button
        className={styles.closeButton}
        onClick={()=>{handleDismiss(id)}}
        aria-label='Dismiss message'
        aria-live='off'
      >
        <X size={24}/>
      </button>
    </div>
  );
}

export default Toast;
