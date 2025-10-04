import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { AboutSection } from './AboutSection';
import { ReviewSection } from './ReviewSection';

import { COLORS } from '../../constants/colors';

import { Product } from '../../types';

export const ProductDetailInfo = ({ product }: { product: Product }) => {
  const [activeTab, setActiveTab] = useState<'about' | 'reviews'>('about');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{product.title}</Text>

      <View style={styles.ratingRow}>
        <Ionicons name="star" size={16} color="#f1c40f" />
        <Text style={styles.ratingText}>{product.rating} Ratings</Text>
        <Text style={styles.dot}>•</Text>
        <Text style={styles.grayText}>{product.reviews.length} Reviews</Text>
        <Text style={styles.dot}>•</Text>
        <Text style={styles.grayText}>{2900}+ Sold</Text>
      </View>

      <View style={styles.tabRow}>
        <TouchableOpacity
          onPress={() => setActiveTab('about')}
          style={styles.tabButton}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'about' && styles.tabTextActive,
            ]}
          >
            About Item
          </Text>
          {activeTab === 'about' && <View style={styles.tabIndicator} />}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setActiveTab('reviews')}
          style={styles.tabButton}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'reviews' && styles.tabTextActive,
            ]}
          >
            Reviews
          </Text>
          {activeTab === 'reviews' && <View style={styles.tabIndicator} />}
        </TouchableOpacity>
      </View>

      {activeTab === 'about' ? (
        <AboutSection product={product} />
      ) : (
        <ReviewSection product={product} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#222',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  ratingText: { marginLeft: 4, color: '#555', fontSize: 13 },
  grayText: { color: '#777', fontSize: 13 },
  dot: { marginHorizontal: 6, color: '#bbb' },
  tabRow: {
    flexDirection: 'row',
    marginTop: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  tabButton: {
    marginRight: 20,
    alignItems: 'center',
  },
  tabText: {
    fontSize: 14,
    color: '#888',
    fontWeight: '500',
  },
  tabTextActive: {
    color: COLORS.primary,
  },
  tabIndicator: {
    marginTop: 4,
    height: 2,
    width: '100%',
    backgroundColor: COLORS.primary,
    borderRadius: 1,
  },
});
