import Ionicons from 'react-native-vector-icons/Ionicons';
import { Image, StyleSheet, Text, View } from 'react-native';

import { Product } from '../../types';

export const ProductItem = ({ item }: { item: Product }) => {
  return (
    <View style={styles.card}>
      <Image src={item.thumbnail} style={styles.productImage} />

      <Text style={styles.category}>{item.category}</Text>

      <Text style={styles.productName} numberOfLines={2}>
        {item.title}
      </Text>

      <View style={styles.ratingRow}>
        <Ionicons name="star" size={14} color="#f1c40f" />
        <Text style={styles.ratingText}>{item.rating}</Text>
      </View>

      <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    marginBottom: 20,
    width: '47%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  productImage: { width: '100%', height: 140, borderRadius: 8 },
  category: { fontSize: 10, color: '#999', marginTop: 6 },
  productName: { fontWeight: '500', marginTop: 2, fontSize: 13, color: '#333' },
  ratingRow: { flexDirection: 'row', alignItems: 'center', marginTop: 4 },
  ratingText: { fontSize: 12, marginLeft: 4, color: '#666' },
  productPrice: {
    color: '#1abc9c',
    fontWeight: '600',
    marginTop: 6,
    fontSize: 14,
  },
});
