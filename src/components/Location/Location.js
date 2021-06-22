import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { IoIosArrowDown } from 'react-icons/io';

const LocationContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 16px;
`;

const LocationWrapper = styled.div`
  display: flex;
`;

const Tittle = styled.span`
  text-transform: uppercase;
  font-weight: 500;
  font-size: 9px;
  color: #6e7679;
  margin-bottom: 4px;
`;

const Name = styled.h1`
  font-weight: 500;
  font-size: 16px;
  color: #424749;
  margin-right: 5px;
`;

const ArrowIcon = styled(IoIosArrowDown)`
  color: #f9443c;
`;

function Location({ name, onClick, ...props }) {
  return (
    <LocationContainer>
      <Tittle>Alamat Pengantar</Tittle>
      <LocationWrapper onClick={onClick}>
        <Name>{name}</Name>
        <ArrowIcon />
      </LocationWrapper>
    </LocationContainer>
  );
}

export default Location;

Location.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
