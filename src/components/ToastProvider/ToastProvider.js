import React from 'react';
import { useKeydown } from '../../hooks/useKeydown';

export const ToastContext = React.createContext();

function ToastProvider ({ children }) {
  const [toasts, setToasts] = React.useState([
    {
      id: crypto.randomUUID(),
      message: 'Example toast!',
      variant: 'notice',
    },
  ]);

  function createToast(message, variant) {
    
    const nextToasts = [
      ...toasts,
      {
        id: crypto.randomUUID(),
        message:message,
        variant:variant,
      }
    ]
    
    setToasts(nextToasts)
  }

  const clearToasts = React.useCallback(() => {
    setToasts([]);
  }, [])

  useKeydown(clearToasts, 'Escape');

  function dismissToast(id) {
    const nextToasts = toasts.filter(toast => {
      return toast.id !== id
    })

    setToasts(nextToasts)
  }

  return (
    <ToastContext.Provider value={{ toasts, createToast, dismissToast }}>
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider;