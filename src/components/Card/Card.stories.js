import styled from 'styled-components';
import Card from '.';

export default {
  title: 'Components/Card',
  component: Card,
};

const Wrapper = styled.div`
  max-width: 380px;
`;

const Template = (args) => (
  <Wrapper>
    <Card {...args} />
  </Wrapper>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Roasted Chicken with Scrambled Egg',
  subTitle: 'by Kulina - Uptown Lunch',
  price: '35,000',
};
