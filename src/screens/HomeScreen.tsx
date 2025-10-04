import React, { useEffect, useState } from 'react';
import { HomeContent } from '../components/home';
import { useProducts } from '../hooks/useProducts';
import PageLoader from '../components/PageLoader';

export default function HomeScreen() {
  const [refreshing, setRefreshing] = useState(false);

  const { products, loadData, isLoading } = useProducts();

  useEffect(() => {
    loadData();
  }, [loadData]);

  const onRefresh = async () => {
    setRefreshing(true);
    await loadData();
    setRefreshing(false);
  };

  if (isLoading && !refreshing) return <PageLoader />;

  return (
    <HomeContent
      refreshing={refreshing}
      products={products}
      onRefresh={onRefresh}
    />
  );
}
