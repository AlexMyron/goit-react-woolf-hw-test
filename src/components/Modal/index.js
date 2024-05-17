import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';
import icons from '../../images/icons.svg';

const Modal = forwardRef(function Modal({ children }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },

      close() {
        dialog.current.close();
      },
    };
  });

  const handleOverlayClick = e => {
    if (e.target === dialog.current) {
      dialog.current.close();
    }
  };

  return createPortal(
    <dialog ref={dialog} className={styles.dialog} onClick={handleOverlayClick}>
      <form method="dialog" className={styles.form}>
        <button className={styles.button}>
          <svg className={styles.icon}>
            <use xlinkHref={`${icons}#icon-close`}></use>
          </svg>
        </button>
      </form>
      {children}
    </dialog>,
    document.getElementById('modal-root')
  );
});

export default Modal;
