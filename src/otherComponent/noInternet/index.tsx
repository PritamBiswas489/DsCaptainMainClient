import React from 'react';
import NoDataFound from '@commonComponents/noDataFound';
import {noNotification, wifi} from '@utils/images';
import GradientBtn from '@commonComponents/gradientBtn';
import {windowHeight} from '@theme/appConstant';

export default function NoInternet() {
  return (
    <NoDataFound
      headerTitle="home.noInternet"
      image={noNotification}
      infoImage={wifi}
      title="home.noInternet"
      content="home.noInternetContent"
      gradiantBtn={
        <GradientBtn
          additionalStyle={{bottom: windowHeight(2)}}
          label={'common.refresh'}
          onPress={() => {}}
        />
      }
    />
  );
}
