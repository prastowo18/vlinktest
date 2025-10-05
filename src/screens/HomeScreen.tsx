/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import { useProducts } from '../hooks/useProducts';
import { HomeContent } from '../components/home';

export const HomeScreen = () => {
  const {
    products,
    isLoading,
    refreshing,
    onRefresh,
    onLoadMore,
    isLoadingMore,
    hasMore,
  } = useProducts();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <HomeContent
      products={products}
      refreshing={refreshing}
      onRefresh={onRefresh}
      onLoadMore={onLoadMore}
      isLoadingMore={isLoadingMore}
      hasMore={hasMore}
    />
  );
};
