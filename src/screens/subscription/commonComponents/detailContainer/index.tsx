import {View, FlatList, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {RightTick} from '@utils/icons';
import {detailData} from './data/data';
import {useValues} from '../../../../../App';
import appColors from '@theme/appColors';

export default function DetailContainer({
  content,
}: {
  content?: React.ReactNode;
}) {
  const {isDark, t} = useValues();
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isDark ? appColors.darkTheme : appColors.boxBg,
          borderColor: isDark ? appColors.darkBorder : appColors.border,
        },
      ]}>
      <FlatList
        data={detailData}
        renderItem={({item}) => (
          <View style={styles.rowContainer}>
            <View style={{right: 1}}>
              <RightTick />
            </View>
            <Text
              style={[
                styles.label,
                {color: isDark ? appColors.white : appColors.darkText},
              ]}>
              {t(item.label)}
            </Text>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator}></View>}
      />
      {content ? content : <View style={styles.mainContainer} />}
    </View>
  );
}
