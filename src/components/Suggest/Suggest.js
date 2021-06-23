import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { IoIosPin } from 'react-icons/io';

const SuggesWrapper = styled.div`
  padding: 10px 8px 0;
  display: flex;
  flex-direction: row;
  margin-bottom: 3px;
`;
const IconWrapper = styled.div`
  width: 25px;
  display: flex;
  justify-content: center;
`;

const IconPinned = styled(IoIosPin)`
  color: #6e7679;
  font-size: 24px;
  background: #e2e4e4;
  padding: 2px;
  border-radius: 50%;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 12px;
`;

const Title = styled.h1`
  font-size: 14px;
  color: #424749;
  margin-bottom: 5px;
`;
const SubTitle = styled.h1`
  font-size: 12px;
  color: #6e7679;
  margin-bottom: 15px;
  white-space: nowrap;
`;
const HrLine = styled.hr`
  border: none;
  border-top: 1px solid #f4f4f4;
  clear: both;

  margin-bottom: 0px;
`;

function Suggest({ onClick, title, address, ...props }) {
  return (
    <SuggesWrapper onClick={onClick}>
      <IconWrapper>
        <IconPinned />
      </IconWrapper>
      <ContentWrapper>
        <Title>{title}</Title>
        <SubTitle>{address}</SubTitle>
        <HrLine />
      </ContentWrapper>
    </SuggesWrapper>
  );
}

export default Suggest;
Suggest.propTypes = {
  title: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
