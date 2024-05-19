import { useContext, useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectfilteredAdverts } from '../../redux/selectors';

import CardsList from 'components/CardsList';

import { paginate, scrollSmoothlyTo } from 'services/helpers';
import styles from './CatalogPage.module.css';
import Button from 'components/UI/Button';
import AppCtx from 'ctx/store';

const CatalogPage = () => {
  const cardsList = useSelector(selectfilteredAdverts);
  const { currentPage, increasePage } = useContext(AppCtx);
  const galleryRef = useRef();

  const { cardsPayload, isButtonVisible } = paginate(currentPage, cardsList);

  const handleLoadMore = () => {
    increasePage();
    scrollSmoothlyTo(galleryRef);
  };

  return (
    <div className={styles.section}>
      <div className={styles.list} ref={galleryRef}>
        {cardsList && <CardsList cards={cardsPayload} />}
      </div>
      {isButtonVisible && (
        <Button
          label="Load more"
          location="loadMore"
          onClick={handleLoadMore}
        />
      )}
    </div>
  );
};

export default CatalogPage;
