import {View, Text} from 'react-native';
import React from 'react';
import {BarChart} from 'react-native-gifted-charts';
import {styles} from './styles';
import appColors from '@theme/appColors';
import { useValues } from '../../../../../../../../../../App';

export default function BarChartView() {
  const {t} = useValues()
  const data = [
    {
      value: 20,
      label: t('home.cleaning'),
      topLabelComponent: () => <Text style={styles.topLabelText}>45%</Text>,
    },
    {
      value: 30,
      label: t('home.acRepair'),
      topLabelComponent: () => <Text style={styles.topLabelText}>80%</Text>,
    },
    {
      value: 50,
      label: t('home.carpenter'),
      topLabelComponent: () => <Text style={styles.topLabelText}>52%</Text>,
    },
    {
      value: 40,
      label: t('home.painting'),
      topLabelComponent: () => <Text style={styles.topLabelText}>37%</Text>,
    },
    {
      value: 30,
      label: t('home.salon'),
      topLabelComponent: () => <Text style={styles.topLabelText}>65%</Text>,
    },
  ];
  return (
    <View style={styles.container}>
      <BarChart
        barWidth={23}
        noOfSections={3}
        barBorderRadius={10}
        barBorderBottomLeftRadius={0}
        barBorderBottomRightRadius={0}
        data={data}
        yAxisThickness={0}
        xAxisThickness={0}
        frontColor={appColors.primary}
        hideYAxisText={true}
        spacing={42}
        rulesThickness={0}
        xAxisLabelTextStyle={styles.textStyle}
      />
    </View>
  );
}
