import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const TabWrapper = styled.div`
  background: #fff;
  box-shadow: 0px 4px 7px rgba(132, 132, 132, 0.06);
  padding: 16px;
  display: flex;
`;

const Tab = styled.button`
  background: ${({ active }) => (active ? '#424749' : '#ffffff')};
  border: 1px solid ${({ active }) => (active ? '#424749' : '#BFBFBF')};
  box-sizing: border-box;
  width: 50%;
  text-align: center;
  padding: 9px 0;
  color: ${({ active }) => (active ? '#ffffff' : '#BFBFBF')};
  &:not(:first-child):not(:last-child) {
    border-radius: 0;
  }
  &:not(:last-child) {
    border-radius: 5px 0 0 5px;
  }
  &:not(:first-child) {
    border-radius: 0 5px 5px 0;
  }
`;

const Title = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
`;

function Tabs({ children, ...props }) {
  const [tabHeader, setTabHeader] = useState([]);
  const [active, setActive] = useState('');

  useEffect(() => {
    const headers = [];
    React.Children.forEach(children, (element) => {
      if (!React.isValidElement(element)) return;
      const { name } = element.props;
      headers.push(name);
    });
    setTabHeader(headers);
    setActive(headers[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeTab = (name) => {
    console.log('tes', name);
    setActive(name);
  };
  return (
    <TabWrapper>
      {tabHeader.map((item) => (
        <Tab
          key={item}
          active={active === item}
          onClick={() => changeTab(item)}
        >
          <Title>{item}</Title>
        </Tab>
      ))}
    </TabWrapper>
  );
}

export default Tabs;
