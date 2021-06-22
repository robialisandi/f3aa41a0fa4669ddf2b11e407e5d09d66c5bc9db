import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Location from '../components/Location';
import Tabs from '../components/Tabs';
import TabPane from '../components/Tabs/TabPane';
import Card from '../components/Card';
import Cart from '../components/Cart';

const Container = styled.div`
  max-width: 375px;
  margin: 0 auto;
`;
const WrapperProduct = styled.div`
  padding: 24px 16px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 16px;
`;

const Home = (props) => {
  return (
    <Container>
      <Location name="Tokopedia Tower" />
      <Tabs>
        <TabPane name="Launch" key="1" />
        <TabPane name="Dinner" key="1" />
      </Tabs>
      <WrapperProduct>
        <Grid>
          <Card
            title="Roasted Chicken with Scrambled Egg"
            subTitle="by Kulina - Uptown Lunch"
            price="Rp 35,000"
          />
          <Card
            title="Roasted Chicken with Scrambled Egg"
            subTitle="by Kulina - Uptown Lunch"
            price="Rp 35,000"
          />
          <Card
            title="Roasted Chicken with Scrambled Egg"
            subTitle="by Kulina - Uptown Lunch"
            price="Rp 35,000"
          />
        </Grid>
      </WrapperProduct>
      <Cart items="20" price="25,000,000" />
    </Container>
  );
};

// Home.propTypes = {};

export default Home;
