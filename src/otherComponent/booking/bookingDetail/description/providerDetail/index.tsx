import { View, Text, TouchableOpacity, Linking, Alert } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { CardContainer } from '../../cardContainer';
import { serviceMenData } from '../data';
import { GlobalStyle } from '@style/styles';
import { Call, Email, Location } from '@utils/icons';
import { InfoRow } from './info';
import { windowHeight, windowWidth } from '@theme/appConstant';
import { useValues } from '../../../../../../App';
import appColors from '@theme/appColors';
import { BookingDetailsInterface } from '@src/interfaces/bookingDetailsInterface';
import { getMediaUrl } from '@src/config/utility';

export function ProviderDetail({ bookingDetails }: { bookingDetails: BookingDetailsInterface }) {
  const imageLogo = bookingDetails.providerInfo.logo ? `${getMediaUrl()}/provider/logo/${bookingDetails.providerInfo.logo}` : ''

  const { isDark, t } = useValues();
  return (
    <View>
      <Text
        style={[
          styles.titleStyle,
          { color: isDark ? appColors.white : appColors.darkText },
        ]}>
        {t('providerDetail.providerDetail')} :{' '}
      </Text>
      <View
        style={[
          styles.innerContainer,
          {
            backgroundColor: isDark ? appColors.darkTheme : appColors.white,
            borderColor: isDark ? appColors.darkBorder : appColors.border,
          },
        ]}>
        <CardContainer
          containerStyle={styles.containerStyle}
          data={[{
            name: bookingDetails.providerInfo.companyName,
            rating: bookingDetails.providerInfo.avg_rating,
            image: imageLogo
          }]}
        />
        <View
          style={[
            GlobalStyle.horizontalLine,
            {
              marginHorizontal: windowHeight(2),
              marginTop: windowWidth(2),
              marginBottom: 0.5,
              borderColor: isDark ? appColors.darkBorder : appColors.border,
            },
          ]}></View>
        <InfoRow
          icon={
            <Email color={isDark ? appColors.white : appColors.lightText} />
          }
          title={'providerDetail.mail'}
          subHeading={bookingDetails.providerInfo.contactPersonEmail}
        />
        <TouchableOpacity onPress={() => {
          let phoneNumberURI = `tel:${bookingDetails.providerInfo.contactPersonPhone}`;
          Linking.canOpenURL(phoneNumberURI)
            .then((supported) => {
              if (!supported) {
                Alert.alert('Phone number is not available');
              } else {
                return Linking.openURL(phoneNumberURI);
              }
            })
            .catch((err: any) => console.error('Error opening dialer', err));

        }}>
          <InfoRow
            icon={<Call color={isDark ? appColors.white : appColors.lightText} />}
            title={'providerDetail.call'}
            subHeading={bookingDetails.providerInfo.contactPersonPhone}
          />
        </TouchableOpacity>
        <InfoRow
          icon={
            <Location color={isDark ? appColors.white : appColors.lightText} />
          }
          title={'customTime.location'}
          subHeading={bookingDetails.providerInfo.companyAddress}
        />
      </View>
    </View>
  );
}
