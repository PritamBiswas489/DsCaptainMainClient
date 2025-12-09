import Header from '@src/commonComponents/header';
import appColors from '@src/theme/appColors';
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import {useValues} from '../../../../../App';
import { DashLine } from '@src/commonComponents';
import {  useSelector } from 'react-redux';
import { RootState  } from '@src/store';
import { getMediaUrl } from '@src/config/utility';
const BusinessInformation = () => {
   const {isDark, t} = useValues();
   const {owner } = useSelector((state: RootState) => state['serviceProviderAccountData'])
  return (
    <ScrollView contentContainerStyle={[styles.container,{backgroundColor: isDark ? appColors.darkTheme : appColors.white},]}>
      <Header
          showBackArrow={true}
          title={'newDeveloper.BusinessInformation'}
        />
      <View style={styles.itemContainer}>
        <Text style={[styles.label,{color: isDark ? appColors.primary : appColors.darkText,}]}>{t('newDeveloper.BizInformationIdentityType')}</Text>
        <Text style={[styles.content,{color: isDark ? appColors.white : appColors.darkText}]}>{t(`identityDetails.${owner.identification_type}`)}</Text>
        
      </View>
      <DashLine/>
      {/* Identity Number */}
      <View style={styles.itemContainer}>
        <Text style={[styles.label,{color: isDark ? appColors.primary : appColors.darkText,}]}>{t('newDeveloper.BizInformationIdentityNumber')}</Text>
        <Text style={[styles.content,{color: isDark ? appColors.white : appColors.darkText}]}>{owner.identification_number}</Text>
        
      </View>
      <DashLine/>
      {/* Identity Image */}
      <View style={styles.itemContainer}>
        <Text style={[styles.label,{color: isDark ? appColors.primary : appColors.darkText,}]}>{t('newDeveloper.BizInformationIdentityImages')}</Text>
        {owner.identification_image.map((imageIdentity:string,index:number)=>{
            return <Image
            source={{ uri: `${getMediaUrl()}/provider/identity/${imageIdentity}` }} // Replace with your image URL
            style={styles.identityImage}
            resizeMode="contain"
          />
        })}
    
      </View>
      <DashLine/>
      <View style={styles.itemContainer}><Text style={[styles.content,{color: isDark ? appColors.white : appColors.darkText}]}>{t('newDeveloper.CantEditIndentityMessage')}</Text></View>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
  },
  itemContainer: {
    
    padding:20
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  content: {
    fontSize: 18,
    marginBottom: 10,
    color: '#555',
  },
  underline: {
    height: 1,
    backgroundColor: '#ccc',
    marginBottom: 10,
  },
  identityImage: {
    width: '100%',
    height: 200, // Adjust the height as needed
    marginBottom: 10,
    borderRadius: 10,
  },
});

export default BusinessInformation;
