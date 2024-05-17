import { useRef, useState } from 'react';
import Card from 'components/Card';
import Modal from 'components/Modal';
import DetailedCard from 'components/ModalContent/DetailedCard';

const CardsList = ({ cards }) => {
  const [cardId, setCardId] = useState(null);
  const modalRef = useRef();

  const handleShowMore = id => {
    setCardId(id);
    modalRef.current.open();
  };
  const selectedCard = [...cards].find(({ _id }) => _id === cardId);

  return (
    <ul>
      {cards.map(card => (
        <Card {...card} key={card._id} handleShowMore={handleShowMore} />
      ))}
      <Modal ref={modalRef}>
        {selectedCard && <DetailedCard card={selectedCard} />}
      </Modal>
    </ul>
  );
};

export default CardsList;
