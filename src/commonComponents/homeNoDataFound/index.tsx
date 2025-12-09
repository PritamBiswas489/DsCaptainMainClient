import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const HomeNoFataFound = ({message}:{message:string}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
    backgroundColor: '#f8d7da', // light red/pink background for warning
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#f5c6cb', // slightly darker red for the border
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  message: {
    fontSize: 16,
    color: '#721c24', // dark red for the text
    textAlign: 'center',
  },
});

export default HomeNoFataFound;
