import styled from "styled-components";
import { useState } from "react";

export default function Modal({ text, modalContent }) {

  //Modal state to display the modal
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <div onClick={handleModalOpen}>{text}</div>
      {showModal && (
        <Overlay>
          <ModalStyle>
            <CloseButton onClick={handleModalClose}>X</CloseButton>
            <ModalContent>{modalContent}</ModalContent>
          </ModalStyle>
        </Overlay>
      )}
    </>
  );
}

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 2;
  top: 10rem;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalStyle = styled.div`
  background-color: white;
  color: black;
  border-radius: 10px;
  padding: 1rem;
  margin: 1.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  position: relative;
`;

const CloseButton = styled.button`
  background-color: var(--primary-background);
  border: none;
  color: white;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  font-size: 1.5rem;
  border-radius: 5px;
  cursor: pointer;
`;

const ModalContent = styled.div`
  text-align: center;
  padding: 1rem;
  font-size: 0.8rem;
  font-family: Arial, sans-serif;
`;