import appColors from '@src/theme/appColors';
import { useEffect, useState } from 'react';
import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';
import { useValues } from '../../../../../../../App';
import Modal from 'react-native-modal';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import { formatNumberWithAbbreviation } from '@src/config/utility';


// Define the type for the chart data
interface ChartData {
  value: number;
  label: string;
  admin_commission: number;
  tax_amount: number;
}

const YearAmountChart: React.FC = () => {
  const { t, isDark } = useValues()
  const {
    chart_data
  } = useSelector(
    (state: RootState) => state['bookingReports']
  );


  const [chartData, setChartData] = useState<ChartData[]>([])
  useEffect(() => {
    if (chart_data?.timeline && Array.isArray(chart_data.admin_commission) && Array.isArray(chart_data.tax_amount) && Array.isArray(chart_data.booking_amount)) {
      const formattedData = chart_data.timeline.map((timeLineValue, timeLineIndex) => {
        return {
          admin_commission: chart_data.admin_commission[timeLineIndex] || 0,
          tax_amount: chart_data.tax_amount[timeLineIndex] || 0,
          value: chart_data.booking_amount[timeLineIndex] || 0,
          label: timeLineValue.toString() || 'Unknown'
        };
      });
      setChartData(formattedData);
    }
  }, [chart_data]);

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [selectedData, setSelectedData] = useState<ChartData | null>(null);
  const [modalPosition, setModalPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleBarPress = (data: ChartData, x: number, y: number) => {
    setSelectedData(data);
    setModalPosition({ x, y });
    setIsModalVisible(true);
  };

  return (
    chartData.length > 0 && <View style={styles.container}>
      <BarChart
        data={chartData}
        barWidth={30}  
        barBorderRadius={4}  
        initialSpacing={20}  
        spacing={20}  
        yAxisThickness={1}  
        xAxisThickness={1}  
        xAxisLabelTextStyle={[styles.xAxisLabel, { color: isDark ? appColors.white : appColors.darkText, }]}  
        yAxisTextStyle={[styles.yAxisText, { color: isDark ? appColors.white : appColors.darkText, }]}  
        hideRules={true}  
        frontColor={appColors.primary}  
        xAxisColor={appColors.gradientBtn}  
        yAxisColor={isDark ? appColors.darkTheme : appColors.white}  
        hideYAxisText={true}
        onPress={(data: any, x: number, y: number) => handleBarPress(data, x, y)}
      />
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setIsModalVisible(false)}
        style={styles.modal}
      >
        <View style={styles.modalContent}>
          {selectedData && (
            <>
              <Text style={styles.modalText}>{`${t('newDeveloper.Timeline')}:  ${selectedData.label}`}</Text>
              <Text style={styles.modalText}>{`${t('newDeveloper.Amount')}: ${formatNumberWithAbbreviation(selectedData.value)}`}</Text>
              <Text style={styles.modalText}>{`${t('newDeveloper.Taxamount')}: ${formatNumberWithAbbreviation(selectedData.tax_amount)}`}</Text>
              <Text style={styles.modalText}>{`${t('newDeveloper.Admincommission')}: ${formatNumberWithAbbreviation(selectedData.admin_commission)}`}</Text>
            </>
          )}
        </View>
      </Modal>
    </View>
  );
};

// Define the styles using StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,

  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  xAxisLabel: {
    fontSize: 12,
  },
  yAxisText: {
    fontSize: 12,
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 16,
    color: '#333',
  },
});

export default YearAmountChart;
