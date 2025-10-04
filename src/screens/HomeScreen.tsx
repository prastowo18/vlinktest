import React, { useEffect, useState } from 'react';
import { Text, Button } from 'react-native';
import AppLayout from '../components/AppLayout';
import { useAuthStore } from '../store/useAuthStore';
import { useProducts } from '../hooks/useProducts';
import PageLoader from '../components/PageLoader';

export default function HomeScreen({ navigation }: any) {
  const { isLoggedIn } = useAuthStore();
  const logout = useAuthStore(state => state.logout);
  const email = useAuthStore(state => state.email);
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

  console.log(products);

  return (
    <AppLayout>
      <Text style={{ fontSize: 16, marginBottom: 16 }}>
        📊 Dashboard content {isLoggedIn ? 'Login' : 'NoLogin'}here {email}
      </Text>
      <Button
        title="Go to Detail"
        onPress={() => navigation.navigate('Detail', { name: 'John Doe' })}
      />
      <Button title="Logout" onPress={logout} />
    </AppLayout>
  );
}
