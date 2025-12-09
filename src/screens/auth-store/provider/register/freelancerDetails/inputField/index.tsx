import {View} from 'react-native';
import React, {useState} from 'react';
import {Person, Email, Identity, Password, Experience} from '@utils/icons';
import {windowHeight, windowWidth} from '@theme/appConstant';
import TextInputComponent from '@otherComponent/auth-store/textInput';
import PhoneTextInput from '@otherComponent/auth-store/phoneTextInput';
import appColors from '@theme/appColors';
import {InputType} from '@otherComponent/auth-store/textInput/types';
import MultiSelectionDrodpwn from '@otherComponent/multiSelectionDropdown';
import {experienceData, IdentityData} from './data/data';
import UploadContainerView from '@otherComponent/auth-store/uploadContainer';
import {ImageLibraryOptions} from 'react-native-image-picker';
import {handleImagePicker} from '@utils/functions';
import {styles} from './styles';
import {DropdownWithIcon} from '@commonComponents/dropdownWithIcon';
import {dropDownType} from './data/types';
import {GlobalStyle} from '@style/styles';
import { useValues } from '../../../../../../../App';
export default function InputView() {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [phoneNo, setPhone] = useState('');
  const [identityNumber, setIdentityNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [selectIdentity, setSelectIdentity] = useState<
    dropDownType | undefined
  >();
  const [image, setImage] = useState<string | null>('');
  const [experience, setExperience] = useState('');
  const [experienceYear, setExperienceYear] = useState<
    dropDownType | undefined
  >();
 const {t} = useValues()
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
    <View>
      <TextInputComponent
        placeholder={t('auth.enterName')}
        Icon={<Person />}
        value={name}
        onChangeText={value => {
          setName(value);
        }}
        containerStyle={{marginBottom: windowHeight(1)}}
      />
      <TextInputComponent
        placeholder={t('auth.enterMail')}
        Icon={<Email />}
        value={mail}
        onChangeText={value => {
          setMail(value);
        }}
        containerStyle={{marginBottom: windowHeight(1)}}
        keyboardType="email-address"
      />

      <PhoneTextInput
        phoneContent={
          <>
            <TextInputComponent
              placeholder={t('auth.phoneNumber')}
              value={phoneNo}
              onChangeText={value => {
                setPhone(value);
              }}
              containerStyle={{marginBottom: windowHeight(1)}}
              keyboardType="number-pad"
            />
          </>
        }
      />
      <MultiSelectionDrodpwn />
      <DropdownWithIcon
        icon={<Identity />}
        label="auth.selectIdentity"
        data={IdentityData}
        onSelect={setSelectIdentity}
      />

      <TextInputComponent
        placeholder={t('auth.identityNo')}
        Icon={<Identity />}
        value={identityNumber}
        onChangeText={value => {
          setIdentityNumber(value);
        }}
        containerStyle={{marginBottom: windowHeight(1)}}
        keyboardType={'number-pad'}
      />

      <UploadContainerView
        title={'auth.identityPhoto'}
        containerStyle={{
          marginTop: windowHeight(2),
        }}
        onPress={() => openImage()}
        image={image}
        setImage={setImage}
      />
      <View style={styles.row}>
        <TextInputComponent
          inputStyle={styles.containerView}
          placeholder={t('auth.numberExperience')}
          Icon={<Experience />}
          value={experience}
          onChangeText={value => {
            setExperience(value);
          }}
          textContainerStyle={styles.textContainerStyle}
          containerStyle={{marginTop: windowWidth(2)}}
        />

        <DropdownWithIcon
          data={experienceData}
          label={'auth.month'}
          onSelect={setExperienceYear}
          dropdownStyle={GlobalStyle.dropdown}
          overlayStyle={GlobalStyle.overlayStyle}
          iconStyle={GlobalStyle.iconStyle}
          dropdownOptionStyle={GlobalStyle.dropdownOptionStyle}
        />
      </View>

      <TextInputComponent
        placeholder={t('introSlider.passwordPlaceholder')}
        Icon={<Password color={appColors.lightText} />}
        value={password}
        onChangeText={value => {
          setPassword(value);
        }}
        inputType={InputType.PASSWORD}
      />

      <TextInputComponent
        placeholder={t('auth.reEnterPassword')}
        Icon={<Password color={appColors.lightText} />}
        value={confirmPassword}
        onChangeText={value => {
          setConfirmPassword(value);
        }}
        containerStyle={{marginBottom: windowHeight(1)}}
        inputType={InputType.PASSWORD}
      />
    </View>
  );
}
