import React from 'react'
import styled from "styled-components"
import { useSpring, animated } from 'react-spring';
import { MdClose } from 'react-icons/md';

const Background = styled.div`
  width: 50%;
  height: 50%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

const ModalImg = styled.img`
  width: 96%;
  height: 87%;
  border-radius: 10px 0 0 10px;
  background: #000;
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

const Modal = ({showModal, setShowModal,img,Content}) => {
    
    const animation = useSpring({
        config: {
          duration: 250
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`
      });

    return (
        <>
        
        {showModal ? (
        <Background>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
                {img && <ModalImg src={img} alt='modal-image' />}
                {Content}
                <CloseModalButton
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}
                />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}

        </>
    )
}

export default Modal
