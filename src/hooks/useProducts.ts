import axios from 'axios';

import { useCallback, useState } from 'react';

const API_URL = 'https://dummyjson.com';

export const useProducts = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProducts = useCallback(async () => {
    try {
      const { data } = await axios.get(`${API_URL}/products`, {
        params: {
          skip: 0,
          limit: 10,
        },
      });
      setProducts(data.products);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }, []);

  const loadData = useCallback(async () => {
    setIsLoading(true);
    try {
      await fetchProducts();
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setIsLoading(false);
    }
  }, [fetchProducts]);

  return { products, isLoading, loadData };
};
