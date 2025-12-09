import {View, Image} from 'react-native';
import React from 'react';
import HeadingRow from '@commonComponents/headingRow';
import {windowWidth} from '@theme/appConstant';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from 'src/navigation/types';
import {propsType} from './types';
import {useValues} from '../../../../../App';
import appColors from '@theme/appColors';

export default function ServiceProofDetails({
  serviceProof,
}: {
  serviceProof: propsType | any;
}) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const details = serviceProof?.details;
  const serviceTitle = serviceProof?.serviceTitle;
  const image = serviceProof?.image;

  const {isDark} = useValues();

  return (
    <View style={styles.container}>
      <HeadingRow
        rowStyle={{marginTop: windowWidth(6), marginHorizontal: 0}}
        title={'booking.proof'}
        content={'booking.editProof'}
        gotoScreen={() =>
          navigation.navigate('ServiceProof', {
            serviceProofData: {
              serviceTitle: serviceTitle,
              details: details,
              image: image,
            },
          })
        }
        titleStyle={styles.reviewTextStyle}
      />
      <View
        style={[
          styles.imageContainer,
          {borderColor: isDark ? appColors.darkBorder : appColors.border},
        ]}>
        <Image source={{uri: image}} style={styles.image} />
      </View>
    </View>
  );
}
