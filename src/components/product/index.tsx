import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import { Header } from './Header';
import { BuySection } from './BuySection';
import { ProductDetailInfo } from './Detail';
import { ProductImageGallery } from './Image';

import { Product } from '../../types';

const ProductContent = ({ product }: { product: Product }) => {
  const data = [
    { key: 'gallery', type: 'gallery' },
    { key: 'detail', type: 'detail' },
  ];

  const renderItem = ({ item }: { item: { type: string } }) => {
    if (item.type === 'gallery') {
      return <ProductImageGallery thumbnail={product.thumbnail} />;
    }
    if (item.type === 'detail') {
      return <ProductDetailInfo product={product} />;
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <Header />

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        contentContainerStyle={styles.contentContainer}
      />

      <BuySection price={product.price} />
    </View>
  );
};

export default ProductContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingBottom: 160,
  },
});
