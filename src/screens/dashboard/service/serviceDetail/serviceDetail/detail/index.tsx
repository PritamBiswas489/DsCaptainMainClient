import {View} from 'react-native';
import React from 'react';
import ServiceContentView from '@otherComponent/home/serviceContent/serviceContentView';
import {GlobalStyle} from '@style/styles';
import {windowWidth} from '@theme/appConstant';
import TextRow from '@otherComponent/home/serviceContent/textRow';
import appColors from '@theme/appColors';
import {useValues} from '../../../../../../../App';
import {Clock, ServiceMen} from '@utils/icons';
import appFonts from '@theme/appFonts';

export function Detail() {
  const {isDark,t} = useValues();
  return (
    <View>
      <ServiceContentView isShowPrice={true} />
      {/* <View style={[GlobalStyle.mainContainer, {marginTop: windowWidth(2)}]}>
        <TextRow
          title={'serviceDetail.timeDuration'}
          content={t('serviceDetail.45min')}
          color={appColors.success}
          icon={
            <Clock
              height={'24'}
              color={isDark ? appColors.lightText : appColors.darkText}
            />
          }
          rowStyle={{paddingTop: 0}}
          titleStyle={{fontFamily: appFonts.NunitoSemiBold}}
        />
        <TextRow
          title={'serviceDetail.commission'}
          content={'30%'}
          color={isDark ? appColors.lightText : appColors.darkText}
          icon={
            <ServiceMen
              height={'22'}
              color={isDark ? appColors.lightText : appColors.darkText}
            />
          }
          titleStyle={{
            fontFamily: appFonts.NunitoSemiBold,
            width: windowWidth(60),
          }}
        />
        <TextRow
          title={'serviceDetail.tax'}
          content={'2%'}
          color={isDark ? appColors.lightText : appColors.darkText}
          icon={
            <ServiceMen
              height={'22'}
              color={isDark ? appColors.lightText : appColors.darkText}
            />
          }
          titleStyle={{
            fontFamily: appFonts.NunitoSemiBold,
            width: windowWidth(60),
          }}
        />
        <TextRow
          title={'serviceDetail.numberServiceMan'}
          content={'2'}
          color={isDark ? appColors.lightText : appColors.darkText}
          icon={
            <ServiceMen
              height={'22'}
              color={isDark ? appColors.lightText : appColors.darkText}
            />
          }
          titleStyle={{
            fontFamily: appFonts.NunitoSemiBold,
          }}
        />
      </View> */}
    </View>
  );
}
