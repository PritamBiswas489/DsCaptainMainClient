import {View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import BarChart from './barChart';
import HeadingRow from '@commonComponents/headingRow';
import {EarningBackground} from '@otherComponent/home';
import {useValues} from '../../../../../../../App';
import appColors from '@theme/appColors';

export default function EarningSection() {
  const {isDark} = useValues();
  return (
    <View style={styles.container}>
      <EarningBackground title={'home.earningTill'} price={'$3,263.03'} />
      <View
        style={[
          styles.mainContainer,
          {
            backgroundColor: isDark ? appColors.darkCard : appColors.boxBg,
            borderWidth: isDark ? 0 : 1,
          },
        ]}>
        <HeadingRow
          title="home.topCategoryEarnings"
          rowStyle={styles.rowStyle}
        />
        <View
          style={[
            styles.chartContainer,
            {
              backgroundColor: isDark ? appColors.darkTheme : appColors.white,
              borderColor: isDark ? appColors.darkBorder : appColors.border,
            },
          ]}>
          <BarChart />
        </View>
      </View>
    </View>
  );
}
