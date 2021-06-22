import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { IoIosArrowForward } from 'react-icons/io';
import { IoCartOutline } from 'react-icons/io5';

const CartContainer = styled.div`
  width: 100%;
  position: relative;
`;
const AllWrapper = styled.div`
  display: flex;
  position: fixed;
  bottom: 0px;
  flex-direction: column;
`;
const CartWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  background: #a23530;
  width: 375px;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: -25px;
  z-index: 1;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const IconCart = styled(IoCartOutline)`
  color: #ffffff;
  font-size: 24px;
`;
const IconArrow = styled(IoIosArrowForward)`
  color: #ffffff;
  font-size: 20px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const ItemText = styled.h2`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
  margin-bottom: 5px;
`;
const SubText = styled.span`
  font-weight: 500;
  font-size: 11px;
  line-height: 13px;
  color: #ffffff;
`;

const Shadow = styled.div`
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), #ffffff);
  height: 50px;
  width: 100%;
  bottom: 0px;
`;
function Cart({ show, items, price, ...props }) {
  return (
    <CartContainer>
      <AllWrapper>
        <CartWrapper>
          <TextWrapper>
            <ItemText>
              {items} items | Rp {price}
            </ItemText>
            <SubText>Termasuk ongkos kirim</SubText>
          </TextWrapper>
          <IconWrapper>
            <IconCart />
            <IconArrow />
          </IconWrapper>
        </CartWrapper>
        <Shadow />
      </AllWrapper>
    </CartContainer>
  );
}

export default Cart;

Cart.propTypes = {
  show: PropTypes.bool,
  items: PropTypes.string,
  price: PropTypes.string,
};

Cart.defaultProps = {
  show: false,
  items: '0',
  price: '0',
};
