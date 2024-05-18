import { useContext, useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectFavorites, selectfilteredAdverts, selectAdvertsLoading } from '../../redux/selectors';

import CardsList from 'components/CardsList';
import Button from 'components/UI/Button';
import NoItems from 'components/NoItems';

import { paginate, scrollSmoothlyTo } from 'services/helpers';
import PaginationCtx from 'ctx/store';

import styles from './FavoritesPage.module.css'

const FavoritesPage = () => {
  const cardsList = useSelector(selectfilteredAdverts);
  const favoritesIDs = useSelector(selectFavorites);
  const { currentPage, increasePage } = useContext(PaginationCtx);
  const galleryRef = useRef();
  const isLoading = useSelector(selectAdvertsLoading);

  const favoritesList = cardsList.filter(({ _id }) => {
    return favoritesIDs.includes(_id);
  });

  const { cardsPayload, isButtonVisible } = paginate(
    currentPage,
    favoritesList
  );
  const handleClick = () => {
    increasePage();
    scrollSmoothlyTo(galleryRef);
  };

  return (
    <div className={styles.section}>
      <div ref={galleryRef}>
        {favoritesList && <CardsList cards={cardsPayload} />}
        {!favoritesList.length && !isLoading && <NoItems />}
      </div>
      {isButtonVisible && (
        <Button label="Load more" location="loadMore" onClick={handleClick} />
      )}
    </div>
  );
};

export default FavoritesPage;
