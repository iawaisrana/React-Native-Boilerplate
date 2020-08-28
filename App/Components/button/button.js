/* eslint-disable react/prop-types */
import React from 'react';
import { Button, withTheme } from 'react-native-paper';
import styles from './button.styles';

function AppButton(props) {
  return (
    <Button
      labelStyle={[styles.label, { ...props.labelStyles }]}
      mode="contained"
      uppercase={false}
      onPress={() => props.onSubmit()}
      loading={props.isLoadingVisible}
      style={[styles.container, { ...props.style }]}>
      {props.title}
    </Button>
  );
}

export default withTheme(AppButton);
