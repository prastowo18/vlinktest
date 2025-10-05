import { useCallback, useState, useEffect } from 'react';
import axios from 'axios';
import { Product } from '../types';

const API_URL = 'https://dummyjson.com/products';
const LIMIT = 10;

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [skip, setSkip] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchProducts = useCallback(async (nextSkip = 0, reset = false) => {
    try {
      if (reset) setRefreshing(true);
      else setIsLoadingMore(true);

      const response = await axios.get(
        `${API_URL}?limit=${LIMIT}&skip=${nextSkip}`,
      );
      const newProducts = response.data.products;

      if (reset) {
        setProducts(newProducts);
      } else {
        setProducts(prev => [...prev, ...newProducts]);
      }

      setSkip(nextSkip + LIMIT);
      setHasMore(newProducts.length === LIMIT);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setIsLoading(false);
      setRefreshing(false);
      setIsLoadingMore(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts(0, true);
  }, [fetchProducts]);

  const onRefresh = useCallback(() => {
    fetchProducts(0, true);
  }, [fetchProducts]);

  const onLoadMore = useCallback(() => {
    if (!isLoadingMore && hasMore) {
      fetchProducts(skip);
    }
  }, [fetchProducts, skip, isLoadingMore, hasMore]);

  return {
    products,
    isLoading,
    refreshing,
    onRefresh,
    onLoadMore,
    isLoadingMore,
    hasMore,
  };
};
