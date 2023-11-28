import React from 'react';

interface ModalProps {
  imageUrl: string;
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ imageUrl, closeModal }) => (
  <div className="modal">
    <span className="close" onClick={closeModal}>&times;</span>
    <img className="modal-content" src={imageUrl} alt="Enlarged" />
  </div>
);

export default Modal;
