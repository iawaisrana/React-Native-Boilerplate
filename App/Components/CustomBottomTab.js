/* eslint-disable react/prop-types */
import React, {useEffect, useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useSelector, useDispatch} from 'react-redux';
import {Keyboard, TouchableOpacity, View} from 'react-native';
import {withTheme} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import {useNavigation, useRoute} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';

function BottomTab(props) {
  const {colors, fonts} = props.theme;
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const [t, i18n] = useTranslation();
  const [keyBoardVisible, setKeyBoardVisible] = useState(false);
  const [keyboardHeight, setKeyboardHeight] = useState('');

  useEffect(() => {
    let keyboardDidShowListener;

    keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      keyboardDidShow,
    );

    keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidHide',
      keyboardDidHide,
    );

    return () => {
      if (keyboardDidShowListener) {
        keyboardDidShowListener.remove();
      }
    };
  }, []);

  const i18 = key => {
    return t(key);
  };

  const keyboardDidHide = e => {
    setKeyBoardVisible(false);
    setKeyboardHeight(0); // sets the height after opening the keyboard
  };

  const keyboardDidShow = e => {
    setKeyBoardVisible(true);
    setKeyboardHeight(e.endCoordinates.height); // sets the height after opening the keyboard
  };

  return <></>;
}

export default withTheme(BottomTab);
