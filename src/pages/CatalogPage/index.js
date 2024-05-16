import { useDispatch, useSelector } from 'react-redux';
import { selectfilteredAdverts } from '../../redux/selectors';

import CardsList from 'components/CartsList';

import styles from './CatalogPage.module.css';
import Button from 'components/Button';
import { increasePageNumber } from '../../redux/paginationSlice';

const CatalogPage = () => {
  const cardsList = useSelector(selectfilteredAdverts);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(increasePageNumber());
  };
  return (
    <div className={styles.section}>
      <div className={styles.list}>
        {cardsList && <CardsList cards={cardsList} />}
      </div>
      <Button label="Load more" location="loadMore" onClick={handleClick} />
    </div>
  );
};

export default CatalogPage;
