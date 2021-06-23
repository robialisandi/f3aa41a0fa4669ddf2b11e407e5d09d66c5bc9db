import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputWrapper = styled.div`
  background: #fff;
  padding: 13px;
  border-radius: 5px;
  display: flex;
  border: 1px solid #f1f1f2;
`;

const InputForm = styled.input`
  background: transparent;
  color: #424749;
  font-weight: 400px;
  font-size: 14px;
  width: 100%;
  border: none;
  &:focus {
    outline: none;
  }
`;

const ImageIcon = styled.img`
  width: 12px;
  margin-right: 15px;
`;

function Input({ icon, placeholder, ...props }) {
  return (
    <InputWrapper>
      {icon ? <ImageIcon src={icon} /> : null}
      <InputForm placeholder={placeholder} {...props} />
    </InputWrapper>
  );
}

export default Input;

Input.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
