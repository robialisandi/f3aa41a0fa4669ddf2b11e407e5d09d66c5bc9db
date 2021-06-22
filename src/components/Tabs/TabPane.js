import React from 'react';
import PropTypes from 'prop-types';

const TabPane = (props) => {
  return <div {...props} />;
};
TabPane.propTypes = {
  name: PropTypes.string,
};

export default TabPane;
