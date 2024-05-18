import { motion } from 'framer-motion';
import styles from './HeroSection.module.css';
import heroImage from '../../images/hero_van.webp';
import Button from 'components/UI/Button';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/catalog');
  };
  return (
    <section className={styles.hero}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={styles.heroContent}
      >
        <h1 className={styles.title}>Explore the World with Our Campervans</h1>
        <p className={styles.subtitle}>
          Find the perfect campervan for your next adventure.
        </p>
        <Button label="Get Started" onClick={handleStart} />
      </motion.div>
      <motion.img
        src={heroImage}
        alt="Campervan"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className={styles.heroImage}
        width="557"  
        height="356"    />
    </section>
  );
};

export default HeroSection;
