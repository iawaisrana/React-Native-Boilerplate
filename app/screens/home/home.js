import React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { withTheme } from 'react-native-paper';
import { FacebookButton, GoogleButton, MenuHeader } from '../../components';
import styles from './home.styles';

const Home = (props) => {
  const [t, i18n] = useTranslation();

  const i18 = (key) => {
    return t(key);
  };

  return (
    <View style={styles.container}>
      <MenuHeader title={i18('Home.title')} {...props} />
      <View style={styles.buttonContainer}>
        <FacebookButton />
        <GoogleButton />
      </View>
    </View>
  );
};

export default withTheme(Home);
