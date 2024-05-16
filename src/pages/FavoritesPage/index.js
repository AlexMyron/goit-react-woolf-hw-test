import { useSelector } from 'react-redux';
import { selectFavorites, selectfilteredAdverts } from '../../redux/selectors';

import CardsList from 'components/CartsList';

import styles from './FavoritesPage.module.css';

const FavoritesPage = () => {
  const cardsList = useSelector(selectfilteredAdverts);
  const favoritesIDs = useSelector(selectFavorites);

  const favoritesList = cardsList.filter(({ _id }) => {
    return favoritesIDs.includes(_id);
  });

  return (
    <div className={styles.section}>
      {favoritesList && <CardsList cards={favoritesList} />}
    </div>
  );
};

export default FavoritesPage;
