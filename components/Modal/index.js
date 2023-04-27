import styled from "styled-components";
import { useState } from "react";

export default function Modal({ text, modalContent }) {
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
  color: black;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

const ModalStyle = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 0,5rem;
  margin: 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  position: relative;
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  color: black;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  font-size: 1.5rem;
  cursor: pointer;
`;

const ModalContent = styled.div`
  text-align: center;
  padding: 2rem;
`;