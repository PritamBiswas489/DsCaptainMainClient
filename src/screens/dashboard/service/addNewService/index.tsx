import { ScrollView, View, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { GlobalStyle } from '@style/styles';
import Header from '@commonComponents/header';
import SliderContainer from '@otherComponent/sliderContainer';
import AddNewImageSection from './addNewImage';
import { windowHeight, windowWidth } from '@theme/appConstant';
import InputView from './inputView';
import StatusSection from './statusSection';
import GradientBtn from '@commonComponents/gradientBtn';
import { useValues } from '../../../../../App';
import appColors from '@theme/appColors';
import { serviceCategoriesDataActions } from '@src/store/redux/service-category-redux';
import { getCategories } from '@src/services/services-service';
import { CategoriesInterface } from '@src/interfaces/categoriesInterface';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import { serviceSubCategoriesActions } from '@src/store/redux/service-sub-category-redux';
import { getSubCategories } from '@src/services/services-service';
import { SubCategoriesInterface } from '@src/interfaces/subCategoriesInterface';
import Spinner from 'react-native-loading-spinner-overlay';
import { addNewServiceByProvider } from '@src/services/services-service';
import Toast from 'react-native-toast-message';
interface Variant {
  name: string;
  price: string;
}

interface Response {
  data: any;
  status: number;
  statusText: string;
  headers: any;
  config: any;
  request?: any;
}

export function AddNewService() {
  const dispatch = useDispatch()
  const [coverImage, setCoverImage] = useState<string>('');
  const [serviceName, setServiceName] = useState<string>('')
  const [shortDescription, setShortDescription] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [taxAmt, setTaxAmt] = useState<string>('')
  const [minBidAmt, setMinBidAmt] = useState<string>('')
  const [thumbnailImage, setThumbnailImage] = useState<string>('')
  const [tags, setTags] = useState<string>('')
  const { isDark, t } = useValues();
  const [serviceVariants, setServiceVariants] = useState<Variant[]>([{ name: '', price: '' }]);
  const [selectedParentCategory, setSelectedParentCategory] = useState<string>('')
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('')
  const [loadingCategories, setLoadingCategories] = useState(true)
  const [processingSpinner, setProcessingLoader] = useState(false)
  const [createProcessing, setCreateProcessing] = useState(false)

  const {
    data: ServiceCategories,
    offsetPageUrl,
    limit
  } = useSelector((state: RootState) => state['serviceCategories'])

  const {
    data: ServiceSubCategories,
    offsetPageUrl: suboffsetPageUrl,
    limit: sublimit,
    selected: SelectedSubCategories,
    loading: isSubCategoryLoading
  } = useSelector((state: RootState) => state['serviceSubCategories'])

  //======================= load service categories ==========================// 
  const loadServiceCategories = async () => {
    if (ServiceCategories.length === 0) {
      const response: Response = await getCategories(`${offsetPageUrl}&limit=${limit}`)
      if (response?.data?.content?.data) {
        const catData = response?.data?.content?.data
        if (catData.length > 0) {
          const formattedData: CategoriesInterface[] = response.data.content.data.map((serviceData: any) => ({
            id: serviceData?.id,
            name: serviceData?.name,
            image: serviceData?.image
          }))
          dispatch(serviceCategoriesDataActions.setData({ field: 'data', data: formattedData }))
        }
      }
    }
    setLoadingCategories(false)
  }

  useEffect(() => {
    loadServiceCategories()
  }, [ServiceCategories])


  //========================= load service sub categories =============================//
  const loadServiceSubCategories = async () => {
    const response: Response = await getSubCategories(`${suboffsetPageUrl}&limit=${sublimit}&id=${selectedParentCategory}`)
    if (response?.data?.content?.data) {
      const catData = response?.data?.content?.data
      if (catData.length > 0) {
        const formattedData: SubCategoriesInterface[] = response.data.content.data.map((serviceData: any) => ({
          id: serviceData?.id,
          name: serviceData?.name,
          image: serviceData?.image,
          is_subscribed: serviceData?.is_subscribed
        }))

        dispatch(serviceSubCategoriesActions.addServiceSubCategories({ id: selectedParentCategory, subcategories: formattedData }))
        dispatch(serviceSubCategoriesActions.setData({ field: 'selected', data: { categoryId: selectedParentCategory, subcategories: formattedData } }))

      }
    }
    dispatch(serviceSubCategoriesActions.setData({ field: 'loading', data: false }))
  }

  useEffect(() => {
    setSelectedSubCategory('')
    if (selectedParentCategory !== '') {

      dispatch(serviceSubCategoriesActions.setData({ field: 'loading', data: true }))
      const checkExisting = ServiceSubCategories.find(elementDet => elementDet.categoryId === selectedParentCategory);
      if (!checkExisting) {
        loadServiceSubCategories();
      } else {
        dispatch(serviceSubCategoriesActions.setData({ field: 'selected', data: { categoryId: selectedParentCategory, subcategories: checkExisting.subcategories } }))
        dispatch(serviceSubCategoriesActions.setData({ field: 'loading', data: false }))
      }
    } else {
      dispatch(serviceSubCategoriesActions.setData({ field: 'loading', data: false }))
    }
  }, [selectedParentCategory])


  // useEffect(()=>{
  //   console.log("================ SelectedSubCategories =================")
  //   console.log(SelectedSubCategories)

  // },[SelectedSubCategories])


  useEffect(() => {
    // console.log({loadingCategories,isSubCategoryLoading})
    if (loadingCategories || isSubCategoryLoading || createProcessing) {
      setProcessingLoader(true)
    } else {
      setProcessingLoader(false)
    }
  }, [loadingCategories, isSubCategoryLoading, createProcessing])

  const handleAddServiceProcessing = async () => {
    if(coverImage.trim() === ''){
      Toast.show({
          type: 'error',
          text1: 'ERROR',
          text2: t('newDeveloper.ErrorEnterCoverImage'),
      });
      return  
    }
    if(serviceName.trim() === ''){
      Toast.show({
          type: 'error',
          text1: 'ERROR',
          text2: t('newDeveloper.ErrorEnterServiceName'),
      });
      return  
    }
    if(selectedParentCategory.trim() === ''){
      Toast.show({
          type: 'error',
          text1: 'ERROR',
          text2: t('newDeveloper.ErrorSelectedCategory'),
      });
      return  
    }
    if(selectedSubCategory.trim() === ''){
      Toast.show({
          type: 'error',
          text1: 'ERROR',
          text2: t('newDeveloper.ErrorSelectSubCategory'),
      });
      return  
    }

   
    if(parseFloat(minBidAmt) === 0){
      Toast.show({
          type: 'error',
          text1: 'ERROR',
          text2: t('newDeveloper.ErrorCorrectBidAmount'),
      });
      return  
    }

    if(shortDescription.trim() === ''){
      Toast.show({
          type: 'error',
          text1: 'ERROR',
          text2: t('newDeveloper.ErrorShortDescription'),
      });
      return  
    }

    if(description.trim() === ''){
      Toast.show({
          type: 'error',
          text1: 'ERROR',
          text2: t('newDeveloper.ErrorDescription'),
      });
      return  
    }
    if(thumbnailImage.trim() === ''){
      Toast.show({
          type: 'error',
          text1: 'ERROR',
          text2: t('newDeveloper.ErrorSelectThumbnailImage'),
      });
      return  
    }
  
    
    const formData = new FormData()
    formData.append('service_name', serviceName)
    formData.append('category_id', selectedParentCategory)
    formData.append('sub_category_id', selectedSubCategory)
    formData.append('cover_image', {
      uri: coverImage,
      name: 'cover_image.jpg',
      type: 'image/jpeg',
    });
    formData.append('thumbnail', {
      uri: thumbnailImage,
      name: 'thumbnail.jpg',
      type: 'image/jpeg',
    });
    formData.append('tax', parseFloat(taxAmt))
    formData.append('min_bidding_price', parseFloat(minBidAmt))
    if(tags!==''){
      formData.append('tags', tags)
    }
    formData.append('short_description', shortDescription)
    formData.append('description', description)

     let countVariants = 0
    if (serviceVariants.length > 0) {
      serviceVariants.forEach((vrDt, vrindex) => {
        if(vrDt.name.trim()!== '' && parseFloat(vrDt.price)!==0){
          formData.append('variant_name[]', vrDt.name)
          formData.append('variant_price[]', vrDt.price)
          countVariants++
        }
      })
    }
    if(countVariants === 0){
      Toast.show({
        type: 'error',
        text1: 'ERROR',
        text2: t('newDeveloper.ErrorVariant'),
    });
    return  
    }
    setCreateProcessing(true)
    const response: Response = await addNewServiceByProvider(formData)
    if (response?.data?.response_code === 'service_store_200') {
        Toast.show({
          type: 'success',
          text1: 'SUCCESS',
          text2: t(response?.data?.message),
        });
        setCoverImage('')
        setServiceName('')
        setDescription('')
        setShortDescription('')
        setTaxAmt('')
        setMinBidAmt('')
        setThumbnailImage('')
        setTags('')
        setServiceVariants([{ name: '', price: '' }])
        setSelectedParentCategory('')
        setSelectedSubCategory('')
    } else {
      Toast.show({
        type: 'error',
        text1: 'ERROR',
        text2: t(response?.data?.message),
      });

    }
    setCreateProcessing(false)

  }

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: windowHeight(3) }}
      showsVerticalScrollIndicator={false}
      style={[
        GlobalStyle.mainView,
        { backgroundColor: isDark ? appColors.darkCard : appColors.white },
      ]}>
      <Header showBackArrow={true} title={'addNewService.title'} />
      <AddNewImageSection image={coverImage} setSelectedImage={setCoverImage} />
      <View
        style={[
          GlobalStyle.horizontalLine,
          {
            marginTop: windowHeight(3),
            marginHorizontal: 20,
            borderColor: isDark ? appColors.darkBorder : appColors.border,
          },
        ]}
      />

      <InputView
        serviceName={serviceName}
        setServiceName={setServiceName}
        shortDescription={shortDescription}
        setShortDescription={setShortDescription}
        description={description}
        setDescription={setDescription}
        taxAmt={taxAmt}
        setTaxAmt={setTaxAmt}
        minBidAmt={minBidAmt}
        setMinBidAmt={setMinBidAmt}
        tags={tags}
        setTags={setTags}
        thumbnailImage={thumbnailImage}
        setThumbnailImage={setThumbnailImage}
        serviceVariants={serviceVariants}
        setServiceVariants={setServiceVariants}
        parentCategories={ServiceCategories}
        selectedParentCategory={selectedParentCategory}
        setSelectedParentCategory={setSelectedParentCategory}
        subcategories={SelectedSubCategories.subcategories}
        selectedSubCategory={selectedSubCategory}
        setSelectedSubCategory={setSelectedSubCategory}
      />

      <GradientBtn
        label="addNewService.addService"
        onPress={handleAddServiceProcessing}
        additionalStyle={{
          marginHorizontal: windowWidth(5),
          marginTop: windowHeight(3),
        }}
      />
      <Spinner
        visible={processingSpinner}
        textContent={'Processing.....'}
        textStyle={{ color: '#FFF' }}
      />
    </ScrollView>
  );
}
