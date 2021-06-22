import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';
import Button from '../Button';

const CardWrapper = Styled.div`
  background: #FFFFFF;
  overflow: hidden;
  box-shadow: 0px 8px 10px rgba(10, 31, 68, 0.1);
  border-radius: 10px;
  cursor: pointer;
`;

const CardContent = Styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

const Title = Styled.h2`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #424749;
  margin-bottom: 6px;
`;

const SubTitle = Styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #6E7679;
  margin-bottom: 25px;
`;

const Footer = Styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
`;

const Price = Styled.div`
  font-weight: 500;
  font-size: 16px;
  color: #424749;
`;

const ImageContainer = Styled.div`
  position: relative;
  padding-top: 52%;
`;

const ImagePosition = Styled.div`
  position: absolute;
  inset: 0px;
`;

const ImageWrapper = Styled.div`
  width: 100%;
    height: 100%;
    position: relative;
`;
const Image = Styled.img`
  left: 0px;
    object-fit: cover;
    object-position: center center;
    position: absolute;
    top: 0px;
    width: 100%;
    height: 100%;
`;

function Card({ title, subTitle, price }) {
  return (
    <CardWrapper>
      <ImageContainer>
        <ImagePosition>
          <ImageWrapper>
            <Image src="https://images.unsplash.com/photo-1481070555726-e2fe8357725c" />
          </ImageWrapper>
        </ImagePosition>
      </ImageContainer>
      <CardContent>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
        <Footer>
          <Price>{price}</Price>
          <Button>ADD+</Button>
        </Footer>
      </CardContent>
    </CardWrapper>
  );
}

export default Card;

Card.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};
