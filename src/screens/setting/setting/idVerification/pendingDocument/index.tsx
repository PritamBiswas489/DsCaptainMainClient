import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {data} from './data';
import {pendingDocument} from '@utils/images';
import appColors from '@theme/appColors';
import {windowWidth} from '@theme/appConstant';
import {handleImagePicker} from '@utils/functions';
import {ImageLibraryOptions} from 'react-native-image-picker';
import {useValues} from '../../../../../../App';

export function PendingDocument() {
  const [selectedDocument, setSelectedDocument] = useState(0);
  const [image, setImage] = useState<string | null>('');
  const {isDark,t} = useValues();

  const openImage = (item: number) => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    setSelectedDocument(item);

    handleImagePicker(options, (imageUri: string) => {
      setImage(imageUri);
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('idVerification.pendingDocument')}</Text>
      <FlatList
        data={data}
        renderItem={({item, index}) => (
          <View
            style={[
              styles.innerContainer,
              {borderColor: isDark ? appColors.darkBorder : appColors.border},
            ]}>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => openImage(index)}>
              <Image source={pendingDocument} style={styles.imageStyle} />
            </TouchableOpacity>
            <View>
              <Text
                style={[
                  styles.name,
                  {color: isDark ? appColors.white : appColors.darkText},
                ]}>
                {t(item.name)}
              </Text>
              <Text
                style={[
                  styles.name,
                  {color: appColors.error, top: windowWidth(1)},
                ]}>
                {t('idVerification.notSubmit')}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}
