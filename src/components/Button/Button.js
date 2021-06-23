import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';

const ButtonWrapper = Styled.button`
  border: 0;
  cursor: pointer;
  background: ${(props) => (props.background ? props.background : '#F9423A')};
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 7px 20px;
`;

const LinkWrapper = Styled(Link)`
  border: 0;
  cursor: pointer;
  background-color: ${(props) =>
    props.background ? props.background : '#F9423A'};
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 7px 20px;
`;

const Label = Styled.span`
  font-weight: 500;
  font-size: 13px;
  color: ${(props) => (props.dark ? '#424749' : '#ffffff')};
`;

function Button({ children, to, onClick, ...props }) {
  return to ? (
    <LinkWrapper {...props}>
      <Label {...props}>{children}</Label>
    </LinkWrapper>
  ) : (
    <ButtonWrapper onClick={onClick} {...props}>
      <Label {...props}>{children}</Label>
    </ButtonWrapper>
  );
}

export default Button;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  background: PropTypes.string,
  dark: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  dark: false,
};
