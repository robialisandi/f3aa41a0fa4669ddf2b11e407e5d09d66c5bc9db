import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { IoIosClose } from 'react-icons/io';

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 101;
  display: ${({ show }) => (show ? 'block' : 'none')}; // block
`;

const ModalSection = styled.section`
  position: fixed;
  background: white;
  height: auto;
  height: 100%;
  top: 64%;
  padding: 20px;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 375px;
  border-radius: 10px;
  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const ButtonClose = styled(IoIosClose)`
  color: #424749;
  font-size: 24px;
`;

function Modal({ children, show, handleClose, ...props }) {
  return (
    <ModalWrapper show={show}>
      <ModalSection>
        <HeaderWrapper>
          <ButtonClose onClick={handleClose} />
        </HeaderWrapper>
        {children}
      </ModalSection>
    </ModalWrapper>
  );
}

export default Modal;

Modal.propTypes = {};
