import {View} from 'react-native';
import React from 'react';
import {GlobalStyle} from '@style/styles';
import Header from '@commonComponents/header';
import {Plus} from '@utils/icons';
import appColors from '@theme/appColors';
import {PackagesList} from './packagesList';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from 'src/navigation/types';
import {useValues} from '../../../../../App';

export function Packages() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const {isDark} = useValues();
  return (
    <View
      style={[
        GlobalStyle.mainView,
        {backgroundColor: isDark ? appColors.darkTheme : appColors.white},
      ]}>
      <Header
        title="packages.packages"
        showBackArrow={true}
        trailIcon={
          <Plus color={isDark ? appColors.white : appColors.darkText} />
        }
        gotoScreen={() => navigation.navigate('AddPackage')}
      />
      <PackagesList />
    </View>
  );
}
