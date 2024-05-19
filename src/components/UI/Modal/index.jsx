import {
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';

import AppCtx from '../../../ctx/store';

import styles from './Modal.module.css';
import icons from '../../../images/icons.svg';

const Modal = forwardRef(function Modal({ children }, ref) {
  const modalRef = useRef();
  const [isModal, setIsModal] = useState(false);
  const { toggleModal } = useContext(AppCtx);

  useImperativeHandle(ref, () => ({
    open() {
      setIsModal(true);
      toggleModal();
      document.addEventListener('keydown', handleKeyDown);
      document.querySelector('body').style.overflow = 'hidden';
    },
    close() {
      setIsModal(false);
      toggleModal();
      document.removeEventListener('keydown', handleKeyDown);
      document.querySelector('body').style.overflow = 'auto';
    },
  }));

  const handleOverlayClick = e => {
    if (e.target === modalRef.current) {
      ref.current.close();
    }
  };

  const handleKeyDown = useCallback(
    e => {
      if (e.key === 'Escape') {
        ref.current.close();
      }
    },
    [ref]
  );

  const handleClose = () => {
    ref.current.close();
  };

  useEffect(() => {
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return createPortal(
    <>
      {isModal && (
        <div
          ref={modalRef}
          className={styles.modalOverlay}
          onClick={handleOverlayClick}
        >
          <div className={styles.modalContent}>
            <button className={styles.button} onClick={handleClose}>
              <svg className={styles.icon}>
                <use xlinkHref={`${icons}#icon-close`}></use>
              </svg>
            </button>
            {children}
          </div>
        </div>
      )}
    </>,
    document.getElementById('modal-root')
  );
});

export default Modal;
