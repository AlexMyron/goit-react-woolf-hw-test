import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorites } from '../../redux/favoritesSlice';
import { selectFavorites } from '../../redux/selectors';

import styles from './Card.module.css';
import icons from '../../images/icons.svg';
import ac from '../../images/ac.svg';
import Button from 'components/Button';

const Card = ({
  gallery,
  name,
  price,
  rating,
  location,
  adults,
  engine,
  transmission,
  form,
  length,
  width,
  height,
  tank,
  reviews,
  consumption,
  description,
  details,
  _id,
}) => {
  const favorites = useSelector(selectFavorites);
  const dispatch = useDispatch();
  const handleFavorites = () => dispatch(toggleFavorites(_id));
  const isCardFavorite = () => favorites.some(id => id === _id);
  const buttonClass = isCardFavorite()
    ? `${styles.iconHeart} ${styles.iconHeartFav}`
    : `${styles.iconHeart}`;

  return (
    <li className={styles.card}>
      <div className={styles.imageBar}>
        <img src={gallery[0]} alt={name} className={styles.image} loading='lazy' />
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.title}>{name}</h2>
          <div className={styles.price}>
            <div className={styles.priceBar}>
              €<span>{price}</span>
            </div>
            <button className={styles.addButton} onClick={handleFavorites}>
              <svg className={buttonClass}>
                <use xlinkHref={`${icons}#icon-heart`}></use>
              </svg>
            </button>
          </div>
        </div>
        <div className={styles.details}>
          <div className={styles.rating}>
            <svg className={styles.icon}>
              <use xlinkHref={`${icons}#icon-star`}></use>
            </svg>
            <span className={styles.ratingBar}>
              {rating} ({reviews.length} Reviews)
            </span>
          </div>
          <div className={styles.locationBar}>
            <svg className={styles.icon}>
              <use xlinkHref={`${icons}#icon-location`}></use>
            </svg>
            <span>{location}</span>
          </div>
        </div>
        <p className={styles.description}>{description}</p>
        <div className={styles.info}>
          <div className={styles.infoItem}>
            <svg className={styles.iconFilled}>
              <use xlinkHref={`${icons}#icon-adults`}></use>
            </svg>
            <span>{adults} adults</span>
          </div>
          <div className={styles.infoItem}>
            <svg className={styles.iconLocation}>
              <use xlinkHref={`${icons}#icon-transmission`}></use>
            </svg>
            <span>{transmission}</span>
          </div>
          <div className={styles.infoItem}>
            <svg className={styles.iconFilled}>
              <use xlinkHref={`${icons}#icon-petrol`}></use>
            </svg>
            <span>{tank}</span>
          </div>
          <div className={styles.infoItem}>
            <svg className={styles.iconLocation}>
              <use xlinkHref={`${icons}#icon-kitchen`}></use>
            </svg>
            <span>{details.kitchen}</span>
          </div>
          <div className={styles.infoItem}>
            <svg className={styles.iconLocation}>
              <use xlinkHref={`${icons}#icon-beds`}></use>
            </svg>
            <span>{details.beds} beds</span>
          </div>
          {details.airConditioner && (
            <div className={styles.infoItem}>
              <img src={ac} alt="wind icon" className={styles.icon} />
              <span>AC</span>
            </div>
          )}
        </div>
        <div className={styles.footer}>
          <Button label="Show more" />
        </div>
      </div>
    </li>
  );
};

export default Card;
