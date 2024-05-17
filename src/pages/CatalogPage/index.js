import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectfilteredAdverts } from '../../redux/selectors';

import CardsList from 'components/CardsList';

import { paginate } from 'helpers/actions';
import styles from './CatalogPage.module.css';
import Button from 'components/Button';

const CatalogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsList = useSelector(selectfilteredAdverts);

  const { cardsPayload, isButtonVisible } = paginate(currentPage, cardsList);
  const handleClick = () => setCurrentPage(prev => prev + 1);

  return (
    <div className={styles.section}>
      <div className={styles.list}>
        {cardsList && <CardsList cards={cardsPayload} />}
      </div>
      {isButtonVisible && (
        <Button label="Load more" location="loadMore" onClick={handleClick} />
      )}
    </div>
  );
};

export default CatalogPage;
