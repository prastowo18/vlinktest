import axios from 'axios';

import { useCallback, useState } from 'react';
import { Product } from '../types';

const API_URL = 'https://dummyjson.com';

export const useProduct = (id: string) => {
  const [product, setProduct] = useState<Product>();
  const [isLoading, setIsLoading] = useState(true);

  const fetchProduct = useCallback(async () => {
    try {
      const { data } = await axios.get(`${API_URL}/products/${id}`);
      setProduct(data);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  }, [id]);

  const loadData = useCallback(async () => {
    setIsLoading(true);
    try {
      await fetchProduct();
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setIsLoading(false);
    }
  }, [fetchProduct]);

  return { product, isLoading, loadData };
};
