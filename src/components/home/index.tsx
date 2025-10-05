import React, { useRef } from 'react';
import {
  FlatList,
  RefreshControl,
  StyleSheet,
  ActivityIndicator,
  View,
  Text,
} from 'react-native';

import { ProductItem } from './ProductItem';
import NoProductsFound from '../NoProductsFound';
import { Product } from '../../types';
import { Header } from './Header.';

type Props = {
  products: Product[];
  onRefresh: () => void;
  refreshing: boolean;
  onLoadMore: () => void;
  isLoadingMore: boolean;
  hasMore: boolean;
};

export const HomeContent = ({
  products,
  onRefresh,
  refreshing,
  onLoadMore,
  isLoadingMore,
  hasMore,
}: Props) => {
  const isEndReachedCalledDuringMomentum = useRef(false);

  const handleEndReached = () => {
    if (
      !isEndReachedCalledDuringMomentum.current &&
      hasMore &&
      !isLoadingMore
    ) {
      onLoadMore();
      isEndReachedCalledDuringMomentum.current = true;
    }
  };

  return (
    <FlatList
      style={styles.container}
      data={products}
      renderItem={({ item }) => <ProductItem item={item} />}
      keyExtractor={item => item.id.toString()}
      numColumns={2}
      ListEmptyComponent={<NoProductsFound />}
      columnWrapperStyle={styles.columnWrapper}
      ListHeaderComponent={Header}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      onEndReachedThreshold={0.2}
      onEndReached={handleEndReached}
      onMomentumScrollBegin={() => {
        isEndReachedCalledDuringMomentum.current = false;
      }}
      ListFooterComponent={
        <View style={styles.footer}>
          {isLoadingMore && <ActivityIndicator size="small" color="#000" />}
          {!hasMore && products.length > 0 && (
            <Text style={styles.noMoreText}>No more products</Text>
          )}
        </View>
      }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  contentContainer: { paddingBottom: 40 },
  columnWrapper: {
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  footer: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  noMoreText: {
    color: 'gray',
    marginTop: 10,
    fontSize: 14,
  },
});
