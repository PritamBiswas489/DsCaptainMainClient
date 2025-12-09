import { Text, View, Alert, ActivityIndicator, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';
import React, { useEffect, useState } from 'react';
import { GlobalStyle } from '@style/styles';
import CancelHeader from '@commonComponents/cancelHeader';
import { styles } from './styles';
import appColors from '@theme/appColors';
import ServiceItemVariantPanel from './itemVariantPanel';
import { useValues } from '../../../App';
import { ServiceInterface, ServiceVariantInterface } from '@src/interfaces/serviceInterface';
import GradientBtn from '@commonComponents/gradientBtn';
import { windowHeight, windowWidth } from '@theme/appConstant';

export function FormAddVariantPanel({
  selectedServiceVariants,
  setShowAddServiceVariantModal,
  setSelectedServiceVariants,
  handleUpdateCartItems
}:
  {
    selectedServiceVariants: ServiceInterface,
    setShowAddServiceVariantModal: (value: boolean) => void,
    setSelectedServiceVariants: (value: ServiceInterface) => void,
    handleUpdateCartItems: (value: {
      serviceId: string,
      variantKey: string,
      price: string,
      serviceName:string,
      serviceCoverImage:string,
      serviceThumbnail:string
    }[]) => void
  }) {
  const { isDark, t } = useValues();


  const [choosenVariants, setChoosenVariants] = useState<{
    serviceId: string,
    variantKey: string,
    price: string,
    serviceName:string,
    serviceCoverImage:string,
    serviceThumbnail:string
  }[]>([])

  //handle add variants to booking
  const handleAddVariantsToBooking = () => {
    if (choosenVariants.length === 0) {
      Alert.alert(t('newDeveloper.SelectVariants'))
    } else {
      handleUpdateCartItems(choosenVariants)
    }
  }


  //handle add to variants after select
  const handleAddToVariantsAfterSelect = React.useCallback((value: {
    serviceId: string;
    variantKey: string;
    price: string;
    remove: boolean;
  }) => {
    if (!value.remove) {
      if (!choosenVariants.find((ele) => ele.variantKey === value.variantKey)?.serviceId) {
        setChoosenVariants((prev) => [
          ...prev,
          { 
            serviceId: value.serviceId, 
            variantKey: value.variantKey, 
            price: value.price ,
            serviceName:selectedServiceVariants.name,
            serviceCoverImage:selectedServiceVariants.cover_image,
            serviceThumbnail:selectedServiceVariants.cover_image
          },
        ]);
      }
    } else {
      const updated = choosenVariants.filter((ele) => ele.variantKey !== value.variantKey);
      // Only update state if there is a change
      if (updated.length !== choosenVariants.length) {
        setChoosenVariants([...updated]);
      }
    }
  }, [choosenVariants]);


  // useEffect(()=>{
  //    console.log("===================== choosenVariants ===============================")
  //    console.log(choosenVariants)
  // },[choosenVariants])

  console
  return (
    <>
      <ScrollView
        style={[
          GlobalStyle.mainView,
          { backgroundColor: isDark ? appColors.darkCard : appColors.white },
        ]}>
        <View style={{ paddingTop: 20 }}>
          <CancelHeader
            title={selectedServiceVariants.name}
            gotoScreen={() => {
              setShowAddServiceVariantModal(false);
              setSelectedServiceVariants({
                id: '',
                name: '',
                short_description: '',
                description: '',
                cover_image: '',
                thumbnail: '',
                order_count: '',
                avg_rating: 0,
                min_bidding_price: 0,
                category: '',
                variants: []
              })
            }}
          />
        </View>
        <View style={styles.blankView} />
        {selectedServiceVariants.variants.map((variantDet: ServiceVariantInterface, index: number) => {
          return (<ServiceItemVariantPanel
            variantName={variantDet.variant}
            price={variantDet.price.toFixed(2)}
            serviceId={variantDet.service_id}
            handleAddToVariantsAfterSelect={handleAddToVariantsAfterSelect}
            variantKey={variantDet.variant_key}
            choosenVariants={choosenVariants}
          />)
        })}
      </ScrollView>
      <View style={{ backgroundColor: 'white' }}>
        <GradientBtn
          label="newDeveloper.AddServiceInCart"
          onPress={handleAddVariantsToBooking}
          additionalStyle={{
            marginHorizontal: windowWidth(5),
            marginTop: windowHeight(3),
          }}
        />
      </View>

    </>
  )


}