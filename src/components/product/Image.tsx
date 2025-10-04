import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

interface Props {
  thumbnail: string;
}

export const ProductImageGallery = ({ thumbnail }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.mainImageWrapper}>
        <Image src={thumbnail} style={styles.mainImage} resizeMode="contain" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
  },
  mainImageWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: '#F7F7F7',
    marginTop: 10,
  },
  mainImage: {
    width: width * 0.6,
    height: width * 0.7,
    borderRadius: 12,
  },
});
