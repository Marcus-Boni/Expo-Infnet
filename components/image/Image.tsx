import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-paper';

interface ImageProps {
  imageUrl: string;
  size?: number;
}

const Image = ({ imageUrl, size = 64 }: ImageProps) => {
  return (
    <View style={styles.container}>
      <Avatar.Image size={size} source={{ uri: imageUrl }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Image;
