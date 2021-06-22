import Styled from 'styled-components';
import Cart from '.';

export default {
  title: 'Components/Cart',
  component: Cart,
};

const Wrapper = Styled.div`
  max-width: 380px;
`;

const Template = (args) => (
  <Wrapper>
    <Cart {...args} />
  </Wrapper>
);

export const Default = Template.bind({});
Default.args = {
  items: '10',
  price: '25,000',
};
