import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Styled from 'styled-components';
import Button from '../Button';

import { useDispatch } from 'react-redux';
import { addToCart, subtractQuantity } from '../../store/actions/cart';

const CardWrapper = Styled.div`
  background: #FFFFFF;
  overflow: hidden;
  box-shadow: 0px 8px 10px rgba(10, 31, 68, 0.1);
  border-radius: 10px;
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

const ButtonGrup = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonQty = Styled.button`
  border-radius: 5px;
  background: #fff;
  border: 1px solid #BFBFBF;
  padding: 6px 10px;
  font-size: 13px;

  @media screen and (min-width: 400px) {
    cursor: pointer;
  }
`;

const Qty = Styled.span`
  font-size: 12px;
  width: 25px;
  text-align: center;
`;

function Card({ title, subTitle, price, image, item }) {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const filteItem = cart.find((produk) => produk.id === item.id);
  return (
    <CardWrapper>
      <ImageContainer>
        <ImagePosition>
          <ImageWrapper>
            <Image src={image} />
          </ImageWrapper>
        </ImagePosition>
      </ImageContainer>
      <CardContent>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
        <Footer>
          <Price>{price.toString()}</Price>
          {filteItem && filteItem.quantity >= 1 ? (
            <ButtonGrup>
              <ButtonQty
                onClick={() => {
                  dispatch(subtractQuantity(item));
                }}
              >
                -
              </ButtonQty>
              <Qty>{filteItem.quantity}</Qty>
              <ButtonQty
                onClick={() => {
                  dispatch(addToCart(item));
                }}
              >
                +
              </ButtonQty>
            </ButtonGrup>
          ) : (
            <Button
              onClick={() => {
                dispatch(addToCart(item));
              }}
            >
              ADD+
            </Button>
          )}
        </Footer>
      </CardContent>
    </CardWrapper>
  );
}

export default Card;

Card.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  item: PropTypes.object.isRequired,
};
