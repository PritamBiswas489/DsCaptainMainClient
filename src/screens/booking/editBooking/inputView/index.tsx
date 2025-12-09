import { TouchableOpacity, View, Alert } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { styles } from './styles';
import TextInputComponent from '@otherComponent/auth/textInput';
import {
  ServiceName,
  HomeIcon,
  SubCategory,
  Notes,
  Location,
  Experience,
  ServiceMen,
  Amount,
  Discount,
  ReceiptDiscount,
  Plus

} from '@utils/icons';
import { windowHeight, windowWidth } from '@theme/appConstant';
import { categoryData, locationData } from '../data/data';
import CommissionSection from './commissionSection';
import { serviceTimeData } from '../data/data';
import RadioButton from '@otherComponent/radioButton';
import { taxData } from '../data/data';
import { DropdownWithIcon } from '@commonComponents/dropdownWithIcon';
import { dropDownType } from './types';
import { GlobalStyle } from '@style/styles';
import { useValues } from '../../../../../App';
import { searchStatusArray, timeformatting2 } from '@src/config/utility';
import { DropdownItem } from '@src/commonComponents/dropdownWithIcon/types';
import CommonModal from '@commonComponents/commonModal';
import { CalenderModal } from '@otherComponent/calenderModal';
import { Text } from 'react-native';
import { FormServiceMenList } from '@src/commonComponents/formServiceManList';
import { FormAddServicePanel } from '@src/commonComponents/formAddServicePanel';
import CartItemPanel from '@src/commonComponents/cartPanel';
import {   BookingServiceListInterface } from '@src/interfaces/bookingDetailsInterface';
import { capitalizeFirstLetter } from '@src/config/utility';
import DateTimeSelector from '@src/commonComponents/dateTimeSelectPicker';
import { getMediaUrl } from '@src/config/utility';

export default function InputView(
  {
    bookingStatus,
    setBookingStatus,
    serviceMan,
    setServiceMan,
    scheduleDate,
    setScheduleDate,
    serviceCartItems,
    setServiceCartitems,
    subCategoryId,
    handleUpdateCartItems:updateCartItems
  }: {
    bookingStatus: string,
    setBookingStatus: (value: string) => void,
    serviceMan: { serviceManid: string; serviceManName: string },
    setServiceMan: (value: { serviceManid: string; serviceManName: string }) => void,
    scheduleDate:string,
    setScheduleDate:(value:string)=>void,
    serviceCartItems:BookingServiceListInterface[],
    setServiceCartitems: (value:BookingServiceListInterface[])=>void,
    subCategoryId:string | null,
    handleUpdateCartItems:(value:{
      serviceId:string,
      variantKey:string,
      price:string,
      serviceName:string,
      serviceCoverImage:string,
      serviceThumbnail:string
   }[])=>void,
  } 
  ) {
  
  const statusArr = searchStatusArray()
  const statusList: DropdownItem[] = statusArr.map((statusdet: any, statusindex: number) => {
    if (statusdet.value !== 'pending' && statusdet.value !== bookingStatus  && statusdet.value !== 'all') {
       return { label: capitalizeFirstLetter(statusdet.label), value: statusdet.value };
    }
    return undefined;
  })
    .filter((item): item is DropdownItem => item !== undefined);

  const [showDatePicker, setDatePicker] = useState<boolean>(false);   
  const [showServiceMenModal, setServiceMenModal] = useState<boolean>(false);
  const [showAddServiceModal, setShowAddServiceModal] = useState<boolean>(false);

  const handleBookingStatus = useCallback((data:DropdownItem) =>{
       setBookingStatus(data.value)
  },[])

  const handleUpdateCartItems = (variants:{
    serviceId:string,
    variantKey:string,
    price:string,
    serviceName:string,
    serviceCoverImage:string,
    serviceThumbnail:string
 }[]) =>{
      updateCartItems(variants)
      setShowAddServiceModal(false)
  }

 
   
  const { t } = useValues();
  return (
    <View style={{ flex: 1 }}>
      <DropdownWithIcon
        label="newDeveloper.changestatus"
        data={statusList}
        onSelect={handleBookingStatus}
        error={''}
        selectedValue={{ label:capitalizeFirstLetter(bookingStatus), value: bookingStatus }}
      />
      <TouchableOpacity onPress={() => { setDatePicker(true) }}>
        <TextInputComponent
          placeholder={t('newDeveloper.changescheduledate')}
          value={scheduleDate && `${t('newDeveloper.Scheduletext')}:  ${timeformatting2(scheduleDate)}`}
          editable={false}
          onChangeText={value => {

          }}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => { setServiceMenModal(true) }}>
        <TextInputComponent
          placeholder={t('newDeveloper.addServiceMen')}
          value={serviceMan?.serviceManid &&`${t('newDeveloper.ServiceMan')}:   ${serviceMan.serviceManName}`}
          editable={false}
          onChangeText={value => {
          }}
        />
      </TouchableOpacity>
      
      {showDatePicker && <DateTimeSelector
             setDatePicker={setDatePicker}
             setScheduleDate={setScheduleDate}
      />}

      <CommonModal
        modal={
          <FormServiceMenList 
          setServiceMenModal={setServiceMenModal} 
          setServiceMan={setServiceMan}
          />
        }
        showModal={showServiceMenModal}
        visibleModal={() => { }}
      />
       <CommonModal
        modal={
          <FormAddServicePanel  handleUpdateCartItems={handleUpdateCartItems} subCategoryId={subCategoryId} setShowAddServiceModal={setShowAddServiceModal} />
        }
        showModal={showAddServiceModal}
        visibleModal={() => { }}
      />
      {serviceCartItems.map((cartItem:BookingServiceListInterface,cartItemIndex:number)=>{
        let imageUrl = '';
        if(cartItem?.servicethumbnail){
          imageUrl = `${getMediaUrl()}/service/${cartItem?.servicethumbnail}`
        }
        return (<CartItemPanel 
          imageUrl={imageUrl} 
          serviceName={cartItem.serviceName} 
          variantName={cartItem.variantKey}
          price={cartItem.serviceTotalCost.toFixed(2)}
          quantity={cartItem.serviceQuantity}
          serviceId={cartItem.serviceId}
          variantKey={cartItem.variantKey}
          serviceCartItems={serviceCartItems}
          onIncrease={()=>{
              const updatedItems = serviceCartItems.map((item:BookingServiceListInterface,itemIndex:number)=>{
                   if(item.serviceId === cartItem.serviceId){
                       const dd = {...item}
                       const qty = dd.serviceQuantity + 1
                      //  console.log({qty})
                       dd.serviceQuantity = qty;
                       dd.serviceTotalCost = dd.serviceUnitCost * qty
                      //console.log("=========== item ======================")
                      //console.log(dd)
                       return dd
                   }else{
                      return item
                   }
              })
              setServiceCartitems(updatedItems)
          }}
          onDecrease={()=>{ // decrement
              if(cartItem.serviceQuantity > 1){
                const updatedItems = serviceCartItems.map((item:BookingServiceListInterface,itemIndex:number)=>{
                  if(item.serviceId === cartItem.serviceId){
                      const dd = {...item}
                      const qty = dd.serviceQuantity -1  
                      // console.log({qty})
                      dd.serviceQuantity = qty;
                      dd.serviceTotalCost = dd.serviceUnitCost * qty
                      // console.log("=========== item ======================")
                      // console.log(dd)
                      return dd
                  }else{
                    return item
                  }
            })
            setServiceCartitems(updatedItems)
            }else{
               if(serviceCartItems.length === 1){
                Alert.alert(t('newDeveloper.Cantremoveitemmessge'))
               }else{
                const updatedItems = serviceCartItems.filter((item: BookingServiceListInterface) =>
                  item.serviceId !== cartItem.serviceId
                );
                setServiceCartitems(updatedItems)
               }
            }
          }}
          key={cartItem.serviceId}
          />)

      })}
      
        <TouchableOpacity style={styles.addButton} onPress={() => setShowAddServiceModal(true) }>
        <Plus width={16} height={16} />   
        <Text style={styles.addButtonText}>Add Service</Text>
      </TouchableOpacity>
    </View>
  );
}
