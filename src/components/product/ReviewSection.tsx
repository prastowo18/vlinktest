import { FlatList, StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Product } from '../../types';

export const ReviewSection = ({ product }: { product: Product }) => {
  return (
    <View style={styles.reviewListContainer}>
      {product.reviews.length > 0 ? (
        <FlatList
          data={product.reviews}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.reviewCard}>
              <View style={styles.reviewHeader}>
                <Text style={styles.reviewerName}>{item.reviewerName}</Text>
                <Text style={styles.reviewDate}>
                  {new Date(item.date).toLocaleDateString()}
                </Text>
              </View>
              <View style={styles.starsRow}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Ionicons
                    key={i}
                    name={i < item.rating ? 'star' : 'star-outline'}
                    size={14}
                    color="#f1c40f"
                  />
                ))}
              </View>
              <Text style={styles.commentText}>{item.comment}</Text>
            </View>
          )}
        />
      ) : (
        <Text style={styles.reviewsPlaceholder}>No reviews yet.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  reviewListContainer: {
    marginTop: 12,
  },
  reviewCard: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingVertical: 10,
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  reviewerName: {
    fontWeight: '600',
    color: '#222',
  },
  reviewDate: {
    color: '#999',
    fontSize: 12,
  },
  starsRow: {
    flexDirection: 'row',
    marginTop: 4,
  },
  commentText: {
    marginTop: 4,
    color: '#555',
    fontSize: 13,
    lineHeight: 18,
  },
  reviewsPlaceholder: {
    color: '#888',
    fontSize: 13,
    marginTop: 12,
  },
});
