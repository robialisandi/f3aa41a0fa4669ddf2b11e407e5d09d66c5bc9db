import Styled from 'styled-components';
import Tabs from '.';
import TabPane from './TabPane';

export default {
  title: 'Components/Tabs',
  component: Tabs,
};

const Wrapper = Styled.div`
  max-width: 380px;
`;

export const Default = () => (
  <Wrapper>
    <Tabs>
      <TabPane name="Launch" key="1" />
      <TabPane name="Dinner" key="2" />
    </Tabs>
  </Wrapper>
);
