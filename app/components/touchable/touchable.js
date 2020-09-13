import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity } from 'react-native';

const Touchable = (props) => {
  return (
    <TouchableOpacity underlayColor="transparent" activeOpacity={0.7} {...props}>
      {props.children}
    </TouchableOpacity>
  );
};

Touchable.propTypes = {
  onPress: PropTypes.func,
};

export { Touchable };
