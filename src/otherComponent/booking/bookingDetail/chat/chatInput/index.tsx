import { View, TextInput, TouchableOpacity, Animated, Easing, Alert, Text, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Emoji, Send, Microphone, Attachment, ImageIcon,Delete } from '@utils/icons';
import { styles } from './styles';
import appColors from '@theme/appColors';
import { useValues } from '../../../../../../App';
import Icon from 'react-native-vector-icons/FontAwesome';
import { launchImageLibrary, ImageLibraryOptions, Asset } from 'react-native-image-picker';
import DocumentPicker, { DocumentPickerResponse } from 'react-native-document-picker';
import { limitWords } from '@src/config/utility';

export default function ChatInput({
  newMessage,
  setNewMessage,
  handleSendMessage,
  sendingMessageLoader,
  selectedImageUri,
  selectedFileName,
  setSelectedImageUri,
  setSelectedFileName

}: {
  newMessage: string;
  setNewMessage: React.Dispatch<React.SetStateAction<string>>;
  handleSendMessage: () => void;
  sendingMessageLoader: boolean;
  selectedImageUri: string | null;
  selectedFileName: {
    name:string,
    filetype:string,
    uri:string
} | null;
  setSelectedImageUri: React.Dispatch<React.SetStateAction<string | null>>;
  setSelectedFileName: React.Dispatch<React.SetStateAction<{
    name:string,
    filetype:string,
    uri:string
} | null>>;

}) {
  const { isDark, t } = useValues();

  const [spinValue] = useState(new Animated.Value(0));
  

  // Start the spin animation
  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1000, // Rotation duration
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, [spinValue]);

  // Interpolate rotation animation
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const openGallery = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      quality: 1,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        Alert.alert('Error', response.errorMessage || 'Something went wrong');
      } else if (response.assets && response.assets.length > 0) {
        const selectedImage: Asset = response.assets[0];
        setSelectedImageUri(selectedImage.uri || null);
      }
    });
  };
  const openDocumentLibrary = async () => {
    try {
      const result: DocumentPickerResponse[] = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles], // You can limit this to specific types (e.g., `DocumentPicker.types.pdf`)
      });
      
      // Assuming the user picks only one file, you can handle multiple as well
      const file = result[0];
      if(file?.name && file?.type && file?.uri){
        setSelectedFileName({
            name:file.name,
            filetype:file.type,
            uri:file.uri
        });
      }
      

      console.log('File picked:', file);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled document picker');
      } else {
        Alert.alert('Error', 'Something went wrong while picking the document');
        console.log('DocumentPicker Error: ', err);
      }
    }
  };
  
  return (
    <>
    <View style={styles.previewContainer}>
    {selectedImageUri && (
      <View style={styles.imagePreviewContainer}>
        <Image source={{ uri: selectedImageUri }} style={styles.imagePreview} />
        <TouchableOpacity onPress={() => setSelectedImageUri(null)}>
           <Delete/>
        </TouchableOpacity>
      </View>
    )}
    {selectedFileName?.name && (
      <View style={styles.filePreviewContainer}>
        <Text style={styles.fileName}>{limitWords(selectedFileName.name,4)  }</Text>
        <TouchableOpacity onPress={() => setSelectedFileName(null)}>
          <Delete/>
        </TouchableOpacity>
      </View>
    )}
    </View>
    <View
      style={[
        styles.inputContainer,
        { backgroundColor: isDark ? appColors.darkCard : appColors.boxBg },
      ]}>
       
      <TextInput
        style={[
          styles.input,
          { backgroundColor: isDark ? appColors.darkCard : appColors.boxBg },
          { color: isDark ? appColors.white : appColors.darkText, }
        ]}
        placeholderTextColor={appColors.lightText}
        placeholder={t('chat.typeHere')}
        value={newMessage}
        onChangeText={setNewMessage}
      />
      <TouchableOpacity onPress={openGallery} style={{ marginRight: 10 }} activeOpacity={0.9}>
        <ImageIcon />
      </TouchableOpacity>
      <TouchableOpacity onPress={openDocumentLibrary} style={{ marginRight: 2 }} activeOpacity={0.9}>
        <Attachment />
      </TouchableOpacity>
      {!sendingMessageLoader ? <TouchableOpacity
        onPress={handleSendMessage}
        style={styles.buttonView}
        activeOpacity={0.9}>
        <Send />
      </TouchableOpacity> : <Animated.View style={{ transform: [{ rotate: spin }], marginLeft: 10 }}>
        <Icon name="spinner" size={25} color={appColors.primary} />
      </Animated.View>}

    </View>
    </>
  );
}
