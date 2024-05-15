import { useSelector } from 'react-redux';
import { selectfilteredAdverts } from '../../redux/selectors';

import CardsList from 'components/CartsList';
import Sidebar from 'components/Sidebar';

import styles from './CatalogPage.module.css';

const CatalogPage = () => {
  const cardsList = useSelector(selectfilteredAdverts);
  return (
    <div className={styles.section}>
      <Sidebar />
      {cardsList && <CardsList cards={cardsList} />}
    </div>
  );
};

export default CatalogPage;
