import {View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {loaderGif} from '@utils/gif';
import {styles} from './styles';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from 'src/navigation/types';
import {useNavigation} from '@react-navigation/native';
import {useValues} from '../../../../App';
import appColors from '@theme/appColors';

type navigation = NativeStackNavigationProp<RootStackParamList>;

const LoaderScreen=()=> {
  const {isDark} = useValues();
  const {navigate} = useNavigation<navigation>();
  useEffect(() => {
    const delay = setTimeout(() => {
      navigate('BottomTab');
    }, 2000);
    return () => clearTimeout(delay);
  }, []);
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: isDark ? appColors.darkTheme : appColors.background},
      ]}>
      <Image
        source={require('../../../assets/images/auth/loader.gif')}
        style={styles.loaderStyle}
      />
    </View>
  );
}
export default LoaderScreen;
