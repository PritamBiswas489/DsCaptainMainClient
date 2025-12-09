import {View, Modal} from 'react-native';
import React from 'react';
import {styles} from './styles';

export function DatePickerModal({
  showModal,
  setShowModal,
  content,
}: {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  content: React.ReactNode;
}) {
  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={showModal}
      onRequestClose={() => setShowModal(false)}>
      <View style={styles.container}>
        <View style={styles.containerView}>{content}</View>
      </View>
    </Modal>
  );
}
