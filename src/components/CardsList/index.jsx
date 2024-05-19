import { useRef, useState } from 'react';

import Card from 'components/UI/Card';
import Modal from 'components/UI/Modal';
import DetailedCard from 'components/ModalContent/DetailedCard';

import { motion } from 'framer-motion';

const CardsList = ({ cards }) => {
  const [cardId, setCardId] = useState(null);
  const [isDescriptionHidden, setIsDescriptionHidden] = useState(true);
  const modalRef = useRef();

  const handleShowMore = id => {
    setCardId(id);
    modalRef.current.open();
    setIsDescriptionHidden(false);
  };
  const selectedCard = [...cards].find(({ _id }) => _id === cardId);

  return (
    <motion.ul
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {cards.map(card => (
        <Card {...card} key={card._id} handleShowMore={handleShowMore} />
      ))}
      <Modal ref={modalRef}>
        {selectedCard && (
          <DetailedCard
            card={selectedCard}
            isDescriptionHidden={isDescriptionHidden}
            setDecriptionState={setIsDescriptionHidden}
          />
        )}
      </Modal>
    </motion.ul>
  );
};

export default CardsList;
