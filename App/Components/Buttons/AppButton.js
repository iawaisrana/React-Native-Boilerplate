/* eslint-disable react/prop-types */
import React from 'react';
import {Button, withTheme} from 'react-native-paper';

function AppButton(props) {
  const {colors, fonts} = props.theme;
  return (
    <Button
      labelStyle={{
        fontWeight: 'bold',
        fontSize: 16,
        fontFamily: fonts.family,
        ...props.labelStyles,
      }}
      mode="contained"
      uppercase={false}
      onPress={() => props.onSubmit()}
      loading={props.isLoadingVisible}
      style={{
        borderRadius: 5,
        backgroundColor: colors.primary,
        marginVertical: 10,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        ...props.style,
      }}>
      {props.title}
    </Button>
  );
}

export default withTheme(AppButton);
