import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  PixelRatio,
} from 'react-native';
import Animated from 'react-native-reanimated';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const windowWidth = (width: number) => {
  const tempWidth = SCREEN_WIDTH * (width / 480);
  return PixelRatio.roundToNearestPixel(tempWidth);
};

const SkeletonLoader: React.FC = () => {
  return (
    <Animated.View style={styles.itemLoaderContainer}>
      {Array.from({ length: 10 }).map((_, index) => (
        <View key={index} style={styles.cardContainer}>
          <View style={styles.row}>
            {/* Logo */}
            <View style={styles.logoPlaceholder} />

            {/* Order information */}
            <View style={styles.textContainer}>
              <View style={styles.orderIdPlaceholder} />
              <View style={styles.datePlaceholder} />
            </View>

            {/* Status / Item */}
            <View style={styles.statusContainer}>
              <View style={styles.statusPlaceholder} />
              <View style={styles.itemPlaceholder} />
            </View>
          </View>
        </View>
      ))}
    </Animated.View>
  );
};

export default SkeletonLoader;

const styles = StyleSheet.create({
  itemLoaderContainer: {
    width: '100%',
    paddingHorizontal: windowWidth(10),
  },

  cardContainer: {
    width: '100%',
    marginVertical: 6,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderStyle: 'dashed',
    backgroundColor: '#ffffff',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },

  logoPlaceholder: {
    height: 50,
    width: 50,
    borderRadius: 8,
    backgroundColor: '#e0e0e0',
  },

  textContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
    minWidth: 0,
  },

  orderIdPlaceholder: {
    height: 15,
    width: '60%',
    borderRadius: 4,
    marginBottom: 7,
    backgroundColor: '#e0e0e0',
  },

  datePlaceholder: {
    height: 15,
    width: '80%',
    borderRadius: 4,
    backgroundColor: '#e0e0e0',
  },

  statusContainer: {
    width: 75,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginLeft: 8,
  },

  statusPlaceholder: {
    height: 20,
    width: 70,
    borderRadius: 8,
    backgroundColor: '#e0e0e0',
  },

  itemPlaceholder: {
    height: 15,
    width: 50,
    borderRadius: 4,
    marginTop: 7,
    backgroundColor: '#e0e0e0',
  },
});