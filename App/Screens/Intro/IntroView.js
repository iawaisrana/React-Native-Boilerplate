/* eslint-disable react/prop-types */
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {withTheme} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import styles from './styles';

const IntroView = (props) => {
  const {colors, fonts} = props.theme;
  console.log(fonts);
  const [t, i18n] = useTranslation();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const i18 = (key) => {
    return t(key);
  };

  const slides = [
    {
      key: 'screen1',
      title: i18('Intro.title1'),
      text: i18('Intro.description1'),
      backgroundColor: 'white',
    },
    {
      key: 'screen2',
      title: i18('Intro.title2'),
      text: i18('Intro.description2'),
      backgroundColor: 'white',
    },
    {
      key: 'screen3',
      title: i18('Intro.title3'),
      text: i18('Intro.description3'),
      backgroundColor: 'white',
    },
  ];

  const _renderItem = ({item, index}) => {
    return (
      <View
        style={{
          flex: 1,
          paddingHorizontal: 40,
          backgroundColor: colors.background,
        }}>
        {index < 2 && (
          <TouchableOpacity
            style={{position: 'absolute', top: 20, right: 20}}
            onPress={() => navigation.navigate('App')}>
            <Text
              style={{
                ...fonts.normal,
                color: colors.primary,
              }}>
              {i18('Intro.skip')}
            </Text>
          </TouchableOpacity>
        )}

        <Text
          style={{
            color: colors.primary,
            fontSize: 24,
            textAlign: 'center',
            marginTop: 50,
            fontWeight: 'bold',
          }}>
          {item.title}
        </Text>
        <Text
          style={{
            color: colors.primary,
            fontSize: 16,
            textAlign: 'center',
            marginTop: 20,
          }}>
          {item.text}
        </Text>
      </View>
    );
  };

  const _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ionicons
          name="md-arrow-round-forward"
          color={colors.white}
          size={24}
        />
      </View>
    );
  };
  const _renderDoneButton = () => {
    return (
      <TouchableOpacity
        style={styles.buttonCircle}
        onPress={() => navigation.navigate('App')}>
        <Ionicons name="md-checkmark" color={colors.white} size={24} />
      </TouchableOpacity>
    );
  };

  return (
    <AppIntroSlider
      data={slides}
      showNextButton={true}
      showDoneButton={true}
      onSkip={() => props.navigation.navigate('Home')}
      activeDotStyle={{backgroundColor: colors.primary}}
      renderItem={_renderItem}
      renderDoneButton={_renderDoneButton}
      renderNextButton={_renderNextButton}
    />
  );
};
export default withTheme(IntroView);
