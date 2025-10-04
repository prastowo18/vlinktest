import React from 'react';
import { Text, Button } from 'react-native';
import AppLayout from '../components/AppLayout';

export default function DetailProductScreen({ route, navigation }: any) {
  const { name } = route.params || {};
  return (
    <AppLayout>
      <Text style={{ fontSize: 16, marginBottom: 16 }}>👤 Profile Screen</Text>
      {name && <Text style={{ marginBottom: 16 }}>Welcome, {name}!</Text>}
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </AppLayout>
  );
}
