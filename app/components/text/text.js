import _ from 'lodash';
import React from 'react';
import { StyleSheet, Text as RCText } from 'react-native';
import { FontHelper } from '../../helpers';

const Text = (props) => {
  var { style } = props;
  if (style instanceof Array) {
    style = _.map(style, (styleObject) => styleObject && FontHelper(StyleSheet.flatten(styleObject)));
  } else {
    style = FontHelper(StyleSheet.flatten(style || {}));
  }

  return (
    <RCText {...props} style={style}>
      {props.children}
    </RCText>
  );
};

export { Text };
