import { useDispatch, useSelector } from 'react-redux';
import {
  selectCurrentPage,
  selectfilteredAdverts,
} from '../../../redux/selectors';
import { increasePageNumber } from '../../../redux/paginationSlice';

import Button from 'components/UI/Button';

import { paginate } from 'services/helpers';

const Pagination = ({ navigatePagination }) => {
  const cardsList = useSelector(selectfilteredAdverts);
  const currentPage = useSelector(selectCurrentPage);
  const dispatch = useDispatch();
  const { cardsPayload, isButtonVisible } = paginate(currentPage, cardsList);

  const handleClick = () => {
    dispatch(increasePageNumber());
    navigatePagination({cardsList, cardsPayload});
  };
  return (
    <>
      {isButtonVisible && (
        <Button label="Load more" location="loadMore" onClick={handleClick} />
      )}
    </>
  );
};

export default Pagination;
