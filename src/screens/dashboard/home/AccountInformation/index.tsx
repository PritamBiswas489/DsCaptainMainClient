import { ScrollView } from 'react-native-virtualized-view';
import React, { useEffect, useState } from 'react';
import Header from '@commonComponents/header';
import { GlobalStyle } from '@style/styles';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from 'src/navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { windowHeight, windowWidth } from '@theme/appConstant';
import appColors from '@theme/appColors';
import { useValues } from '../../../../../App';
import { Alert, RefreshControl, StyleSheet, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import { TotalPayBackBalance } from './totalBalance';
import { CountStatistics } from './countStatistics';
import ServiceBarCartAccountInformation from './barChart';
import ServiceCount from './serviceCount';
import { getAuthUserService } from '@src/services/auth.service';
import { serviceProviderAccountDataActions } from '@src/store/redux/service-provider-account-data.redux';


type navigationProp = NativeStackNavigationProp<RootStackParamList>;

interface Response {
  data: any;
  status: number;
  statusText: string;
  headers: any;
  config: any;
  request?: any;
}
//Profile Account Information nice page
export function ProfileAccountInformation() {
  const { navigate } = useNavigation<navigationProp>();
  const { isDark, isServiceManLogin, t } = useValues();
  const [showSkeletonLoader, setSkeletonLoader] = useState(false)
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(async() => {
    setRefreshing(true);
    const response = await getAuthUserService()
    if (response?.data?.response_code === 'default_200' && response?.data?.content?.provider_info?.id) {
      dispatch(serviceProviderAccountDataActions.setData(response?.data?.content?.provider_info))
    }
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  const dispatch = useDispatch()

  return (
    <ScrollView
      style={[
        GlobalStyle.mainView,
        { backgroundColor: isDark ? appColors.darkTheme : appColors.white },
      ]}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      showsVerticalScrollIndicator={false}>
      <Header
        showBackArrow={true}
        title={'newDeveloper.AccountInformationText'}
      />
      <TotalPayBackBalance onPress={() => { }} />
      <CountStatistics />


      <View
        style={[
          styles.chartContainer,
          {
            backgroundColor: isDark ? appColors.darkTheme : appColors.white,
            borderColor: isDark ? appColors.darkBorder : appColors.border,
          },
        ]}>
        <ServiceBarCartAccountInformation />
      </View>

      <ServiceCount />


    </ScrollView>
  );
}
export const styles = StyleSheet.create({
  chartContainer: {
    marginTop: 20,
    borderColor: appColors.border,
    borderWidth: 1,
    borderRadius: windowWidth(2),
    backgroundColor: appColors.white,
    width: windowWidth(95),
    marginHorizontal: windowWidth(2),
    marginVertical: 20,
    paddingTop:20
  },
  rowStyle: {
    marginHorizontal: windowWidth(3),
  },
})
