import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {GlobalStyle} from '@style/styles';
import AvailableLocation from './availableLocation';
import {locationType} from '../addNewArea/types';
import {useValues} from '../../../../../../../App';
import appColors from '@theme/appColors';
import {locationDataType} from './availableLocation/data/types';

export default function LocationList({
  data,
}: {
  data?: locationDataType | undefined;
}) {
  const {isDark, t} = useValues();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('auth.locationList')} :</Text>
      <AvailableLocation data={data} />
      <View
        style={[
          GlobalStyle.dashLine,
          {borderColor: isDark ? appColors.darkBorder : appColors.border},
        ]}
      />
      <Text style={styles.notesText}>{t('auth.locationNotes')}</Text>
    </View>
  );
}
