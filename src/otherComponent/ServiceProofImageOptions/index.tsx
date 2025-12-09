import {View} from 'react-native';
import React from 'react';
import {GlobalStyle} from '@style/styles';
import CancelHeader from '@commonComponents/cancelHeader';
import ImageOptions from './imageOptions';
import {useValues} from '../../../App';
import appColors from '@theme/appColors';

export default function ServiceProofImageOptions({
  setShowModal,
  addServiceProofImages,
}: {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  addServiceProofImages:(value:string)=>void
}) {
  const {isDark} = useValues();
  return (
    <View
      style={[
        GlobalStyle.modal,
        {backgroundColor: isDark ? appColors.darkCard : appColors.white},
      ]}>
      <CancelHeader
        gotoScreen={() => {
          setShowModal(false);
        }}
        title={'auth.optionBelow'}
      />
      <ImageOptions addServiceProofImages={addServiceProofImages} setShowModal={setShowModal} />
    </View>
  );
}
