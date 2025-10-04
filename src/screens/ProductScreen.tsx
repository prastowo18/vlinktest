import React, { useEffect } from 'react';
import { useRoute } from '@react-navigation/native';

import PageLoader from '../components/PageLoader';
import ProductContent from '../components/product';

import { useProduct } from '../hooks/useProduct';

export default function ProductScreen() {
  const route = useRoute<any>();
  const { id } = route.params;

  const { product, loadData, isLoading } = useProduct(id);

  useEffect(() => {
    loadData();
  }, [loadData]);

  if (isLoading) return <PageLoader />;

  return <ProductContent product={product!} />;
}
