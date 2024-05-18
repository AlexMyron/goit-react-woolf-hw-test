import { useNavigate } from 'react-router-dom';
import styles from './NoItems.module.css';
import Button from 'components/UI/Button';

import no_cars from '../../images/no_cars.webp';

import { motion } from 'framer-motion';

const NoItems = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/catalog');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={styles.section}
    >
      <motion.img
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={styles.image}
        src={no_cars}
        alt="Road Sign"
        width="268"
        height="268"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className={styles.noItemsText}
      >
        <h2 className={styles.title}>Oooopss, nothing here yet...</h2>
        <p className={styles.message}>
          Please proceed by clicking the button to add your favorite campervans.
        </p>
      </motion.div>
      <Button label="Click me" onClick={handleClick} />
    </motion.div>
  );
};

export default NoItems;
