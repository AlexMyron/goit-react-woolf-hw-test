import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectFavorites, selectfilteredAdverts } from '../../redux/selectors';

import CardsList from 'components/CardsList';
import Button from 'components/Button';

import styles from './FavoritesPage.module.css';
import { paginate } from 'helpers/actions';

const FavoritesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsList = useSelector(selectfilteredAdverts);
  const favoritesIDs = useSelector(selectFavorites);

  const favoritesList = cardsList.filter(({ _id }) => {
    return favoritesIDs.includes(_id);
  });

  const { cardsPayload, isButtonVisible } = paginate(
    currentPage,
    favoritesList
  );
  const handleClick = () => setCurrentPage(prev => prev + 1);

  return (
    <div className={styles.section}>
      <div className={styles.section}>
        {favoritesList && <CardsList cards={cardsPayload} />}
        {!favoritesList.length && <p className={styles.empty}>No items selected</p>}
      </div>
      {isButtonVisible && (
        <Button label="Load more" location="loadMore" onClick={handleClick} />
      )}
    </div>
  );
};

export default FavoritesPage;
