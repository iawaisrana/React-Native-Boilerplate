/* eslint-disable react/prop-types */
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useDispatch} from '../../Redux/Connects/node_modules/react-redux';
import {Text, TouchableOpacity, View} from 'react-native';
import {withTheme} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';

function BottomTab(props) {
  const {colors, fonts} = props.theme;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [t, i18n] = useTranslation();

  const i18 = key => {
    return t(key);
  };

  return (
    <View
      style={{
        paddingHorizontal: 20,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 80,
        backgroundColor: colors.primary,
      }}>
      <TouchableOpacity
        style={{justifyContent: 'center', alignItems: 'center'}}>
        <FontAwesome name={'search'} color={colors.white} size={25} />
        <Text style={{color: colors.white, ...fonts.medium, paddingTop: 3}}>
          {i18('BottomTab.search')}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{justifyContent: 'center', alignItems: 'center'}}>
        <FontAwesome name={'home'} color={colors.white} size={25} />
        <Text style={{color: colors.white, ...fonts.medium, paddingTop: 3}}>
          {i18('BottomTab.home')}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{justifyContent: 'center', alignItems: 'center'}}>
        <MaterialIcons name={'person'} color={colors.white} size={25} />
        <Text style={{color: colors.white, ...fonts.medium, paddingTop: 3}}>
          {i18('BottomTab.profile')}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default withTheme(BottomTab);
