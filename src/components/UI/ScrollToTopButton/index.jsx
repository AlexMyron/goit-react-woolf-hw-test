import React, { useState, useEffect, useContext } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import AppCtx from 'ctx/store';

import styles from './ScrollToTopButton.module.css';
import icons from '../../../images/icons.svg';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [jump, setJump] = useState(false);
  const { isModalShown } = useContext(AppCtx);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleHover = () => {
    setJump(true);
    setTimeout(() => setJump(false), 500);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const jumpAnimation = jump
    ? { y: [0, -10, 0], duration: 0.5, opacity: 1 }
    : { opacity: 1 };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="scroll-to-top">
      <AnimatePresence>
        {isVisible && !isModalShown && (
          <motion.button
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            animate={jumpAnimation}
            onClick={scrollToTop}
            onMouseEnter={handleHover}
            className={styles.button}
          >
            <svg className={styles.icon}>
              <use xlinkHref={`${icons}#icon-arrow-top`}></use>
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ScrollToTopButton;
