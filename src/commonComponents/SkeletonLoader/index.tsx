import React from 'react';
import { View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const SkeletonLoader: React.FC = () => {
  return (
    <View style={{marginTop:10}}>
      <SkeletonPlaceholder borderRadius={4}>
        <SkeletonPlaceholder.Item
          flexDirection="row"
          alignItems="center"
          marginBottom={10}
        >
          <SkeletonPlaceholder.Item marginLeft={20}>
            <SkeletonPlaceholder.Item width={350} height={20} />
            <SkeletonPlaceholder.Item
              marginTop={6}
              width={300}
              height={20}
            />
            <SkeletonPlaceholder.Item
              marginTop={6}
              width={250}
              height={20}
            />
            <SkeletonPlaceholder.Item
              marginTop={6}
              width={200}
              height={20}
            />
            <SkeletonPlaceholder.Item
              marginTop={6}
              width={150}
              height={20}
            />
            <SkeletonPlaceholder.Item
              marginTop={6}
              width={100}
              height={20}
            />
            <SkeletonPlaceholder.Item
              marginTop={6}
              width={50}
              height={20}
            />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
    </View>
  );
}

export default SkeletonLoader;
