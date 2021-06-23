import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Location from '../components/Location';
import DatePicker from '../components/DatePicker';
import Tabs from '../components/Tabs';
import TabPane from '../components/Tabs/TabPane';
import Card from '../components/Card';
import Cart from '../components/Cart';
import Modal from '../components/Modal';
import Input from '../components/Input';
import Suggest from '../components/Suggest';
import { HiOutlineArrowLeft } from 'react-icons/hi';

import { debounce } from '../utils/helpers';
import { Products } from '../data/Product';

const Container = styled.div`
  max-width: 375px;
  margin: 0 auto;
`;

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 0 15px;
  background: #fff;
`;

const IconBack = styled(HiOutlineArrowLeft)`
  font-size: 21px;
  color: #424749;
`;

const TabsWrapper = styled.div`
  top: ${({ top }) => (top ? '115px' : '45px')};
  position: fixed;
  transition: top 0.6s;
  width: 375px;
  z-index: 1;
`;

const DateWrapper = styled.div`
  background: #ffffff;
`;

const WrapperProduct = styled.div`
  padding: 80px 16px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 16px;
`;

//MOdal components
const HeadingModal = styled.h1`
  color: #424749;
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
  margin-bottom: 20px;
`;

const SuggestContent = styled.div`
  background: transparent;
  margin-top: 25px;
  overflow-y: auto;
`;

const Home = (props) => {
  const { cart, total } = useSelector((state) => state.cart);
  console.log('cart', cart);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [show, setShow] = useState(false);
  const [qAddress, setQAddress] = useState('');

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);

    setPrevScrollPos(currentScrollPos);
  }, 50);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  const selectedDay = (val) => {
    console.log(val);
  };

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  return (
    <Container>
      <HeaderWrapper>
        <Header>
          <IconBack />
          <Location name="Tokopedia Tower" onClick={showModal} />
        </Header>
        <DateWrapper>
          <DatePicker
            getSelectedDay={selectedDay}
            endDate={120}
            selectDate={new Date('2020-04-30')}
            labelFormat={'MMMM'}
            color={'#424749'}
          />
        </DateWrapper>
        <hr />
      </HeaderWrapper>
      <TabsWrapper top={visible}>
        <Tabs>
          <TabPane name="Launch" key="1" />
          <TabPane name="Dinner" key="2" />
        </Tabs>
      </TabsWrapper>
      <WrapperProduct>
        <Grid>
          {Products &&
            Products.map((item, index) => {
              return (
                <Card
                  key={item.id}
                  title={item.name}
                  subTitle={item.merchant}
                  price={item.price}
                  image={item.image}
                  item={item}
                />
              );
            })}
        </Grid>
      </WrapperProduct>
      <Cart
        items={cart.length.toString()}
        price={total}
        show={cart.length > 0}
      />
      <Modal show={show} handleClose={hideModal}>
        <HeadingModal>Cek manakan yang tersedia di lokasi kamu!</HeadingModal>
        <Input
          icon="assets/icons/pinned.svg"
          name="search"
          placeholder="Cari Alamat!"
          value={qAddress}
          onChange={(e) => setQAddress(e.target.value)}
        />
        <SuggestContent>
          <Suggest
            title="Kulina"
            address="Jalan Tulodong Atas 28, Senayan Kebayoran"
            onClick={() => console.log('Clicked from Sugges')}
          />
          <Suggest
            title="Pancoran Riverside Apartment"
            address="RT. 06/RW.1 Pandeglang, Pancoran, South Jakarta"
            onClick={() => console.log('Clicked from Sugges')}
          />
          <Suggest
            title="Jalan Tulodong Atas 28"
            address="Jalan Tulodong Atas 28, Senayan Kebayoran"
            onClick={() => console.log('Clicked from Sugges')}
          />
          <Suggest
            title="Block 71 Jakarta"
            address="Jalan Tulodong Atas 28, Senayan Kebayoran"
            onClick={() => console.log('Clicked from Sugges')}
          />
        </SuggestContent>
      </Modal>
    </Container>
  );
};

// Home.propTypes = {};

export default Home;
