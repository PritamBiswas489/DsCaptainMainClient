import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {GlobalStyle} from '@style/styles';
import Header from '@commonComponents/header';
import {Company, Notes} from '@utils/icons';
import TextInputComponent from '@otherComponent/auth/textInput';
import {windowHeight, windowWidth} from '@theme/appConstant';
import GradientBtn from '@commonComponents/gradientBtn';
import UploadContainerView from '@otherComponent/auth/uploadContainer';
import {ImageLibraryOptions} from 'react-native-image-picker';
import {handleImagePicker} from '@utils/functions';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from 'src/navigation/types';
import {useValues} from '../../../../App';
import appColors from '@theme/appColors';

export function ServiceProof({route}: any) {
  const [form, setForm] = useState({serviceTitle: '', details: ''});
  const [errors, setErrors] = useState({serviceTitle: '', details: ''});
  const [image, setImage] = useState<string | null>('');
  const [showImageError, setImageError] = useState('');
  const details = route?.params?.serviceProofData?.details;
  const serviceTitle = route?.params?.serviceProofData?.serviceTitle;
  const imageUrl = route?.params?.serviceProofData?.image;

  const {isDark,t} = useValues();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const onChange = ({name, value}: {name: string; value: string}) => {
    setForm({...form, [name]: value});
    if (value !== '') {
      setErrors(prev => {
        return {...prev, [name]: null};
      });
    }
  };

  const onSubmit = () => {
    if (!form.serviceTitle && !serviceTitle) {
      setErrors(prev => {
        return {...prev, serviceTitle: t('addExtraCharges.enterTitle')};
      });
    }
    if (!form.details && !details) {
      setErrors(prev => {
        return {...prev, details: t('auth.details')};
      });
    }

    if (!image && !imageUrl) {
      setImageError(t('booking.uploadServicePhoto'));
    } else {
      {
        imageUrl && setImage(imageUrl);
        navigation.navigate('CompletedBooking', {
          serviceProofData: {
            serviceTitle: form.serviceTitle,
            details: form.details,
            image: image,
          },
        });
      }
    }
  };

  const openImage = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    handleImagePicker(options, (imageUri: string) => {
      setImage(imageUri);
    });
  };

  return (
    <View
      style={[
        GlobalStyle.mainView,
        {backgroundColor: isDark ? appColors.darkCard : appColors.white},
      ]}>
      <Header title="booking.serviceProof" showBackArrow={true} />
      <TextInputComponent
        placeholder={
          form.serviceTitle ? form.serviceTitle : t('auth.enterName')
        }
        Icon={<Company />}
        containerStyle={{marginTop: windowWidth(8)}}
        value={serviceTitle ? serviceTitle : form.serviceTitle}
        onChangeText={value => {
          onChange({name: 'serviceTitle', value});
        }}
        error={errors.serviceTitle}
      />
      <TextInputComponent
        containerStyle={styles.containerStyle}
        placeholder={t('auth.details')}
        inputStyle={styles.inputStyle}
        Icon={<Notes />}
        value={details ? details : form.details}
        onChangeText={value => {
          onChange({name: 'details', value});
        }}
        error={errors.details}
      />
      <UploadContainerView
        title={'booking.uploadServicePhoto'}
        containerStyle={{marginTop: windowHeight(2)}}
        onPress={() => openImage()}
        image={imageUrl ? imageUrl : image}
        setImage={setImage}
      />

      {!image && <Text style={styles.errorStyle}>{showImageError}</Text>}

      <GradientBtn label="common.submit" onPress={onSubmit} />
    </View>
  );
}
