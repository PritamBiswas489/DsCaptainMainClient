import NoDataFound from '@commonComponents/noDataFound';
import {noNotification, notification} from '@utils/images';
import GradientBtn from '@commonComponents/gradientBtn';
import {windowHeight} from '@theme/appConstant';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from 'src/navigation/types';
type EmptylocationProps = NativeStackNavigationProp<RootStackParamList>;

export function EmptyNotification() {
  const {navigate} = useNavigation<EmptylocationProps>();
  useEffect(() => {
    setTimeout(() => {
      navigate('Notification');
    }, 1000);
  }, []);

  return (
    <NoDataFound
      headerTitle="notificationArr.title"
      image={noNotification}
      infoImage={notification}
      title="common.nothingHere"
      content={'notificationArr.notificationContent'}
      gradiantBtn={
        <GradientBtn
          additionalStyle={{
            bottom: windowHeight(2),
            marginHorizontal: windowHeight(3),
          }}
          label={'common.refresh'}
          onPress={() => navigate('Notification')}
        />
      }
    />
  );
}
