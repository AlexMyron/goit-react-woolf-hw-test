import HeroSection from '../../components/HeroSection';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <HeroSection />
      <section className={styles.about}>
        <h2>About Us</h2>
        <p>
          Welcome to our campervan rental service! We provide a wide range of campervans for your travel needs. Whether you're planning a weekend getaway or a long road trip, we have the perfect vehicle for you. Our campervans are fully equipped with all the amenities you need for a comfortable and memorable journey.
        </p>
        <p>
          Our mission is to make your travel experience as enjoyable and hassle-free as possible. We offer flexible rental options, competitive pricing, and excellent customer service. Start your adventure with us today!
        </p>
      </section>
    </div>
  );
};

export default HomePage;
