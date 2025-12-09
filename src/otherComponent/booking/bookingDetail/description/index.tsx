import { View, Image, Text, TouchableOpacity, Modal } from 'react-native';
import { useState } from 'react';
import React from 'react';
import StatusView from './statusView';
import { windowWidth } from '@theme/appConstant';
import { styles } from './styles';
import { GlobalStyle } from '@style/styles';
import BillSummary from '../billSummary';
import { ServiceContent } from '@otherComponent/home';
import { descriptionType } from './data/types';
import ChargesDetail from '@otherComponent/booking/chargesDetail';
import { ReviewsSection } from './reviewsSection';
import { ServiceMenDetail } from './serviceMenDetail';
import { CustomerDetail } from './customerDetail';
import { ProviderDetail } from './providerDetail';
import { PaymentSummary } from './paymentSummary';
import ServiceProofDetails from '../serviceProofDetails';
import { useValues } from '../../../../../App';
import appColors from '@theme/appColors';
import { getMediaUrl } from '@src/config/utility';

export function Description({
  item,
  setBookingStatus,
  bookingStatus,
  contactOptions,
  extraCharges,
  showChargesDetail,
  serviceProof,
  setmodalImage,
  setImageProofModal
}: descriptionType) {
  const { isDark, isServiceManLogin, t } = useValues();

  const [image, setImage] = useState<string>(''); // Manage image state here
  const [modalVisible, setModalVisible] = useState(false); // Manage modal visibility

  return (
    <View>
      <View style={styles.container}>
        <StatusView item={item} setBookingStatus={setBookingStatus} />
        <ServiceContent item={item} bookingStatus={bookingStatus} />

        <View
          style={[
            GlobalStyle.horizontalLine,
            {
              marginTop: 0,
              bottom: windowWidth(2),
              borderColor: isDark ? appColors.darkBorder : appColors.border,
            },
          ]}
        />

      </View>
      <BillSummary bookingDetails={item} />

      <View style={styles.container}>
        {item.serviceman_id && <ServiceMenDetail bookingDetails={item} />}
        {item.customer_id && <CustomerDetail bookingDetails={item} />}
        {item.provider_id && <ProviderDetail bookingDetails={item} />}


      </View>
      {extraCharges && showChargesDetail && (
        <ChargesDetail extraCharges={extraCharges} />
      )}


      {/* {bookingStatus === 'completedBooking' && <PaymentSummary />}
      {serviceProof && <ServiceProofDetails serviceProof={serviceProof} />} */}
      {/* <ReviewsSection /> */}
      {item?.evidence_photos && item.evidence_photos.length > 0 && <><View style={[
        styles.icontainer,
        {
          backgroundColor: isDark ? appColors.darkTheme : appColors.white,
          borderColor: isDark ? appColors.darkBorder : appColors.border,
        },
        ]}>
        <Text style={{ color: isDark ? appColors.white : appColors.darkText, fontWeight: 'bold', marginBottom: 10 }}>{t('booking.proof')}</Text>
        {item.evidence_photos.map((evphoto) => {
          return (<TouchableOpacity onPress={() => {
            if(evphoto){
              setmodalImage(`${getMediaUrl()}/booking/evidence/${evphoto}`)
              setImageProofModal(true)
            }
            
            // setModalVisible(true)
          }}><View
            style={[
              styles.imageContainer,
              { borderColor: isDark ? appColors.darkBorder : appColors.border },
            ]}>
              <Image source={{ uri: `${getMediaUrl()}/booking/evidence/${evphoto}` }} style={styles.image} />
            </View></TouchableOpacity>)

        })}
      </View>

      </>
      }

    </View>
  );
}
