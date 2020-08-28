import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, TouchableOpacity, View } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { withTheme } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { screens } from '../../config';
import styles from './walkthrough.styles';

const WalkThrough = (props) => {
  const { colors } = props.theme;
  const [t, i18n] = useTranslation();

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

  const _renderItem = ({ item, index }) => {
    return (
      <View style={styles.itemContainer}>
        {index < 2 && (
          <TouchableOpacity style={styles.skip} onPress={() => props.navigation.navigate(screens.drawerStack)}>
            <Text
              style={{
                color: colors.primary,
              }}>
              {i18('Intro.skip')}
            </Text>
          </TouchableOpacity>
        )}

        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.text}</Text>
      </View>
    );
  };

  const _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ionicons name="md-arrow-round-forward" color={colors.white} size={24} />
      </View>
    );
  };
  const _renderDoneButton = () => {
    return (
      <TouchableOpacity style={styles.buttonCircle} onPress={() => props.navigation.navigate(screens.drawerStack)}>
        <Ionicons name="md-checkmark" color={colors.white} size={24} />
      </TouchableOpacity>
    );
  };

  return (
    <AppIntroSlider
      data={slides}
      showNextButton={true}
      showDoneButton={true}
      onSkip={() => props.navigation.navigate(screens.home)}
      activeDotStyle={{ backgroundColor: colors.primary }}
      renderItem={_renderItem}
      renderDoneButton={_renderDoneButton}
      renderNextButton={_renderNextButton}
    />
  );
};
export default withTheme(WalkThrough);
