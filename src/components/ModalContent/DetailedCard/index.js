import { useState } from 'react';
import styles from './DetailedCard.module.css';
import icons from '../../../images/icons.svg';
import { compileDetails, compileFeatures, formatPrice } from 'helpers/actions';
import BookingForm from 'components/ModalContent/BookingForm';

const DetailedCard = ({ card }) => {
  const [activeTab, setActiveTab] = useState('features');
  const [isHidden, setIsHidden] = useState(false);

  const handleRatingClick = () => {
    setActiveTab('reviews');
  };

  console.log('isHidden', isHidden);

  const handleReadMore = () => {
    setIsHidden(prev => !prev);
  };

  const cardFeatures = compileFeatures(card.details);
  const detailedInfo = compileDetails(card);

  return (
    <section className={styles.modalContent}>
      <header className={styles.header}>
        <h2 className={styles.title}>{card.name}</h2>
        <div className={styles.ratingLocation}>
          <div className={styles.rating} onClick={handleRatingClick}>
            <svg className={styles.icon}>
              <use xlinkHref={`${icons}#icon-star`}></use>
            </svg>
            <span className={styles.ratingBar}>
              {card.rating} ({card.reviews.length} Reviews)
            </span>
          </div>
          <div className={styles.locationBar}>
            <svg className={styles.icon}>
              <use xlinkHref={`${icons}#icon-location`}></use>
            </svg>
            <span>{card.location}</span>
          </div>
        </div>
        <span className={styles.price}>{formatPrice(card.price)}</span>
      </header>
      <div className={styles.gallery}>
        {card.gallery.map((image, index) => (
          <img
            key={index}
            src={image}
            className={styles.image}
            alt={`Slide ${index}`}
          />
        ))}
      </div>
      <div className={styles.descriptionBar}>
      <p
        className={
          isHidden
            ? `${styles.description} ${styles.hidden}`
            : styles.description
        }
      >
        {card.description}
      </p>
      <button onClick={handleReadMore} className={styles.buttonMore}>
        {isHidden ? 'Read more' : 'Read less'}
      </button>
      </div>
      <nav className={styles.tabs}>
        <button
          className={`${styles.tab} ${
            activeTab === 'features' ? styles.active : ''
          }`}
          onClick={() => setActiveTab('features')}
        >
          Features
        </button>
        <button
          className={`${styles.tab} ${
            activeTab === 'reviews' ? styles.active : ''
          }`}
          onClick={() => setActiveTab('reviews')}
        >
          Reviews
        </button>
      </nav>
      <div className={styles.footer}>
        <div className={styles.tabContent}>
          {activeTab === 'features' && (
            <div className={styles.features}>
              <ul className={styles.featuresList}>
                {cardFeatures &&
                  cardFeatures.map(feature => (
                    <li key={feature.name} className={styles.featuresItem}>
                      <svg className={styles.popIcon}>
                        <use
                          xlinkHref={`${icons}#icon-${feature.iconName}`}
                        ></use>
                      </svg>
                      <span className={styles.featuresValue}>
                        {feature.value}
                      </span>
                      <span className={styles.featuresName}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
              </ul>
              <div className={styles.vehicleDetails}>
                <h4 className={styles.detailsTitle}>Vehicle details</h4>
                <ul className={styles.detailsList}>
                  {detailedInfo.map((detail, index) => (
                    <li key={index}>
                      <span className={styles.detailTitle}>{detail.name}</span>
                      <span className={styles.detailValue}>{detail.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          {activeTab === 'reviews' && (
            <div className={styles.reviews}>
              {card.reviews.map((review, idx) => (
                <div key={idx} className={styles.review}>
                  <div className={styles.reviewHeader}>
                    <span className={styles.letter}>
                      {review.reviewer_name[0]}
                    </span>
                    <div>
                      <h3 className={styles.reviewAuthor}>
                        {review.reviewer_name}
                      </h3>
                      <span className={styles.reviewRating}>
                        {Array.from(
                          { length: review.reviewer_rating },
                          (_, idx) => (
                            <svg className={styles.icon} key={idx}>
                              <use xlinkHref={`${icons}#icon-star`}></use>
                            </svg>
                          )
                        )}
                      </span>
                    </div>
                  </div>
                  <p className={styles.comment}>{review.comment}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        <BookingForm />
      </div>
    </section>
  );
};

export default DetailedCard;
