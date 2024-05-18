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
    <div className={styles.section}>
      <motion.img initial={{scale: 1.2}} animate={{scale: 1}} transition={{duration: 0.5}} className={styles.image} src={no_cars} alt="Road Sign" />
      <div className={styles.noItemsText}>
        <h2 className={styles.title}>Oooopss, nothing here yet...</h2>
        <p>Please add your favorite vans by clicking the button</p>
      </div>
      <Button label="Click me" onClick={handleClick} />
    </div>
  );
};

export default NoItems;
